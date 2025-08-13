import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000, // default 30s, can increase if needed
      connectTimeoutMS: 30000, // wait longer for initial socket
      family: 4, // prefer IPv4 if IPv6 causes issues
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
