import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  stars?: number;
  category: string;
}

const projects: Project[] = [
  {
    name: 'Expenses Manager',
    description:
      'Full-stack family expense tracking app with real-time analytics dashboard, multi-user accounts, and budget insights. Built on edge infrastructure with Cloudflare Workers for sub-50ms response times globally.',
    tech: ['TypeScript', 'React', 'Hono', 'Cloudflare Workers', 'D1'],
    url: 'https://github.com/CYaranga/expenses-manager',
    stars: 1,
    category: 'Web App',
  },
  {
    name: 'SmartBuy AR',
    description:
      'Business-grade augmented reality shopping tool that lets retail customers point their phone at a space and see how products look before buying. Includes real-time 3D rendering, surface detection, and product catalog integration.',
    tech: ['C#', 'Unity', 'AR Foundation', 'Vuforia'],
    url: 'https://github.com/CYaranga/SmartBuy',
    category: 'AR / Unity',
  },
  {
    name: 'Rebeca Totem',
    description:
      'Cross-platform interactive kiosk application deployed in retail environments. Features touch-driven UI with smooth 60fps animations, dynamic content management, and offline-first architecture for unreliable network conditions.',
    tech: ['Dart', 'Flutter', 'Material Design', 'SQLite'],
    url: 'https://github.com/CYaranga/rebeca_totem',
    category: 'Mobile / Flutter',
  },
  {
    name: 'Rebeca Totem Unity',
    description:
      'Premium 3D interactive display for exhibitions and showrooms. Features gesture recognition, particle effects, real-time content rendering, and multi-screen support for immersive brand experiences.',
    tech: ['C#', 'Unity', '3D Graphics', 'Shader Graph'],
    url: 'https://github.com/CYaranga/RebecaTotemUnity',
    category: 'AR / Unity',
  },
  {
    name: 'Rebeca Clothes',
    description:
      'Retail management system for a fashion business handling inventory tracking, sales reporting, and customer management. Built with C# for desktop deployment in physical store environments.',
    tech: ['C#', '.NET', 'SQL Server', 'WPF'],
    url: 'https://github.com/CYaranga/rebeca-clothes',
    category: 'Desktop / Business',
  },
  {
    name: 'Private Logger',
    description:
      'Privacy-first structured logging utility for TypeScript applications. Zero external dependencies, configurable output levels, and built-in PII scrubbing for GDPR-compliant application logging.',
    tech: ['TypeScript', 'Node.js'],
    url: 'https://github.com/CYaranga/private_logger',
    category: 'Library',
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
        <p className="section-subtitle reveal">
          Real solutions I've built across web, mobile, and AR
        </p>
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
                <div className="project-header-right">
                  <span className="project-category">{project.category}</span>
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
