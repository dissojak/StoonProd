import ContactMessage from "@/models/ContactMessage";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  const { fullName, phone, email, message } = await req.json();

  // Ensure DB connection
  await connectToDatabase();

  // Save to MongoDB
  try {
    await ContactMessage.create({ fullName, phone, email, message });
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Database error: " + err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
