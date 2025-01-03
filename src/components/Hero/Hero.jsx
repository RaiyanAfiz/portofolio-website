import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 id="name">
        <span id="hand-wave">👋</span>
        Hello, I am Raiyan
      </h1>

      <h3 id="links">
        <a href="https://github.com/RaiyanAfiz/" target="_blank">
          <img
            id="project-picture"
            src={"src/assets/github.svg"}
            alt="GitHub Profile"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/raiyanafiz/" target="_blank">
          <img
            id="project-picture"
            src={"src/assets/linkedin.svg"}
            alt="LinkedIn Profile"
          ></img>
        </a>
      </h3>
    </div>
  );
};

export default Hero;
