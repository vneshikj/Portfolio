import { Children } from "react";
import "../components/ProjectCard.css";
import linkOutImage from "../resources/link-out.svg";

function ProjectCard({ title, description, link, children }) {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="project-card">
      <div className="title-link" onClick={openLink}>
        <p className="project-title">{title}</p>
        <img className="link-out" src={linkOutImage}></img>
      </div>

      <hr className="rounded"></hr>
      <p className="project-description"> {description}</p>

      <div className="card-shield-container">{children}</div>
    </div>
  );
}

export default ProjectCard;
