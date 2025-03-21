// App.js
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [theme, setTheme] = useState('dark');
  
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className="app">
      <Cursor />
      <BackgroundAnimation />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;