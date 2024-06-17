import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <div key={project.name}>
          <Link to={project.path}>
            <button>View {project.name} Live</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;