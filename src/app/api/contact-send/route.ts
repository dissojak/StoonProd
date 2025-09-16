import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: Request) {
  const { fullName, phone, email, message } = (await req.json()) as {
    fullName?: string;
    phone?: string;
    email?: string;
    message?: string;
  };

  if (!fullName?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ success: false, error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await connectToDatabase();

  try {
    await ContactMessage.create({ fullName, phone, email, message });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: `Database error: ${err.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
