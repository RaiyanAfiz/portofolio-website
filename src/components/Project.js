const Project = ({proj}) => {
    return (
        <div className="project">
            <p>{proj.id}</p>
            <p>{proj.Picture}</p>
            <p>{proj.Description}</p>
            <p>{proj.Skills}</p>
            <p>{proj.Link}</p>
        </div>
    )
}

export default Project
