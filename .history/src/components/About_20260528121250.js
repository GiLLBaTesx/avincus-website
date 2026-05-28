import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
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

  const stats = [
    { number: '2026', label: 'Founded' },
    { number: '100%', label: 'Commitment' },
    { number: '24/7', label: 'Support' },
    { number: '∞', label: 'Possibilities' }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">About AVINCUS</h2>
            <div className="gold-line"></div>
            <p className="about-description">
              At AVINCUS, we believe in the power of strategic thinking, capital investment in innovation, 
              and the conquest of digital challenges. Our name embodies our philosophy: combining strategy, 
              resources, and determination to deliver exceptional results.
            </p>
            <p className="about-description">
              As a newly established software development company, we bring fresh perspectives and cutting-edge 
              expertise to every project. We're passionate developers and strategists ready to transform your 
              vision into powerful, scalable applications that drive real business value.
            </p>
            <p className="about-description">
              Whether you're a startup with a bold idea or an established business seeking digital transformation, 
              we're here to be your technology partner from day one.
            </p>
            <div className="about-values">
              <div className="value-item">
                <h3>Strategy</h3>
                <p>Thoughtful planning and execution</p>
              </div>
              <div className="value-item">
                <h3>Capital</h3>
                <p>Investment in cutting-edge technology</p>
              </div>
              <div className="value-item">
                <h3>Conquest</h3>
                <p>Overcoming every technical challenge</p>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'visible' : ''}`}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
