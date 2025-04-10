// import React from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import ProjectTile from './ProjectTile';

const KitchensPage: React.FC = () => {
  const kitchenProjects = projects.filter(p => p.category === 'kitchens');

  return (
    <div>
      <h2>Kitchen Builds</h2>
      <div className="project-list">
        {kitchenProjects.length > 0 ? (
          kitchenProjects.map((project: Project) => (
            <ProjectTile key={project.id} project={project} />
          ))
        ) : (
          <p>No kitchen projects yet!</p>
        )}
      </div>
    </div>
  );
};

export default KitchensPage; 