import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected Successfully");
    return true;
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    process.exit(1);
  }
};