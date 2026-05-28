import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Inquiry: ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:avincus.softwaredevelopment@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Opening your email client... Thank you for your interest!');
    
    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="gold-line"></div>
          <p className="section-subtitle">
            Ready to start your project? Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:avincus.softwaredevelopment@gmail.com" className="info-link">
                avincus.softwaredevelopment@gmail.com
              </a>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:09934341233" className="info-link">
                0993 434 1233
              </a>
            </div>
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>

          <form className={`contact-form ${isVisible ? 'visible' : ''}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="software">Software Development</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input"
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
