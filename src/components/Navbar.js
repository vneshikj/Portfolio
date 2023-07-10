import "../App.css";

function Navbar() {
  const scrollToFuncction = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset = -50;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <a className="signature">V.Neshikj</a>
      <a className="seperator">|</a>
      <a
        className="navbar-items"
        onClick={() => scrollToFuncction("about-me-section")}
      >
        About me
      </a>
      <a
        className="navbar-items"
        onClick={() => scrollToFuncction("projects-section")}
      >
        Projects
      </a>
      <a
        className="navbar-items"
        onClick={() => scrollToFuncction("technical-skills-section")}
      >
        Skills
      </a>
      <a className="navbar-items">Contact</a>
      <a className="navbar-items">Resume</a>
    </div>
  );
}

export default Navbar;
