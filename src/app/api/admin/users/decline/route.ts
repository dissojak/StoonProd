import { NextRequest } from "next/server";
import AdminUser from "@/models/AdminUser";
const User = AdminUser;
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { id } = await req.json();
    if (!id) return new Response(JSON.stringify({ error: "Missing user id" }), { status: 400 });

    await connectToDatabase();
    const session = await mongoose.startSession();
    let user;
    try {
        session.startTransaction();
        user = await User.findById(id).session(session);
        if (!user) throw new Error("User not found");

        // Send decline email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: +process.env.SMTP_PORT!,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        if (!user.email) {
            throw new Error("User email is missing");
        }
        await transporter.sendMail({
            from: '"Stoon Production" <no-reply@stoonproduction.com>',
            to: user.email as string,
            subject: "Admin Access Request Declined",
            html: `
                <div style="font-family:system-ui,Arial,sans-serif;max-width:520px;line-height:1.55;margin:0 auto;padding:20px">
                <h2 style="color:#dc2626;margin:0 0 12px;font-size:20px;">Admin Access Declined</h2>
                <p style="margin:0 0 16px;">Your request for admin access was not approved and your account has been removed from our system.</p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
                <p style="font-size:14px;color:#6b7280;margin:0;">
                    If you believe this is a mistake or have questions, please contact support at 
                    <a href="mailto:support@stoonproduction.com" style="color:#0d9488;text-decoration:none;">support@stoonproduction.com</a>.
                </p>
                </div>
            `
        });


        // Only delete if email sent
        await User.deleteOne({ _id: user._id }).session(session);
        await session.commitTransaction();
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        if (err.message === "User not found") {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }
        return new Response(JSON.stringify({ error: "Failed to send email or delete user" }), { status: 500 });
    }
    await session.endSession();
    return new Response(JSON.stringify({ message: "User declined, notified, and deleted." }), { status: 200 });
}
