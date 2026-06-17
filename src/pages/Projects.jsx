import "./../styles/Projects.css";
import ProjectsBackground from "../components/ProjectsBackground";

function Projects() {
  return (
    <div className="projects-page">
      <div className="three-background">
        <ProjectsBackground />
      </div>

      <div className="projects-content">
        <div className="projects-header">
          <h1>My Projects</h1>

          <p>Explore some of my latest web, AI and 3D development projects.</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Tax Prediction System</h3>

            <p>
              MERN stack application with MongoDB integration and tax prediction
              features.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <button className="demo-btn">Live Demo</button>

              <button className="github-btn">GitHub</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Campus Navigator</h3>

            <p>
              Interactive campus navigation system using Leaflet and routing
              algorithms.
            </p>

            <div className="project-tags">
              <span>JavaScript</span>
              <span>Leaflet</span>
              <span>Routing</span>
            </div>

            <div className="project-buttons">
              <button className="demo-btn">Live Demo</button>

              <button className="github-btn">GitHub</button>
            </div>
          </div>

          <div className="project-card">
            <h3>AI Emotion Detection</h3>

            <p>
              Facial emotion recognition system for mental health monitoring and
              support.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>AI</span>
              <span>OpenCV</span>
            </div>

            <div className="project-buttons">
              <button className="demo-btn">Live Demo</button>

              <button className="github-btn">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
