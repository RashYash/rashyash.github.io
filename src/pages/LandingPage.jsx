import "./../styles/LandingPage.css";
import ThreeScene from "../components/Model";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">RASHYASH</div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
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
            <Link to="/projects">
              <button className="start-btn">View Projects</button>
            </Link>
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
