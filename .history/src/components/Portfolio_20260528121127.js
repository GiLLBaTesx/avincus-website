import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <div className={`portfolio-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Our Portfolio</h2>
          <div className="gold-line"></div>
          <p className="section-subtitle">
            Building excellence, one project at a time
          </p>
        </div>

        <div className={`portfolio-coming-soon ${isVisible ? 'visible' : ''}`}>
          <div className="coming-soon-icon">🚀</div>
          <h3 className="coming-soon-title">Exciting Projects Coming Soon</h3>
          <p className="coming-soon-description">
            As a new company, we're just getting started on our journey to deliver exceptional 
            digital solutions. We're currently working with our first clients to create innovative 
            web, mobile, and software applications.
          </p>
          <p className="coming-soon-description">
            Want to be featured in our portfolio? Let's build something amazing together.
          </p>
          <button className="coming-soon-button" onClick={scrollToContact}>
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
