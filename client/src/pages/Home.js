import "./Home.css";


import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="highlight">Naina Lakhe</span>
          </h1>
          <p className="subtitle">
            Full Stack Developer specializing in the MERN stack
          </p>
          <a href="/projects" className="hero-button">
            See My Work
          </a>
          <div className="social-icons">
            <a href="https://github.com/lakhenaina" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/naina-lakhe-9272a3354/" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
