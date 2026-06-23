import mongoose from "mongoose";

//importing dotenv
import dotenv from "dotenv"
dotenv.config()

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Databse Connected Successfully");
  });
};
