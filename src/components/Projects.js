/* Components/Projects.js */
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Blog Posting Multimedia",
      category: "MERN",
      image: "/api/placeholder/600/400",
      description: "A fully responsive e-commerce platform containing several blogs posted by users with some limitations to protect the app from sensitive content.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Food Cart",
      category: "MERN",
      image: "/api/placeholder/600/400",
      description: "An end-to-end food delivery application which serves instant food orders with understandable UI for users.",
      technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "Google oauth", "Google Maps", "Docker"]
    },
    {
      id: 3,
      title: "Task Management App",
      category: "React",
      image: "/api/placeholder/60000",
      description: "A task management application with simple add, delete and edit operations for users to note the tasks and delete them when they complete.",
      technologies: ["React", "Google worksheets"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "React",
      image: "/api/placeholder/600/400",
      description: "A modern portfolio website for creative professionals with smooth animations and interactive elements.",
      technologies: ["React", "CSS", "Animation libraries"]
    }
  ];
  
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'MERN', 'Mobile'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      
      <div className="project-filter">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#!" className="project-link">
                    <span>Preview</span>
                  </a>
                  <a href="https://github.com" className="project-link">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;