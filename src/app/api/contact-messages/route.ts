import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

export async function GET() {
  await connectToDatabase();
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(messages), { status: 200 });
}
