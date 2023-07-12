import "../components/ProjectCard.css";

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <p className="project-title">{title}</p>

      <hr className="rounded"></hr>
      <p className="project-description"> {description}</p>
    </div>
  );
}

export default ProjectCard;
