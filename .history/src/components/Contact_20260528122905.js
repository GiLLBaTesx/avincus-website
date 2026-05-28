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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xaqkavgz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Inquiry: ${formData.service || 'General'}`,
          _replyto: formData.email
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            {submitStatus === 'success' && (
              <div className="form-message success">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                ✗ Oops! Something went wrong. Please try again or email us directly.
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
                disabled={isSubmitting}
              >
                <option value="">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Software Development">Software Development</option>
                <option value="Consulting">Consulting</option>
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
