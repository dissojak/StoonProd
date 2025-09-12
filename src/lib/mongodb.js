import mongoose from "mongoose";

// Best practice: Do not hardcode secrets. Set MONGODB_URI in your deployment environment (e.g., Vercel, Netlify, AWS, etc.)
// For local development, set it in your shell before running the app:
// PowerShell: $env:MONGODB_URI="your-mongodb-uri-here"; npm run dev
// For production, set MONGODB_URI in your host's environment variable dashboard.

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "StoonProd",
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
