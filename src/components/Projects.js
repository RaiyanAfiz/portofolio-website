import { myProjects } from "../ProjectData"

const Projects = () => {
    return (
        <div>
            {myProjects.map((project) => (
                    <div className="project">
                    <br/>
                    <div id="project-styles">
                        <img src={project.picture} alt="My Git Profile" id="project-picture" width="480" height="222"/>
                        <p id="project-description">{project.description}</p>
                        {project.skills.map((tag) => {
                            return <p id="project-skills">{tag}</p>;
                        })}
                        <p id="project-links"><a href={project.link}>GitHub Link</a></p>
                    </div>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Projects
