import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 size={40} color="#E44D26" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt size={40} color="#264de4" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <FaJsSquare size={40} color="#F0DB4F" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaReact size={40} color="#61DBFB" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <SiExpress size={40} color="#000" />
            <p>Express</p>
          </div>
          <div className="skill-card">
            <FaNodeJs size={40} color="#3C873A" />
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <SiMongodb size={40} color="#4DB33D" />
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <FaDatabase size={40} color="#f29111" />
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <FaGitAlt size={40} color="#f1502f" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
