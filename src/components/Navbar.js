import "../App.css";
import resume from "../resources/resume.pdf";
import { scrollToFunction } from "../Utilities";

function Navbar() {
  return (
    <div className="navbar">
      <a
        className="signature"
        onClick={() => scrollToFunction("about-me-section")}
      >
        V.Neshikj
      </a>

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
      <a className="navbar-items" href={resume} target="blank">
        Resume
      </a>
    </div>
  );
}

export default Navbar;
