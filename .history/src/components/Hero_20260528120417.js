import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-logo">
          <img src="/avincus-logo.png" alt="Avincus Logo" className="hero-logo-image" />
        </div>
        
        <h1 className="hero-title">AVINCUS SOFTWARE DEVELOPMENT SERVICES</h1>
        
        <div className="hero-divider"></div>
        
        <p className="hero-tagline">Strategy. Capital. Conquest.</p>
        
        <p className="hero-description">
          Crafting exceptional digital experiences through innovative web, mobile, and software solutions.
          We transform your vision into reality with precision and elegance.
        </p>

        <div className="hero-cta">
          <button className="cta-primary" onClick={scrollToContact}>
            Start Your Project
          </button>
          <button className="cta-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </button>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
