import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      {/* <Contact/> */}
    </div>
  );
};

export default App;
