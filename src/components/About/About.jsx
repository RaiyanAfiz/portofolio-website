import "./About.css";
import myPic from "../../assets/myPic.jpg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import resume from "../../assets/resume.svg";
import resumePDF from "../../assets/Resume.pdf";

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
          <img id="myPicture" src={myPic} alt="Image of portfolio owner" />
        </div>
      </div>

      <p id="links">
        <a href="https://github.com/RaiyanAfiz/" target="_blank">
          <img src={github} alt="GitHub Profile Link" />
        </a>
        <a href="https://www.linkedin.com/in/raiyanafiz/" target="_blank">
          <img src={linkedin} alt="LinkedIn Profile Link" />
        </a>
        <a href={resumePDF} target="_blank">
          <img src={resume} alt="View Resume PDF" />
        </a>
      </p>
    </div>
  );
};

export default Hero;
