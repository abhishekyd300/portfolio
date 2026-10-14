import React from 'react';

/**
 * Structured Project Card component.
 * Renders technology badges, project summaries, and external links cleanly.
 *
 * @param {Object} props
 * @param {Object} props.project - Structured project object.
 */
export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="pc-project-card">
      <div className="pc-project-title">{project.name}</div>
      {project.tagline && <p className="pc-project-desc">{project.tagline}</p>}

      {Array.isArray(project.technologies) && project.technologies.length > 0 && (
        <div className="pc-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="pc-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="pc-project-links">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-link-btn"
          >
            <span>Live Demo</span> ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-link-btn"
          >
            <span>GitHub Code</span> ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
