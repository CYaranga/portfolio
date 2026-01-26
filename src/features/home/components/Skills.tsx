import React from 'react';

const skillCategories = [
  {
    icon: '\u{1F310}',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Flutter', 'Dart'],
  },
  {
    icon: '\u{2699}\u{FE0F}',
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Hono', 'Cloudflare Workers', 'Python', 'REST APIs', 'D1', 'KV'],
  },
  {
    icon: '\u{1F3AE}',
    title: 'Game Dev & AR',
    skills: ['Unity', 'C#', 'AR Foundation', '3D Graphics', 'Shader Programming'],
  },
  {
    icon: '\u{1F6E0}\u{FE0F}',
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Wrangler', 'Vitest', 'VS Code', 'Docker', 'Figma'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills & Technologies</h2>
        <p className="section-subtitle reveal">
          The tools and technologies I use to bring ideas to life
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`skill-category reveal reveal-delay-${Math.min(i, 3)}`}
            >
              <div className="skill-category-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
