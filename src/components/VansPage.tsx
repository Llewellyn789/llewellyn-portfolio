import { projects } from '../data/projects';
import { Project } from '../types/project';
import ProjectTile from './ProjectTile';

const VansPage: React.FC = () => {
  const vanProjects = projects.filter(p => p.category === 'vans');

  return (
    <div>
      <h2>Van Builds</h2>
      <div className="project-list">
        {vanProjects.length > 0 ? (
          vanProjects.map((project: Project) => (
            <ProjectTile key={project.id} project={project} />
          ))
        ) : (
          <p>No van projects yet!</p>
        )}
      </div>
    </div>
  );
};

export default VansPage; 