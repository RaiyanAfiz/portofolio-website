const ProjectCards = ({ projectProp }) => {
  return (
    <div className="projectCard">
      <h1 id="p-title">
        <a href={projectProp.link} target="_blank">
          {projectProp.title}
        </a>
      </h1>

      <img
        id="p-img"
        src={"src/assets/project-img/" + projectProp.picture}
        alt={projectProp.pictureAlt}
      ></img>

      <div id="p-tag">
        {projectProp.skills.map((tag) => {
          return (
            <button id="p-individual-tag" key={tag}>
              {tag}
            </button>
          );
        })}
      </div>

      <p id="p-description">{projectProp.description}</p>
    </div>
  );
};

export default ProjectCards;
