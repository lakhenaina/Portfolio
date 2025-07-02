import React from "react";
import "./Projects.css";

// import your images
import cakeBlissImage from "../assets/cakebliss.png";
import petOrderingImage from "../assets/petordering.png";


function Projects() {
  const projects = [
    {
      title: "Cake's Bliss",
      description: "An online cake ordering and customization platform.",
      image: cakeBlissImage,
      link: "https://github.com/lakhenaina/Mis-Project.git",  // your repo or live link
    },
    {
      title: "Pet Ordering System",
      description: "A digital platform for browsing and purchasing pets online.",
      image: petOrderingImage,
      link: "https://github.com/lakhenaina/Pet-Ordering-System.git",
    },
  
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
