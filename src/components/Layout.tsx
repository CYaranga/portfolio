import React from 'react';
import { Outlet } from 'react-router-dom';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Layout: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="nav-logo">
            CY<span className="accent">.</span>
          </a>
          <input type="checkbox" id="nav-check" className="nav-check" />
          <label htmlFor="nav-check" className="nav-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; 2026 Chris Yaranga. Built with React &amp; Cloudflare Workers.</p>
          <div className="footer-links">
            <a href="https://github.com/CYaranga" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
