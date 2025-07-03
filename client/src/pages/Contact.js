import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "naina_12345", 
      "template_wgyfj5i", 
      form.current,
      "LP1OI4uKUeph5RWdB"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Message sending failed, please try again.");
      }
    );

    e.target.reset();
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out — I'd love to hear from you!</p>
         {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:lakhenaina@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope /> lakhenaina@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/naina-lakhe-9272a3354/" target="_blank" rel="noreferrer">
            <FaLinkedin /> linkedin.com/in/naina
          </a>
          <a href="https://github.com/lakhenaina" target="_blank" rel="noreferrer">
            <FaGithub /> github.com/lakhenaina
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
