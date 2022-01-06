const Project = ({proj}) => {
    return (
        <div className="project">
            <p>{proj.id}</p>
            <img src={proj.Picture} alt="My Git Profile" width="480" height="222"/>
            <p>{proj.Description}</p>
            <p>{proj.Skills}</p>
            <p>{proj.Link}</p>
        </div>
    )
}

export default Project
