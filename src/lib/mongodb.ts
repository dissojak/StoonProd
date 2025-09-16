import mongoose, { type Mongoose } from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const { MONGODB_URI } = process.env as { MONGODB_URI?: string };
    if (!MONGODB_URI) {
      throw new Error("Please define the MONGODB_URI environment variable");
    }
    const MONGODB_URI_STR: string = MONGODB_URI;
    cached!.promise = mongoose
      .connect(MONGODB_URI_STR, {
        dbName: "StoonProd",
        bufferCommands: false,
      })
      .then((m) => m);
  }
  cached!.conn = await cached!.promise;
  return cached!.conn;
}
