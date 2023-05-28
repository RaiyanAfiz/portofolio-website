import { myProjects } from "../ProjectData"

const Projects = () => {
    return (
        <div>
            {myProjects.reverse().map((project) => (
                    <div className="project">
                    <br/>
                    <div id="project-styles">
                        <h1 id="project-title">{project.title}</h1>
                        {project.skills.map((tag) => {
                                return <span id="project-skills">{tag}</span>;
                        })}
                        <p id="project-description">{project.description}</p>

                        <p id="project-links"><a href={project.link}>GitHub Link</a></p>
                    </div>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Projects
