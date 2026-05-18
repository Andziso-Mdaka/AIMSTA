import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // We will place your styles here

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Stats Animation Values
  const [studentsCount, setStudentsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const statsRef = useRef(null);

  // Handle Navbar Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations & stat counters
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // If it's the hero section, trigger the counter animations
          if (entry.target.classList.contains('hero')) {
            animateValue(setStudentsCount, 0, 15, 1500);
            animateValue(setSuccessRate, 0, 98, 1500);
            animateValue(setTrainersCount, 0, 50, 1500);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .hero').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to animate numbers smoothly
  const animateValue = (setValue, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" target="_self">
            <div className="logo-icon">
              <img src="/AIMSTA LOGO ONLY.png" alt="AIMSTA logo" />
            </div>
            <div className="logo-text">
              <span className="logo-name">AIMSTA</span>
              <span className="logo-tagline">Efficacy for Excellence</span>
            </div>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><a href="#home" target="_self" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" target="_self" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" target="_self" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#courses" target="_self" onClick={() => setMobileMenuOpen(false)}>Courses</a></li>
            <li><a href="#testimonials" target="_self" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
          </ul>
          <a href="#contact" className="nav-cta" target="_self">Get Started</a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home" ref={statsRef}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-star"></i>
              Leading Training Institute
            </div>
            <h1>Transform Your Future with <span>AIMSTA</span></h1>
            <p>Empowering students with cutting-edge skills and knowledge. Join thousands of successful graduates who have shaped their careers through our excellence-driven training programs.</p>
            <div className="hero-buttons">
              <a href="#courses" className="btn-primary" target="_self">
                Explore Courses
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#about" className="btn-secondary" target="_self">
                <i className="fas fa-play-circle"></i>
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">{studentsCount}K+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat">
                <div className="stat-number">{successRate}%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">{trainersCount}+</div>
                <div className="stat-label">Expert Trainers</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-fallback-gradient">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <i className="fas fa-graduation-cap hero-cap-icon"></i>
                  <p>Excellence in Education</p>
                </div>
              </div>
            </div>
            <div className="floating-card">
              <i className="fas fa-certificate"></i>
              <span>Certified Programs</span>
            </div>
            <div className="floating-card">
              <i className="fas fa-users"></i>
              <span>Expert Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Learning Solutions</h2>
            <p className="section-subtitle">We offer a wide range of professional training programs designed to meet industry demands and accelerate your career growth.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: 'fa-laptop-code', title: 'Technical Training', text: 'Master the latest technologies with hands-on training in programming, data science, AI, and cloud computing from industry experts.' },
              { icon: 'fa-chart-line', title: 'Business Analytics', text: 'Develop critical analytical skills to drive business decisions. Learn data visualization, statistical analysis, and strategic planning.' },
              { icon: 'fa-bullhorn', title: 'Digital Marketing', text: 'Comprehensive digital marketing courses covering SEO, social media, content strategy, and performance marketing techniques.' },
              { icon: 'fa-users-cog', title: 'Soft Skills', text: 'Enhance your communication, leadership, and interpersonal skills essential for professional success in any industry.' },
              { icon: 'fa-project-diagram', title: 'Project Management', text: 'Learn agile methodologies, risk management, and project planning with PMP and Scrum certification preparation.' },
              { icon: 'fa-language', title: 'Language Training', text: 'Professional language courses designed to improve your business communication and prepare you for global opportunities.' }
            ].map((service, index) => (
              <div className="service-card animate-on-scroll" key={index}>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image animate-on-scroll">
            <div className="about-image-main">
              <div className="about-fallback-gradient">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <i className="fas fa-award about-award-icon"></i>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Excellence</h3>
                  <p>Our Commitment</p>
                </div>
              </div>
            </div>
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-content animate-on-scroll">
            <span className="section-tag">About Us</span>
            <h2>Building Careers Through Quality Education</h2>
            <p>AIMSTA has been at the forefront of professional education, transforming ambitious individuals into industry-ready professionals. Our mission is to bridge the gap between academic knowledge and industry requirements.</p>
            <p>With a team of seasoned professionals and state-of-the-art learning methodologies, we ensure every student receives personalized attention and practical exposure to real-world scenarios.</p>
            <div className="about-features">
              <div className="feature-item"><i className="fas fa-check-circle"></i><span>Industry-Aligned Curriculum</span></div>
              <div className="feature-item"><i className="fas fa-check-circle"></i><span>Expert Faculty</span></div>
              <div className="feature-item"><i className="fas fa-check-circle"></i><span>Hands-on Projects</span></div>
              <div className="feature-item"><i className="fas fa-check-circle"></i><span>Placement Assistance</span></div>
            </div>
            <a href="#courses" className="btn-primary" target="_self">
              Know More About Us
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Popular Courses</span>
            <h2 className="section-title">Featured Training Programs</h2>
            <p className="section-subtitle">Choose from our most sought-after courses designed to boost your career prospects and skill set.</p>
          </div>
          <div className="courses-grid">
            {[
              { badge: 'Bestseller', time: '12 Weeks', students: '2.5k Students', title: 'Full Stack Web Development', desc: 'Master modern web technologies including React, Node.js, and cloud deployment with real-world projects.', price: '$499', oldPrice: '$899' },
              { badge: 'New', time: '8 Weeks', students: '1.8k Students', title: 'Data Science & Analytics', desc: 'Learn Python, machine learning, and data visualization techniques used by top industry professionals.', price: '$599', oldPrice: '$999' },
              { badge: 'Popular', time: '6 Weeks', students: '3.2k Students', title: 'Digital Marketing Mastery', desc: 'Comprehensive training in SEO, SEM, social media marketing, and analytics with certification.', price: '$349', oldPrice: '$649' }
            ].map((course, idx) => (
              <div className="course-card animate-on-scroll" key={idx}>
                <div className="course-image">
                  <span className="course-badge">{course.badge}</span>
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span><i className="fas fa-clock"></i> {course.time}</span>
                    <span><i className="fas fa-user"></i> {course.students}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <div className="course-footer">
                    <div className="course-price">{course.price} <span>{course.oldPrice}</span></div>
                    <a href="#contact" className="enroll-btn" target="_self">Enroll Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">Hear from our alumni who have transformed their careers through AIMSTA's training programs.</p>
          </div>
          <div className="testimonials-slider">
            {[
              { text: '"AIMSTA completely transformed my career trajectory. The practical approach and industry-relevant curriculum helped me land my dream job at a top tech company."', initials: 'SK', name: 'Sarah Kumar', company: 'Software Engineer, Google' },
              { text: '"The instructors are incredibly knowledgeable and supportive. The hands-on projects gave me the confidence to handle real-world challenges from day one."', initials: 'MR', name: 'Michael Rodriguez', company: 'Data Analyst, Microsoft' },
              { text: '"Best investment I\'ve made in my professional development. The networking opportunities and career support were invaluable in my job search."', initials: 'EP', name: 'Emily Parker', company: 'Marketing Manager, Amazon' }
            ].map((testi, i) => (
              <div className="testimonial-card animate-on-scroll" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, sIdx) => <i className="fas fa-star" key={sIdx}></i>)}
                </div>
                <p className="testimonial-text">{testi.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testi.initials}</div>
                  <div className="author-info">
                    <h4>{testi.name}</h4>
                    <span>{testi.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="cta-container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of successful professionals who have transformed their careers with AIMSTA. Enroll today and take the first step towards excellence.</p>
          <a href="#contact" className="cta-btn" target="_self">Get Started Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-icon">A</div>
              <p>AIMSTA is dedicated to providing world-class education and training that empowers individuals to achieve excellence in their professional careers.</p>
              <div className="social-links">
                <a href="#home" target="_self"><i className="fab fa-facebook-f"></i></a>
                <a href="#home" target="_self"><i className="fab fa-twitter"></i></a>
                <a href="#home" target="_self"><i className="fab fa-linkedin-in"></i></a>
                <a href="#home" target="_self"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" target="_self">Home</a></li>
                <li><a href="#about" target="_self">About Us</a></li>
                <li><a href="#courses" target="_self">Courses</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                <li><a href="#courses" target="_self">Web Development</a></li>
                <li><a href="#courses" target="_self">Data Science</a></li>
                <li><a href="#courses" target="_self">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@aimsta.com"><i className="fas fa-envelope"></i> info@aimsta.com</a></li>
                <li><a href="tel:+15551234567"><i className="fas fa-phone"></i> +1 (555) 123-4567</a></li>
                <li><span style={{ color: 'rgba(255,255,255,0.7)' }}><i className="fas fa-map-marker-alt"></i> New York, NY</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AIMSTA. All rights reserved. Efficacy for Excellence.</p>
            <p>Designed with <i className="fas fa-heart" style={{ color: 'var(--primary-green)' }}></i> for future leaders</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;