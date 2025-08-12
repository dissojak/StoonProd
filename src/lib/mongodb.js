import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://dissojak:stoondissojakb2a@stoon.r8tcyqv.mongodb.net/StoonProd?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
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
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'StoonProd',
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
