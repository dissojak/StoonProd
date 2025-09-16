import dotenv from "dotenv";
// Load .env first, then override with .env.local if present
dotenv.config();
dotenv.config({ path: ".env.local", override: true });
import mongoose from "mongoose";
import { connectToDatabase } from "../lib/mongodb";
import FigmaItem, { type FigmaItemDocument } from "../models/FigmaItem";

async function main(): Promise<void> {
  await connectToDatabase();
  const items: FigmaItemDocument[] = await FigmaItem.find().sort({ createdAt: 1 });
  if (items.length > 0) {
    await FigmaItem.bulkWrite(
      items.map((doc, i) => ({
        updateOne: {
          filter: { _id: doc._id },
          update: { $set: { order: i } },
        },
      })),
    );
  }
  console.log("Order field set for all Figma items.");
}

main()
  .catch((err) => {
    console.error("Error fixing Figma order:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    try {
      await mongoose.connection.close();
    } catch {
      // ignore
    }
  });
