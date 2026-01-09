export function getStyles(): string {
  return `
/* ============================
   RESET & BASE
   ============================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--color-abyssal-blue);
  color: var(--color-palladian);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
a { color: inherit; }
img { max-width: 100%; height: auto; display: block; }
ul { list-style: none; }

/* ============================
   LAYOUT
   ============================ */
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

/* ============================
   NAVIGATION
   ============================ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(27, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(238, 233, 223, 0.06);
}
.nav-inner {
  display: flex; align-items: center; justify-content: space-between; height: 70px;
}
.nav-logo {
  font-size: 1.5rem; font-weight: 700; text-decoration: none;
  color: var(--color-palladian); letter-spacing: -0.5px;
}
.nav-logo .accent { color: var(--color-burning-flame); }
.nav-links { display: flex; gap: 0.25rem; }
.nav-link {
  display: block; padding: 0.5rem 1rem; color: var(--color-oatmeal);
  text-decoration: none; font-size: 0.9rem; font-weight: 500;
  border-radius: 8px; transition: all 0.2s ease;
}
.nav-link:hover {
  color: var(--color-palladian);
  background: rgba(238, 233, 223, 0.06);
}
.nav-toggle {
  display: none; background: none; border: none; cursor: pointer; padding: 0.5rem;
}
.nav-toggle span {
  display: block; width: 22px; height: 2px; background: var(--color-palladian);
  margin: 5px 0; transition: all 0.3s ease; border-radius: 1px;
}
.nav-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.nav-toggle.active span:nth-child(2) { opacity: 0; }
.nav-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* ============================
   HERO
   ============================ */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding-top: 70px;
}
.hero-container { position: relative; z-index: 1; width: 100%; }
.hero-content { max-width: 680px; }
.hero-greeting {
  display: block; font-size: 1.1rem; font-weight: 500;
  color: var(--color-burning-flame); margin-bottom: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  opacity: 0; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s;
}
.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700;
  line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 0.75rem;
  opacity: 0; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s;
}
.hero-name .accent { color: var(--color-burning-flame); }
.hero-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 300;
  color: var(--color-oatmeal); margin-bottom: 1.5rem;
  opacity: 0; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.6s;
}
.hero-description {
  font-size: 1.05rem; color: var(--color-oatmeal); line-height: 1.8;
  margin-bottom: 2.5rem; max-width: 520px;
  opacity: 0; animation: fadeInUp 0.6s ease forwards; animation-delay: 0.8s;
}
.hero-cta {
  display: flex; gap: 1rem; flex-wrap: wrap;
  opacity: 0; animation: fadeInUp 0.6s ease forwards; animation-delay: 1s;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-gradient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(255,177,98,0.07) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(163,81,57,0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 100%, rgba(44,59,77,0.4) 0%, transparent 60%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(238,233,223,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(238,233,223,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero-circle { position: absolute; border-radius: 50%; }
.hero-circle-1 {
  width: 300px; height: 300px; top: 10%; right: 15%;
  border: 1px solid rgba(255,177,98,0.08);
  animation: float1 8s ease-in-out infinite;
}
.hero-circle-2 {
  width: 200px; height: 200px; bottom: 20%; left: 10%;
  border: 1px solid rgba(163,81,57,0.08);
  animation: float2 6s ease-in-out infinite;
}
.hero-circle-3 {
  width: 150px; height: 150px; top: 40%; right: 30%;
  background: radial-gradient(circle, rgba(255,177,98,0.04) 0%, transparent 70%);
  animation: float3 10s ease-in-out infinite;
}

/* ============================
   SECTIONS
   ============================ */
.section { padding: 6rem 0; }
.section-alt { background: rgba(44, 59, 77, 0.12); }
.section-title {
  font-size: 2rem; font-weight: 700; margin-bottom: 0.75rem;
  position: relative; display: inline-block;
}
.section-title::after {
  content: ''; position: absolute; bottom: -8px; left: 0;
  width: 50px; height: 3px; background: var(--color-burning-flame); border-radius: 2px;
}
.section-subtitle {
  color: var(--color-oatmeal); font-size: 1.05rem;
  margin-top: 1rem; margin-bottom: 3.5rem; max-width: 500px;
}

/* ============================
   ABOUT
   ============================ */
.about-grid {
  display: grid; grid-template-columns: 1.5fr 1fr;
  gap: 4rem; align-items: start;
}
.about-text { font-size: 1.02rem; line-height: 1.85; color: var(--color-oatmeal); }
.about-text p { margin-bottom: 1.25rem; }
.about-text strong { color: var(--color-palladian); font-weight: 600; }
.about-stats { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
.stat-card {
  text-align: center; padding: 1.75rem 1rem;
  background: rgba(44, 59, 77, 0.25); border-radius: 12px;
  border: 1px solid rgba(238, 233, 223, 0.06); transition: all 0.3s ease;
}
.stat-card:hover { border-color: rgba(255, 177, 98, 0.15); transform: translateY(-2px); }
.stat-value {
  display: block; font-size: 2.25rem; font-weight: 700;
  color: var(--color-burning-flame); line-height: 1.2;
}
.stat-label {
  display: block; font-size: 0.85rem; color: var(--color-oatmeal);
  margin-top: 0.35rem; font-weight: 500;
}

/* ============================
   SKILLS
   ============================ */
.skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.skill-category {
  background: rgba(44, 59, 77, 0.2); border: 1px solid rgba(238, 233, 223, 0.06);
  border-radius: 16px; padding: 2rem; transition: all 0.3s ease;
}
.skill-category:hover { border-color: rgba(255, 177, 98, 0.15); }
.skill-category-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
.skill-category-title {
  color: var(--color-burning-flame); font-size: 1rem; font-weight: 600;
  margin-bottom: 1.25rem;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill-tag {
  padding: 0.4rem 0.85rem; background: rgba(238, 233, 223, 0.05);
  color: var(--color-palladian); border-radius: 8px; font-size: 0.83rem;
  font-weight: 500; border: 1px solid rgba(238, 233, 223, 0.08);
  transition: all 0.2s ease;
}
.skill-tag:hover {
  background: rgba(255, 177, 98, 0.1);
  border-color: rgba(255, 177, 98, 0.2);
  color: var(--color-burning-flame);
}

/* ============================
   PROJECTS
   ============================ */
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.project-card {
  background: rgba(44, 59, 77, 0.2); border: 1px solid rgba(238, 233, 223, 0.06);
  border-radius: 16px; padding: 2rem; transition: all 0.3s ease;
  display: flex; flex-direction: column; height: 100%;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 177, 98, 0.2);
  background: rgba(44, 59, 77, 0.35);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
.project-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 1.5rem;
}
.project-icon { color: var(--color-burning-flame); }
.project-icon svg { width: 28px; height: 28px; }
.project-link {
  color: var(--color-oatmeal); text-decoration: none; transition: color 0.2s ease;
}
.project-link:hover { color: var(--color-burning-flame); }
.project-link svg { width: 20px; height: 20px; }
.project-name {
  font-size: 1.2rem; font-weight: 600; margin-bottom: 0.75rem;
  color: var(--color-palladian);
}
.project-description {
  font-size: 0.92rem; color: var(--color-oatmeal); line-height: 1.7;
  margin-bottom: 1.5rem; flex: 1;
}
.project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
.tech-tag {
  padding: 0.25rem 0.65rem; background: rgba(255, 177, 98, 0.08);
  color: var(--color-burning-flame); border-radius: 6px; font-size: 0.78rem;
  font-weight: 500; border: 1px solid rgba(255, 177, 98, 0.12);
}
.project-meta {
  display: flex; align-items: center; gap: 1rem;
  font-size: 0.85rem; color: var(--color-oatmeal);
}
.project-stars {
  display: flex; align-items: center; gap: 0.3rem;
  color: var(--color-burning-flame);
}
.project-stars svg { width: 14px; height: 14px; }

/* ============================
   CONTACT
   ============================ */
.contact-container { text-align: center; max-width: 600px; margin: 0 auto; }
.contact-container .section-title { display: block; }
.contact-container .section-title::after { left: 50%; transform: translateX(-50%); }
.contact-container .section-subtitle { margin-left: auto; margin-right: auto; }
.contact-links { display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap; }
.contact-link {
  display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.75rem;
  background: rgba(44, 59, 77, 0.25); border: 1px solid rgba(238, 233, 223, 0.08);
  border-radius: 12px; color: var(--color-palladian); text-decoration: none;
  font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease;
}
.contact-link:hover {
  border-color: var(--color-burning-flame);
  background: rgba(44, 59, 77, 0.4);
  transform: translateY(-2px);
  color: var(--color-burning-flame);
}
.contact-link svg { width: 20px; height: 20px; flex-shrink: 0; }

/* ============================
   FOOTER
   ============================ */
.footer {
  padding: 2.5rem 0; border-top: 1px solid rgba(238, 233, 223, 0.06);
}
.footer-inner { display: flex; justify-content: space-between; align-items: center; }
.footer p { font-size: 0.85rem; color: var(--color-oatmeal); }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  color: var(--color-oatmeal); text-decoration: none; font-size: 0.85rem;
  transition: color 0.2s ease;
}
.footer-links a:hover { color: var(--color-burning-flame); }

/* ============================
   BUTTONS
   ============================ */
.btn {
  display: inline-block; padding: 0.8rem 1.75rem; border-radius: 8px;
  font-weight: 600; font-size: 0.95rem; text-decoration: none;
  transition: all 0.3s ease; cursor: pointer; border: none;
}
.btn-primary {
  background: var(--color-burning-flame); color: var(--color-abyssal-blue);
}
.btn-primary:hover {
  filter: brightness(1.1); transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 177, 98, 0.25);
}
.btn-outline {
  background: transparent; color: var(--color-palladian);
  border: 1.5px solid rgba(238, 233, 223, 0.2);
}
.btn-outline:hover {
  border-color: var(--color-burning-flame);
  color: var(--color-burning-flame);
  transform: translateY(-2px);
}

/* ============================
   ANIMATIONS
   ============================ */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(15px, -20px) rotate(3deg); }
}
@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 15px); }
}
@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -10px) scale(1.05); }
}

/* Scroll reveal */
.js .reveal {
  opacity: 0; transform: translateY(25px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.js .reveal.visible { opacity: 1; transform: translateY(0); }
.js .reveal-delay-1 { transition-delay: 0.1s; }
.js .reveal-delay-2 { transition-delay: 0.2s; }
.js .reveal-delay-3 { transition-delay: 0.3s; }

/* ============================
   RESPONSIVE
   ============================ */
@media (max-width: 768px) {
  .nav-toggle { display: block; }
  .nav-links {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    background: rgba(27, 38, 50, 0.98); backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column; padding: 1rem 1.5rem 1.5rem;
    border-bottom: 1px solid rgba(238, 233, 223, 0.06);
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 0.75rem 1rem; }
  .hero-content { max-width: 100%; }
  .hero-circle { display: none; }
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .about-stats { grid-template-columns: repeat(3, 1fr); }
  .skills-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
  .section { padding: 4rem 0; }
}

@media (max-width: 480px) {
  .about-stats { grid-template-columns: 1fr; }
  .contact-links { flex-direction: column; align-items: center; }
  .hero-cta { flex-direction: column; }
  .btn { text-align: center; width: 100%; }
  .contact-link { width: 100%; justify-content: center; }
}
  `.trim();
}
