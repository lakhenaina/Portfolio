import express from "express";
import About from "../models/about.js";

const router = express.Router();

// GET about info
router.get("/", async (req, res) => {
  try {
    const aboutData = await About.findOne();
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) POST/PUT to update about info later

export default router;
