// import React from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import ProjectTile from './ProjectTile';

const WebDevPage: React.FC = () => {
  const webDevProjects = projects.filter(p => p.category === 'web-development');

  return (
    <div>
      <h2>Web Development Projects</h2>
      <div className="project-list">
        {webDevProjects.length > 0 ? (
          webDevProjects.map((project: Project) => (
            <ProjectTile key={project.id} project={project} />
          ))
        ) : (
          <p>No web development projects yet!</p>
        )}
      </div>
    </div>
  );
};

export default WebDevPage; 