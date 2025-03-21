

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 75 },
        { name: "JavaScript", level: 95 },
        { name: "React.js", level: 90 },
        { name: "React Native", level: 60 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Twilio", level: 50 },
    ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express", level: 95 },
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 95 },
        { name: "Firebase", level: 80 },
        { name: "GraphQL", level: 30 },
        { name: "RESTful APIs", level: 90 },
        { name: "SQLite", level: 80 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Java", level: 90 },
        { name: "Python", level: 75 },
        { name: "C", level: 90 },
      ]
    },
    {
        title: "Tools & Others",
        skills: [
          { name: "Git", level: 93 },
          { name: "Twilio", level: 60 },
          { name: "Electron.js", level: 65 },
          { name: "Docker", level: 50 },
          { name: "MS Office", level: 80 }
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          { name: "Communication", level: 90 },
          { name: "Problem Solving", level: 80 },
          { name: "Time Management", level: 95 },
          { name: "Team Work", level: 85 },
          { name: "Aptitude & Reasoning", level: 85 }
        ]
      }
  ];
  
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div 
            className="skills-category" 
            key={index}
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  className="skill-item" 
                  key={skillIndex}
                  style={{animationDelay: `${index * 0.2 + skillIndex * 0.1}s`}}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{"--skill-level": `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;