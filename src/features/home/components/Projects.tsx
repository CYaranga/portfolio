import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: 'Expenses Manager',
    description:
      'A modern family expense tracking application with real-time analytics, multi-user support, and an intuitive dashboard. Built entirely on edge infrastructure for global performance.',
    tech: ['TypeScript', 'React', 'Hono', 'Cloudflare Workers'],
    url: 'https://github.com/CYaranga/expenses-manager',
    stars: 1,
  },
  {
    name: 'Rebeca Totem',
    description:
      'Cross-platform interactive totem application designed for touch-screen displays, featuring smooth animations and dynamic content management for retail environments.',
    tech: ['Dart', 'Flutter', 'Material Design'],
    url: 'https://github.com/CYaranga/rebeca_totem',
  },
  {
    name: 'SmartBuy AR',
    description:
      'Augmented reality shopping experience that lets users visualize products in their real environment before purchasing, bridging the gap between online and physical retail.',
    tech: ['C#', 'Unity', 'AR Foundation'],
    url: 'https://github.com/CYaranga/SmartBuy',
  },
  {
    name: 'Rebeca Totem Unity',
    description:
      'Interactive 3D totem experience built with Unity featuring gesture recognition, particle effects, and real-time content rendering for immersive displays.',
    tech: ['C#', 'Unity', '3D Graphics'],
    url: 'https://github.com/CYaranga/RebecaTotemUnity',
  },
  {
    name: 'Private Logger',
    description:
      'A lightweight, privacy-focused logging utility for TypeScript applications with structured output, configurable levels, and zero external dependencies.',
    tech: ['TypeScript', 'Node.js'],
    url: 'https://github.com/CYaranga/private_logger',
  },
  {
    name: 'NoMusicPaid',
    description:
      'Platform for discovering and sharing royalty-free music, enabling content creators to find the perfect soundtrack without licensing concerns.',
    tech: ['JavaScript', 'Web APIs'],
    url: 'https://github.com/CYaranga/NoMusicPaid',
  },
];

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Projects: React.FC = () => {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">Some things I've built</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`project-card reveal reveal-delay-${Math.min(i % 2, 3)}`}
            >
              <div className="project-header">
                <span className="project-icon">
                  <FolderIcon />
                </span>
                <a
                  href={project.url}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ExternalLinkIcon />
                </a>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {project.stars && project.stars > 0 && (
                <div className="project-meta">
                  <span className="project-stars">
                    <StarIcon /> {project.stars}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
