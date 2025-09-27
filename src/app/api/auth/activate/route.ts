import { NextRequest } from "next/server";
import { User } from "@/models/User";
import AdminUser from "@/models/AdminUser";
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();
  if (!email || !code) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  await connectToDatabase();

  // Start transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Find pending user in transaction
    const user = await User.findOne({ email, activationCode: code, status: "pending" }).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return new Response(JSON.stringify({ error: "Invalid code or email" }), { status: 400 });
    }

    if (user.activationExpires && user.activationExpires < new Date()) {
      await session.abortTransaction();
      session.endSession();
      return new Response(JSON.stringify({ error: "Activation code expired" }), { status: 400 });
    }

    // Add to AdminUser collection (if not already present)
    const existingAdminUser = await AdminUser.findOne({ email: user.email }).session(session);
    if (!existingAdminUser) {
      await AdminUser.create([{
        username: user.username,
        password: user.password,
        email: user.email,
        isAdmin: false,
      }], { session });
    }

    // Remove user from User collection in transaction
    await User.deleteOne({ _id: user._id }).session(session);

    await session.commitTransaction();
    session.endSession();

    return new Response(
      JSON.stringify({ message: "Account activated. Now you need to wait for admin approval." }),
      { status: 200 }
    );
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    return new Response(
      JSON.stringify({ error: "Activation failed. Please try again later." }),
      { status: 500 }
    );
  }
}