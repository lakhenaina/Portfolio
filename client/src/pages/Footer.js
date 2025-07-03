import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Naina Lakhe</h3>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="mailto:lakhenaina@gmail.com"><FaEnvelope size={20} /></a>
          <a href="https://www.linkedin.com/in/naina-lakhe-9272a3354/" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://github.com/lakhenaina" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Naina Lakhe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
