import "./../styles/Projects.css";
import ProjectsBackground from "../components/ProjectsBackground";
import { useState } from "react";
import projectsData from "../data/projects.json";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web",
    "App",
    "UI/UX",
    "Logo Design",
    "WordPress",
    "Video Editing",
    "3D Visualization",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="three-background">
        <ProjectsBackground />
      </div>

      <div className="projects-content">
        <div className="projects-header">
          <h1>My Projects</h1>

          <p>
            Explore my latest Web Development, MERN Stack, Mobile App, UI/UX
            Design, Video Editing and 3D Visualization projects.
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.video ? (
                <video
                  src={project.video}
                  className="project-image"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.viewLink && (
                  <a href={project.viewLink} target="_blank" rel="noreferrer">
                    <button className="demo-btn">View Project</button>
                  </a>
                )}

                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <button className="github-btn">GitHub</button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
