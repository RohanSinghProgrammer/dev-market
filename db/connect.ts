import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI || "mongodb+srv://admin:admin@cluster0.uappo.mongodb.net/dev-market";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Use global caching to maintain a persistent connection across hot reloads
const cached: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null } =
  global.mongoose || { conn: null, promise: null };

export const connectToDB = async (): Promise<mongoose.Connection> => {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🚀 Connecting to MongoDB...");
    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((mongoose) => {
        console.log("✅ MongoDB connected successfully!");
        return mongoose.connection;
      });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached; // Store in global scope for future reuse
  return cached.conn;
};
