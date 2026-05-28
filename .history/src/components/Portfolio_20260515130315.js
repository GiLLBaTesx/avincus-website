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

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and inventory management',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app for workout tracking and nutrition planning',
      tech: ['React Native', 'Firebase', 'Redux', 'API Integration']
    },
    {
      title: 'CRM System',
      category: 'Software Development',
      description: 'Enterprise customer relationship management system with analytics dashboard',
      tech: ['React', 'Python', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search and virtual tours',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel']
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'On-demand food delivery application with real-time tracking',
      tech: ['React Native', 'Node.js', 'Socket.io', 'Maps API']
    },
    {
      title: 'Analytics Dashboard',
      category: 'Software Development',
      description: 'Business intelligence dashboard with data visualization and reporting',
      tech: ['React', 'D3.js', 'Express', 'MySQL']
    }
  ];

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <div className={`portfolio-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Our Portfolio</h2>
          <div className="gold-line"></div>
          <p className="section-subtitle">
            Showcasing our commitment to excellence through successful projects
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <button className="view-project">View Project</button>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
