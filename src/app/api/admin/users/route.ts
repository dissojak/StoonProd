import { NextRequest } from "next/server";
import AdminUser from "@/models/AdminUser";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * GET /api/admin/users
 * Returns users that are not yet admins (isAdmin: false).
 * Add auth/permission checks here before returning data.
 */
export async function GET(_req: NextRequest) {
  try {
    await connectToDatabase();

    // Exclude password field for safety
    const users = await AdminUser.find({ isAdmin: false }).select("-password");

    return new Response(JSON.stringify({ users }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to fetch admin users:", err);
    return new Response(JSON.stringify({ error: "Failed to load users" }), {
      status: 500,
    });
  }
}