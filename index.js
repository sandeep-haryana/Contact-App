import express from "express";
import ContactRoutes from "./routes/contact.routes.js";
const app = express();

//database connection
import { connectDB } from "./configue/database.js";
connectDB();

//.env
const PORT = process.env.PORT || 5000;

//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//routes
app.use("/", ContactRoutes);

//Health check endpoint for Vercel
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

//new line
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

export default app;
