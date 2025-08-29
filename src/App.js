import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo gradient-text">YourName</h2>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <img 
            src="/api/placeholder/280/280" 
            alt="Profile" 
            className="profile-image"
          />
          <h1 className="gradient-text">John Doe</h1>
          <p className="gradient-text-2">Full Stack Developer</p>
          <p>I create beautiful, functional web applications</p>
          <button className="gradient-btn">Download Resume</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with experience in React, Node.js, 
            and modern web technologies. I love turning ideas into reality 
            through code.
          </p>
          
          <div className="tech-grid">
            <div className="tech-item">React</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">CSS3</div>
            <div className="tech-item">MongoDB</div>
            <div className="tech-item">Express</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce App</h3>
              <p>Full-stack e-commerce platform with React and Node.js</p>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>Responsive portfolio built with modern CSS and React</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;