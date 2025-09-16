import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import FigmaItem from "@/models/FigmaItem";

export async function POST(req: Request) {
  await connectToDatabase();
  const { order } = (await req.json()) as { order?: string[] };
  if (!Array.isArray(order)) {
    return NextResponse.json({ error: "Invalid order format" }, { status: 400 });
  }
  try {
    for (let i = 0; i < order.length; i++) {
      await FigmaItem.findByIdAndUpdate(order[i], { order: i }, { new: true, strict: false });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
