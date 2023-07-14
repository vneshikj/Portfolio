import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <AboutMe />
      <Projects /> {/* fix up scaling for projects to use % and not pixels */}
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
