import "../App.css";
import Shield from "./shield";
import React from "react";

function Skills() {
  return (
    <div className="technical-skills-section">
      <h1 className="purple-headers-generic2">Technical Skills</h1>

      <div className="skill-container">
        <h2 className="purple-mini-header">Prgramming Languages and Markup</h2>

        <div className="shield-container">
          <Shield
            alt="CSS3"
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          />

          <Shield
            alt="HTML5"
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          />

          <Shield
            alt="C"
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          />
          <Shield
            alt="Java"
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
          />

          <Shield
            alt="Python"
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          />

          <Shield
            alt="Markdown"
            src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
          />

          <Shield
            alt="LaTeX"
            src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white"
          />

          <Shield
            alt="R"
            src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white"
          />

          <Shield
            alt="MATLAB"
            src="https://img.shields.io/badge/MATLAB-427ef5?style=for-the-badge"
          />

          <Shield
            alt="VHDL"
            src="https://img.shields.io/badge/VHDL-f0f0f2?style=for-the-badge"
          />
        </div>
      </div>

      <div className="skill-container">
        <h2 className="purple-mini-header">Embedded Systems</h2>
      </div>

      <div className="skill-container">
        <h2 className="purple-mini-header">Frameworks and Libraries</h2>
      </div>

      <div className="skill-container">
        <h2 className="purple-mini-header">Other Tools</h2>
      </div>

      <div></div>
    </div>
  );
}

export default Skills;
