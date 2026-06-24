import mongoose from "mongoose";

//importing dotenv
import dotenv from "dotenv"
dotenv.config()

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected Successfully");
  }).catch((err) => {
    console.error("Database Connection Error:", err.message);
  });
};
