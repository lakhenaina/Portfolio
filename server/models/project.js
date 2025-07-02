import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String,
  liveDemoLink: String,
  image: String
});

export default mongoose.model("Project", projectSchema);
