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
          <h2 className="hero-title">Full-Stack &amp; Mobile AR Developer</h2>
          <p className="hero-description">
            I build modern web apps, cross-platform mobile solutions with
            Flutter, and immersive AR experiences with Unity. From edge-deployed
            platforms to business kiosks and augmented reality tools &mdash; I turn
            ideas into production-ready products.
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
