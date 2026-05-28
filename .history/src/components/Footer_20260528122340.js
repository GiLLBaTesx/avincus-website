import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/avincus-logo.png" alt="Avincus Logo" className="footer-logo-image" />
              <span className="footer-logo-text">AVINCUS</span>
            </div>
            <p className="footer-tagline">Strategy. Capital. Conquest.</p>
            <p className="footer-description">
              Transforming visions into exceptional digital experiences through innovative solutions.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          </div>

          <div className="footer-services">
            <h3>Services</h3>
            <p>Web Development</p>
            <p>Mobile Development</p>
            <p>Software Development</p>
            <p>Consulting</p>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <a href="mailto:avincus.softwaredevelopment@gmail.com" className="footer-link">
              avincus.softwaredevelopment@gmail.com
            </a>
            <a href="tel:09934341233" className="footer-link">
              0993 434 1233
            </a>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="GitHub">gh</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © 2026 AVINCUS SOFTWARE DEVELOPMENT SERVICES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
