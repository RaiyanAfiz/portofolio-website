import { myProjects } from "../../assets/ProjectData";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      {myProjects.reverse().map((project) => (
        <div className="project" key={project.id}>
          <br />
          <div id="project-styles">
            <h1 id="project-title">
              <a href={project.link}>{project.title}</a>
            </h1>

            <img
              id="project-picture"
              src={"src/assets/project-img/" + project.picture}
              alt={project.pictureAlt}
            ></img>
            <br />

            <span id="project-skills">
              {project.skills.map((tag) => {
                return (
                  <div id="skills-2" key={tag}>
                    {tag}
                  </div>
                );
              })}
            </span>

            <p id="project-description">{project.description}</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Projects;
