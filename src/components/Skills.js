import "../App.css";

function Skills() {
  return (
    <div className="technical-skills-section">
      <h1 className="purple-headers-generic2">Technical Skills</h1>

      <div className="skill-container">
        <h2 className="purple-mini-header">Prgramming Languages and Markup</h2>

        <div className="shield-container">
          <img
            alt="CSS3"
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
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
