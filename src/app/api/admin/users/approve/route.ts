import { NextRequest } from "next/server";
import AdminUser from "@/models/AdminUser";
const User = AdminUser;
import { connectToDatabase } from "@/lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id) return new Response(JSON.stringify({ error: "Missing user id" }), { status: 400 });

  await connectToDatabase();
  const user = await User.findById(id);
  if (!user) return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });

  await User.updateOne({ _id: user._id }, { $set: { isAdmin: true } });

  // Send approval email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  if (!user.email) {
    return new Response(JSON.stringify({ error: "User email not found" }), { status: 400 });
  }
await transporter.sendMail({
  from: '"Stoon Production" <no-reply@stoonproduction.com>',
  to: user.email as string,
  subject: "Your account has been approved",
  html: `
    <div style="font-family:system-ui,Arial,sans-serif;max-width:520px;line-height:1.55;margin:0 auto;padding:20px">
      <h2 style="color:#0d9488;margin:0 0 12px;font-size:20px;">Admin Access Granted</h2>
      <p style="margin:0 0 16px;">Your account has been approved. You now have full access to the admin dashboard.</p>
      <p style="margin:20px 0;">
        <a href="https://admin.stoonproduction.com" target="_blank" rel="noopener noreferrer"
           style="background:#0d9488;color:#fff;padding:12px 20px;text-decoration:none;
                  border-radius:8px;font-weight:600;display:inline-block">
          Open Admin Dashboard
        </a>
      </p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
      <p style="font-size:14px;color:#6b7280;margin:0;">
        If you did not request this, please ignore this email or contact support.
      </p>
    </div>
  `
});


  return new Response(JSON.stringify({ message: "User approved and notified." }), { status: 200 });
}
