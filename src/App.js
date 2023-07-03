import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects /> {/* fix up scaling for projects to use % and not pixels */}
      <Skills />
    </div>
  );
}

export default App;
