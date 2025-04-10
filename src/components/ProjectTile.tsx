import { Project } from '../types/project';
import './ProjectTile.css'; // We'll create this for basic styling
import { Link } from 'react-router-dom';

interface ProjectTileProps {
  project: Project;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => {
  // Content is now either an image or the title text
  const TileContent = () => (
    <div className="tile-content">
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.title} className="project-tile-image" />
      ) : (
        <div className="project-tile-placeholder"></div>
      )}
      <h4>{project.title}</h4>
    </div>
  );

  // If there's an external URL, wrap in an anchor tag
  if (project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank" // Open in new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="project-tile link" // Add 'link' class for styling clickable tiles
      >
        <TileContent />
      </a>
    );
  }

  // If no external URL, wrap in a React Router Link to the detail page
  return (
    <Link to={`/project/${project.id}`} className="project-tile link">
      <TileContent />
    </Link>
  );
};

export default ProjectTile; 