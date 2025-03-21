/* Components/Cursor.js */
import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .btn, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    
    addEventListeners();
    handleLinkHoverEvents();
    
    return () => {
      removeEventListeners();
    };
  }, []);
  
  return (
    <>
      <div
        className={`cursor-dot ${clicked ? 'active' : ''} ${hidden ? 'hidden' : ''} ${linkHovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${clicked ? 'active' : ''} ${hidden ? 'hidden' : ''} ${linkHovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default Cursor;