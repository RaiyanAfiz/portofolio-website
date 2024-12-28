import "./About.css";

const Hero = () => {
  return (
    <div className="hero">
      <div id="name">
        <h1>
          <span id="hand-wave">👋</span> Hello, I am Raiyan...
        </h1>
        <p>
          A Computer Science graduate passionate about technology, data, and
          problem-solving.
          <br />
          <br />
          My 16 months as a Business Intelligence Analyst taught me to uncover
          and communicate stories hidden in data. I thrive on creating solutions
          that make information accessible and actionable.
          <br />
          <br />
          Beyond work, I’m an avid learner who dives into new software
          development projects to sharpen my skills and explore emerging tech.
          <br />
          <br />
          For me, challenges aren’t obstacles—they’re opportunities to grow.
        </p>
      </div>

      <p id="links">
        <a href="https://github.com/RaiyanAfiz/" target="_blank">
          <img src="src\assets\github.svg" alt="GitHub Profile Link" />
        </a>
        <a href="https://www.linkedin.com/in/raiyanafiz/" target="_blank">
          <img src="src\assets\linkedin.svg" alt="LinkedIn Profile Link" />
        </a>
        <a href="src\assets\Resume.pdf" target="_blank">
          <img src="src\assets\resume.svg" alt="View Resume PDF" />
        </a>
      </p>
    </div>
  );
};

export default Hero;
