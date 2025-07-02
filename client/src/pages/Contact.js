import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-card">
        <p>
          <strong>Email:</strong> <a href="mailto:nainalakhe@example.com">nainalakhe@example.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/naina" target="_blank" rel="noreferrer">linkedin.com/in/naina</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/lakhenaina" target="_blank" rel="noreferrer">github.com/lakhenaina</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
