import React from 'react';
import PROJECTS from '../assets/projects/projects';

const Projects = () => {
  return (
    <div className="projects slide-up slide-left">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">projects_</li>
        </ul>
      </nav>

      <ul className="projects-list">
        {PROJECTS.reverse().map(PROJECT => (
          <li className="projects-item" key={PROJECT.id}>
            <img src={PROJECT.image} alt={PROJECT.title} />
            <div className="projects-text">
              <h3 className="title">{PROJECT.title}</h3>
              <div className="description">{PROJECT.description}</div>
              <div className="links">
                <a
                  className="view-app"
                  href={PROJECT.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
                <a
                  className="view-code"
                  href={PROJECT.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
