import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Global is used to prevent multiple connections during hot reloading in dev
let cached = (global as any).mongoose;

// If the global variable does not exist, create it
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

// Connect to MongoDB
export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
