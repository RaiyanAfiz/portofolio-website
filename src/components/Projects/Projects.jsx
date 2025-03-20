import { myProjects } from "../../assets/ProjectData";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 id="project-section-title">My Projects</h1>
      <div className="projects">
        {myProjects.toReversed().map((project) => (
          <ProjectCards projectProp={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
