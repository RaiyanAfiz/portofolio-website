import Project from "./Project"

const Projects = ({projs}) => {


    return (
        <>
            {projs.map((proj) => (
                <Project key={proj.id} proj={proj}/>
            ))}
        </>
    )
}

/*
export default Projects



const Project = ({proj}) => {
    return (
        <div className="project">
            <br/>
            <div id="project-styles">
                <img src={proj.Picture} alt="My Git Profile" id="project-picture" width="480" height="222"/>
                <p id="project-description">{proj.Description}</p>
                <p id="project-skills">{proj.Skills}</p>
                <p id="project-links"><a href={proj.Link}>GitHub Link</a></p>
            </div>
            <br/>
        </div>
    )
}

export default Project*/