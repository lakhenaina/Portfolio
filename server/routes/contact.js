import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// POST contact message
router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) GET messages if you want to view them

export default router;
