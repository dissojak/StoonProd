import { NextRequest } from "next/server";
import { User } from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
        return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    await connectToDatabase();

    // Check if user exists
    if (await User.findOne({ $or: [{ username }, { email }] })) {
        return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }

    // Hash password
    //   const hashed = await bcrypt.hash(password, 12);
    const hashed = password;


    // Generate activation code
    const activationCode = crypto.randomBytes(20).toString("hex");
    const activationExpires = new Date(Date.now() + 1000 * 60 * 30 * 12); // 30 min * 12 = 6 hours

    // Create user
    await User.create({
        username,
        email,
        password: hashed,
        status: "pending",
        activationCode,
        activationExpires,
    });

    // Send activation email
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT!,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const activationUrl = `${process.env.NEXTAUTH_URL}/account/activation?email=${encodeURIComponent(email)}&code=${activationCode}`;
    await transporter.sendMail({
        from: '"Stoon Production" <no-reply@stoonproduction.com>',
        to: email,
        subject: "Activate your account",
        html: `
            <div style="font-family:system-ui,Arial,sans-serif;max-width:520px;line-height:1.55;margin:0 auto;padding:20px">
            <h2 style="color:#0d9488;margin:0 0 12px;font-size:20px;">Welcome to Stoon Production</h2>
            <p style="margin:0 0 16px;">Please activate your account to get started:</p>
            <p style="margin:20px 0;">
                <a href="${activationUrl}" target="_blank" rel="noopener noreferrer"
                style="background:#0d9488;color:#fff;padding:12px 20px;text-decoration:none;
                        border-radius:8px;font-weight:600;display:inline-block">
                Activate Account
                </a>
            </p>
            <p style="margin:0 0 16px;">Or use this code:</p>
            <p style="font-size:18px;font-weight:700;color:#111827;margin:0 0 20px;">${activationCode}</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <p style="font-size:14px;color:#6b7280;margin:0;">
                If you did not sign up, you can safely ignore this email.
            </p>
            </div>
        `
    });


    return new Response(JSON.stringify({ message: "Signup successful. Check your email to activate." }), { status: 200 });
}
