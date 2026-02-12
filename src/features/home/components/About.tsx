import React from 'react';

const stats = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '3', label: 'Platforms' },
  { value: '8+', label: 'Technologies' },
  { value: 'AR/VR', label: 'Specialist' },
];

const About: React.FC = () => {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">
          A developer who bridges the gap between web, mobile, and immersive tech
        </p>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a <strong>full-stack developer</strong> with a unique
              combination of skills across <strong>web</strong>,{' '}
              <strong>mobile</strong>, and{' '}
              <strong>augmented reality</strong> development. I don't just write
              code &mdash; I build complete solutions that solve real business
              problems.
            </p>
            <p>
              On the web, I specialize in{' '}
              <strong>React and TypeScript</strong> with server-side rendering
              on <strong>Cloudflare Workers</strong>, delivering lightning-fast
              applications at the edge. For mobile, I use{' '}
              <strong>Flutter</strong> to create cross-platform business apps
              &mdash; from interactive retail kiosks and point-of-sale displays
              to customer-facing tools with offline-first architecture.
            </p>
            <p>
              Where I truly stand out is in{' '}
              <strong>augmented reality for business</strong>. Using{' '}
              <strong>Unity and C#</strong>, I've built AR shopping experiences
              that let customers visualize products in their real space,
              interactive 3D totems for exhibitions, and gesture-driven displays
              for retail environments. I bring together the technical depth of
              game engine development with practical business applications.
            </p>
            <p>
              Whether it's a cloud-native web platform, a Flutter app for your
              sales team, or an AR experience for your showroom &mdash; I
              deliver production-ready solutions from concept to deployment.
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
