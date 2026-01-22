import React from 'react';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '8+', label: 'Technologies' },
  { value: 'Full-Stack', label: 'Web & Mobile & AR' },
];

const About: React.FC = () => {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">
          A developer who loves turning ideas into reality
        </p>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a versatile <strong>full-stack developer</strong> with a
              passion for building modern, user-centric applications. My journey
              in software spans <strong>web applications</strong>,{' '}
              <strong>mobile apps</strong>, and even{' '}
              <strong>augmented reality</strong> experiences.
            </p>
            <p>
              I specialize in the <strong>TypeScript and React ecosystem</strong>
              , with deep experience in edge computing using{' '}
              <strong>Cloudflare Workers</strong>. From interactive Flutter
              kiosks to Unity-based AR shopping tools, I enjoy tackling diverse
              challenges and delivering solutions that make a real impact.
            </p>
            <p>
              I believe in writing clean, maintainable code and leveraging modern
              cloud infrastructure to build applications that are both
              performant and scalable.
            </p>
          </div>
          <div className="about-stats reveal">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
