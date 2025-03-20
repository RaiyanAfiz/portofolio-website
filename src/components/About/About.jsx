import "./About.css";

const Hero = () => {
  return (
    <div className="hero">
      <div id="name">
        <h1>
          <span id="hand-wave">👋</span> Hello, I am Raiyan...
        </h1>
        <div id="description">
          <p>
            A Computer Science graduate passionate about technology, data, and
            problem-solving.
            <br />
            <br />
            I enjoy building fun apps, transforming raw data into meaningful
            insights, and finding innovative solutions to my problems. Whether
            it’s analyzing trends, developing applications, or automating tasks,
            I am always exploring new way to develop my self.
            <br />
            <br />
            For me, challenges aren’t obstacles—they’re opportunities to grow.
          </p>
          <img
            id="myPicture"
            src="src\assets\myPic.jpg"
            alt="Image of portfolio owner"
          />
        </div>
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
