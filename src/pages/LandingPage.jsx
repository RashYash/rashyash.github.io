import "./../styles/LandingPage.css";
import ThreeScene from "../components/Model";

function LandingPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">RASHYASH</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <button className="cv-btn">Download CV</button>
      </nav>

      <section className="hero">
        <div className="left">
          <h1>
            Hi, I'm <br />
            Yasara Siriwardhana
          </h1>

          <div className="subtitle">REACT • THREE.JS • MERN STACK</div>

          <div className="description">
            I create modern web applications, immersive 3D experiences and
            interactive user interfaces using React.js, Three.js, Node.js and
            MongoDB.
          </div>

          <div className="buttons">
            <button className="start-btn">View Projects</button>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>

        <div className="right">
          <div className="model-wrapper">
            <ThreeScene />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
