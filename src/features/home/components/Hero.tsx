import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-name">
            Chris <span className="accent">Yaranga</span>
          </h1>
          <h2 className="hero-title">React &middot; Flutter &middot; Unity AR</h2>
          <p className="hero-description">
            I build high-performance web applications with React, cross-platform
            mobile apps with Flutter, and immersive AR experiences with Unity.
            Three platforms, one developer &mdash; from idea to production.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
