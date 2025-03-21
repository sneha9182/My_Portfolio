/* Components/About.js */
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src="https://res.cloudinary.com/daoak3mnm/image/upload/v1741773943/WhatsApp_Image_2025-03-12_at_3.32.54_PM_m8qgek.jpg" alt="Developer" />
            <div className="image-border"></div>
          </div>
        </div>
        <div className="about-text">
          <p>Aspiring Full Stack Developer with experience in MERN Stack Development during my internship at ScaleOrange Technologies.</p>
          <p>Currently in 4th year of my B-Tech, I am passionate about building scalable web applications and continuously enhancing my skills in modern web technologies.</p>
          <p>My focus on efficient coding practices using Java, JavaScript, python and problem solving drives my contribution to dynamic project environment.</p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Personal Projects</span>
            </div>
          </div>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;