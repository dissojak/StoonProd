import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import FigmaItem from '@/models/FigmaItem';

export async function GET() {
  await connectToDatabase();
  const items = await FigmaItem.find().sort({ createdAt: -1 });
  return NextResponse.json(items);
}

export async function POST(req) {
  await connectToDatabase();
  const { title, link } = await req.json();
  if (!title || !link) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const newItem = await FigmaItem.create({ title, link });
  return NextResponse.json(newItem, { status: 201 });
}
