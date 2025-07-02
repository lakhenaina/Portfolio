import "./Home.css";

function Home() {
  return (
    <div className="home">
   
      <div className="hero">
        <div className="hero-left">
          <h1>Hi, I’m <span className="highlight">Naina Lakhe</span></h1>
          <p>Full Stack Developer specializing in the MERN stack</p>
          <a href="/projects" className="hero-button">See My Work</a>
        </div>
        <div className="hero-right">
          <img
            src="/my-profile.png"
            alt="Naina Lakhe"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
