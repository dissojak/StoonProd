import { connectToDatabase } from "../lib/mongodb.js";
import FigmaItem from "../models/FigmaItem.js";

async function main() {
  await connectToDatabase();
  const items = await FigmaItem.find().sort({ createdAt: 1 });
  for (let i = 0; i < items.length; i++) {
    items[i].order = i;
    await items[i].save();
  }
  console.log("Order field set for all Figma items.");
  process.exit();
}

main();
