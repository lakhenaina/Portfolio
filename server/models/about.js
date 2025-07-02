import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: String,
  role: String,
  bio: String,
  skills: [String],
  profileImage: String
});

export default mongoose.model("About", aboutSchema);
