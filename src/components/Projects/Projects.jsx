import { myProjects } from "../../assets/ProjectData";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="projectsCards">
        {myProjects.reverse().map((project) => (
          <ProjectCards projectProp={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
