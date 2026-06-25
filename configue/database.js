import mongoose from "mongoose";

//importing dotenv
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Database Connected Successfully");
    return true;
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    return false;
  }
};
