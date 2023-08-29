import { Children } from "react";
import "../components/ProjectCard.css";

function ProjectCard({ title, description, children }) {
  return (
    <div className="project-card">
      <p className="project-title">{title}</p>

      <hr className="rounded"></hr>
      <p className="project-description"> {description}</p>

      <div className="card-shield-container">{children}</div>
    </div>
  );
}

export default ProjectCard;
