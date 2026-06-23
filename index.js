import express from "express";
import ContactRoutes from "./routes/contact.routes.js";
const app = express();

//databse connection
import { connectDB } from "./configue/database.js";
connectDB();

//.env
const PORT = process.env.PORT;

//middleware
app.set("view engine", "ejs"); //uses to write the html and js together
app.use(express.urlencoded({ extended: false })); //uses so that the server understand the user data
app.use(express.static("public")); //uses so app can read the file in folder public

//routes
app.use("/", ContactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});