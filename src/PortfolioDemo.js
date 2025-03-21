import React, { useState } from 'react';

const PortfolioDemo = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog and shopping cart",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media engagement",
      tech: ["React", "D3.js", "Firebase"]
    }
  ];
  
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      {/* Navigation */}
      <div className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-6">
            {['home', 'projects', 'skills', 'contact'].map((tab) => (
              <button
                key={tab}
                className={`px-2 py-1 capitalize relative ${
                  activeTab === tab ? 'text-white' : 'text-gray-400'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-pink-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="relative min-h-[400px] flex items-center justify-center p-8">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'pulse 5s infinite ease-in-out'
              }}
            ></div>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="w-full max-w-3xl z-10 text-white">
          {activeTab === 'home' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">Developer</span>
              </h1>
              <h2 className="text-2xl mb-6">Frontend Developer & UI/UX Designer</h2>
              <p className="text-gray-300 mb-8">Creating beautiful, interactive, and responsive web experiences</p>
              <button 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 font-medium text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                View My Work
              </button>
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-gray-800 rounded-lg overflow-hidden"
                    style={{
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      transform: `translateY(${Math.random() * 10}px)`,
                      animation: 'float 6s infinite ease-in-out'
                    }}
                  >
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-pink-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold">{project.title}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'skills' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'UI/UX Design', 'TypeScript'].map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-800 p-4 rounded-lg text-center"
                    style={{
                      transition: 'transform 0.3s ease',
                      animation: `float ${6 + i * 0.5}s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 flex items-center justify-center">
                      {skill.charAt(0)}
                    </div>
                    <h3 className="font-medium mb-2">{skill}</h3>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-pink-500"
                        style={{ width: `${70 + Math.random() * 25}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'contact' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 text-white"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2">Message</label>
                  <textarea
                    className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 text-white"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="w-full py-2 rounded bg-gradient-to-r from-blue-600 to-pink-500 font-medium">
                  Send Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDemo;