import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import './ProjectDetailPage.css';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project: Project | undefined = projects.find(
    (p) => p.id === parseInt(projectId || '', 10)
  );

  if (!project) {
    return (
      <div>
        <h2>Project Not Found</h2>
        <p>Could not find a project with the ID {projectId}.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  const categoryPath = `/${project.category.replace(' ', '-')}`;

  return (
    <div className="project-detail-container">
      <Link to={categoryPath} className="back-link">
        &larr; Back to {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Projects
      </Link>

      <h2>{project.title}</h2>

      {project.description && (
        <p className="project-description">{project.description}</p>
      )}

      {/* Show before/after images for kitchen projects */}
      {project.category === 'kitchens' && project.beforeImageUrl && project.imageUrl && (
        <div className="before-after-container">
          <div className="image-container">
            <h3>Before</h3>
            <img
              src={project.beforeImageUrl}
              alt={`${project.title} - Before`}
              className="project-image"
            />
          </div>
          <div className="image-container">
            <h3>After</h3>
            <img
              src={project.imageUrl}
              alt={`${project.title} - After`}
              className="project-image"
            />
          </div>
        </div>
      )}

      {/* Show single image for non-kitchen projects */}
      {project.category !== 'kitchens' && project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
      )}

      {project.externalUrl && (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="external-project-link"
        >
          Visit Live Site &rarr;
        </a>
      )}
    </div>
  );
};

export default ProjectDetailPage; 