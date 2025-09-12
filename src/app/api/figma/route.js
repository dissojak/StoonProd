import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import FigmaItem from "@/models/FigmaItem";

export async function GET() {
  await connectToDatabase();
  const items = await FigmaItem.find().sort({ order: 1, createdAt: -1 });
  return NextResponse.json(items);
}

export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();
  console.log("Received POST body:", body); // Debug: log the full payload
  const { title, link, image } = body;
  if (!title || !link) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!image) {
    return NextResponse.json({ error: "Image URL missing" }, { status: 400 });
  }
  // Save all fields, including image
  const newItem = await FigmaItem.create({ title, link, image, order: 9999 });
  console.log("Created FigmaItem:", newItem); // Debug: log the created item
  return NextResponse.json(newItem, { status: 201 });
}
