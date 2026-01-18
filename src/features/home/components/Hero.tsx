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
          <h2 className="hero-title">Full-Stack Developer</h2>
          <p className="hero-description">
            I build modern web experiences with React, TypeScript, and Cloud
            technologies. Passionate about creating performant, scalable
            solutions from edge to user.
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
