import React from 'react';

const stats = [
  { value: 'React', label: 'Web Platform' },
  { value: 'Flutter', label: 'Mobile Apps' },
  { value: 'Unity', label: 'AR Experiences' },
  { value: '10+', label: 'Projects Shipped' },
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
              I'm a <strong>full-stack developer</strong> who works across three
              platforms: <strong>React</strong> for the web,{' '}
              <strong>Flutter</strong> for mobile, and{' '}
              <strong>Unity</strong> for augmented reality. I don't just write
              code &mdash; I build complete products that solve real business
              problems across every screen.
            </p>
            <p>
              On the web, <strong>React is my core</strong>. I build
              TypeScript-first applications with server-side rendering, deploy
              them on <strong>Cloudflare Workers</strong> for edge performance,
              and architect everything from real-time dashboards to full SaaS
              platforms. React + TypeScript is where I'm most at home.
            </p>
            <p>
              For mobile, I use <strong>Flutter</strong> to ship cross-platform
              business apps &mdash; interactive retail kiosks, point-of-sale
              displays, and customer-facing tools with offline-first
              architecture. One codebase, native performance on iOS and Android.
            </p>
            <p>
              For immersive experiences, I build with{' '}
              <strong>Unity and C#</strong>. AR shopping tools that let
              customers visualize products in real space, interactive 3D totems
              for exhibitions, and gesture-driven displays for retail. I bring
              game engine depth to practical business applications.
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
