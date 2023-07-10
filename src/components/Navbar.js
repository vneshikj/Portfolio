import "../App.css";

function Navbar() {
  const scrollToFunction = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset =
      sectionId === "about-me-section"
        ? -300
        : sectionId === "projects-section"
        ? -50
        : sectionId === "technical-skills-section"
        ? -50
        : sectionId === "contact-section"
        ? -160
        : 0;
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
        onClick={() => scrollToFunction("about-me-section")}
      >
        About me
      </a>
      <a
        className="navbar-items"
        onClick={() => scrollToFunction("projects-section")}
      >
        Projects
      </a>
      <a
        className="navbar-items"
        onClick={() => scrollToFunction("technical-skills-section")}
      >
        Skills
      </a>
      <a
        className="navbar-items"
        onClick={() => scrollToFunction("contact-section")}
      >
        Contact
      </a>
      <a className="navbar-items">Resume</a>
    </div>
  );
}

export default Navbar;
