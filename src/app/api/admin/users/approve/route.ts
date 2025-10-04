import { NextRequest } from "next/server";
import AdminUser from "@/models/AdminUser";
import { connectToDatabase } from "@/lib/mongodb";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

const User = AdminUser;

class ApproveError extends Error { status:number; constructor(msg:string,status:number){ super(msg); this.status=status; } }

function ensureEmailEnv() {
  const missingVars = [
    !process.env.SMTP_HOST,
    !process.env.SMTP_PORT,
    !process.env.SMTP_USER,
    !process.env.SMTP_PASS,
  ];
  if (missingVars.some(Boolean)) {
    throw new ApproveError("SMTP environment variables are missing", 500);
  }
}
function approvalHtml() {
  return `<div style="font-family:system-ui,Arial,sans-serif;max-width:520px;line-height:1.55;margin:0 auto;padding:20px">
  <h2 style="color:#0d9488;margin:0 0 12px;font-size:20px;">Admin Access Granted</h2>
  <p style="margin:0 0 16px;">Your account has been approved. You now have full access to the admin dashboard.</p>
  <p style="margin:20px 0;"><a href="https://admin.stoonproduction.com" target="_blank" rel="noopener noreferrer" style="background:#0d9488;color:#fff;padding:12px 20px;text-decoration:none;border-radius:8px;font-weight:600;display:inline-block">Open Admin Dashboard</a></p>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
  <p style="font-size:14px;color:#6b7280;margin:0;">If you did not request this, please ignore this email or contact support.</p>
</div>`;
}

async function sendApprovalEmail(email: string) {
  ensureEmailEnv();
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: '"Stoon Production" <no-reply@stoonproduction.com>',
    to: email,
    subject: "Your account has been approved",
    html: approvalHtml(),
  });
}

async function approveUserTransaction(id: string, session: mongoose.ClientSession) {
  const user = await User.findById(id).session(session);
  if (!user) throw new ApproveError("User not found", 404);
  if (!user.email) throw new ApproveError("User email not found", 400);

  // Stage update
  if (!user.isAdmin) {
    user.isAdmin = true;
    await user.save({ session });
  }

  // Email must succeed or transaction rolls back
  await sendApprovalEmail(user.email as string);
}

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id) return new Response(JSON.stringify({ error: "Missing user id" }), { status: 400 });

  await connectToDatabase();
  const session = await mongoose.startSession();
  try {
    await session.withTransaction(() => approveUserTransaction(id, session));

    return new Response(JSON.stringify({ message: "User approved and notified." }), { status: 200 });
  } catch (e: any) {
    const status = e instanceof ApproveError ? e.status : 500;
    const msg = e instanceof ApproveError ? e.message : "Failed to approve user";
    if (!(e instanceof ApproveError)) console.error("[approve-user]", e);
    return new Response(JSON.stringify({ error: msg }), { status });
  } finally {
    await session.endSession();
  }
}
