import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// load .env variables
dotenv.config();

// import routes
import aboutRoutes from "./routes/about.js";
import projectRoutes from "./routes/projects.js";
import contactRoutes from "./routes/contact.js";

// create express app
const app = express();
const PORT = 5000;

// connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
