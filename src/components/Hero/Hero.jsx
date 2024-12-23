import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 id="name">
        <span id="hand-wave">👋</span>
        Hello, I am Raiyan
      </h1>

      <h3 id="links">
        <a>Check out my </a>
        <a href="https://github.com/RaiyanAfiz/">GitHub</a>
        <a> profile. </a>
        <a>You can also find me on </a>
        <a href="https://www.linkedin.com/in/raiyanafiz/">LinkedIn</a>
        <a>.</a>
        <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
      </h3>
    </div>
  );
};

export default Hero;
