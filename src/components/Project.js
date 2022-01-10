const Project = ({proj}) => {
    return (
        <div className="project">
            <div id="project-styles">
                <img src={proj.Picture} alt="My Git Profile" id="project-picture" width="480" height="222"/>
                <p id="project-description">{proj.Description}</p>
                <p id="project-skills">{proj.Skills}</p>
                <p id="project-links">{proj.Link}</p>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Project
