/* Components/Hero.js */
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const text = title.innerText;
    title.innerText = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.innerText = text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      title.appendChild(span);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>Sneha Sharma</h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          Full Stack developer specializing in creating interactive frontend and with efficient API integration, backend along with databases
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default Hero;
