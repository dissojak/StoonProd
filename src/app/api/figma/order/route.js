import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import FigmaItem from "../../../../models/FigmaItem";

export async function POST(req) {
  await connectToDatabase();
  const { order } = await req.json();
  if (!Array.isArray(order)) {
    return NextResponse.json({ error: "Invalid order format" }, { status: 400 });
  }
  try {
    // Update each item's order field
    for (let i = 0; i < order.length; i++) {
      const result = await FigmaItem.findByIdAndUpdate(
        order[i],
        { order: i },
        { new: true, strict: false },
      );
      if (!result) {
        console.error(`Failed to update item ${order[i]}`);
      } else {
        console.log(`Updated item ${order[i]} to order ${i}`);
      }
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order update error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
