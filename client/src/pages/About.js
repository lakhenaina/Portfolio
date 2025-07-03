import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hi, I’m <strong>Naina Lakhe</strong>, a creative and passionate web developer
          who loves building beautiful, functional websites. With a focus on modern design and
          user experience, I transform ideas into engaging digital experiences.
        </p>
        <p>
          From frontend styling to backend logic, I love crafting projects that
          make people’s lives easier and more inspiring.
        </p>

        <a
          href="/nainalakhe.cv.pdf"
          download="Naina_Lakhe_CV.pdf"
          className="about-button"
        >
          <FaDownload style={{ marginRight: "0.5rem" }} />
          Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
