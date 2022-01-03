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

export default Projects
