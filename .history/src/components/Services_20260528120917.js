import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const Services = () => {
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

  const handleLearnMore = (serviceTitle) => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      
      // Optional: You can add a small delay and then focus on the message textarea
      setTimeout(() => {
        const messageField = document.querySelector('textarea[name="message"]');
        if (messageField) {
          messageField.focus();
          messageField.placeholder = `I'm interested in ${serviceTitle}. Please tell me more...`;
        }
      }, 800);
    }
  };

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies. Responsive, scalable, and optimized for performance.',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment', 'SEO Optimization']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      features: ['React Native', 'iOS & Android', 'App Store Launch', 'Push Notifications']
    },
    {
      icon: '⚙️',
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business needs. From concept to deployment.',
      features: ['Custom Solutions', 'API Integration', 'Database Design', 'Maintenance & Support']
    }
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Our Services</h2>
          <div className="gold-line"></div>
          <p className="section-subtitle">
            Comprehensive digital solutions designed to elevate your business
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-bullet">◆</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="service-button"
                onClick={() => handleLearnMore(service.title)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
