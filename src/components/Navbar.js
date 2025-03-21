// import React, { useState, useEffect } from 'react'; 
// import './Navbar.css'; 
 
// const Navbar = ({ changeTheme, currentTheme }) => { 
//   const [scrolled, setScrolled] = useState(false); 
//   const [menuOpen, setMenuOpen] = useState(false); 
   
//   const toggleMenu = () => { 
//     setMenuOpen(!menuOpen); 
//   }; 
   
//   useEffect(() => { 
//     const handleScroll = () => { 
//       if (window.scrollY > 50) { 
//         setScrolled(true); 
//       } else { 
//         setScrolled(false); 
//       } 
//     }; 
     
//     window.addEventListener('scroll', handleScroll); 
//     return () => window.removeEventListener('scroll', handleScroll); 
//   }, []); 
   
//   return ( 
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}> 
//       <div className="navbar-container"> 
//         <a href="#home" className="logo"> 
//           <span className="highlight">Portfolio</span> 
//         </a> 
         
//         <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}> 
//           <div className="bar"></div> 
//           <div className="bar"></div> 
//           <div className="bar"></div> 
//         </div> 
         
//         <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}> 
//           <li><a href="#home" onClick={toggleMenu}>Home</a></li> 
//           <li><a href="#about" onClick={toggleMenu}>About</a></li> 
//           <li><a href="#projects" onClick={toggleMenu}>Projects</a></li> 
//           <li><a href="#skills" onClick={toggleMenu}>Skills</a></li> 
//           <li><a href="#contact" onClick={toggleMenu}>Contact</a></li> 
//           <li> 
//             <a href="#downloadResume" className="download-link" onClick={toggleMenu}> 
//               Download Resume 
//             </a> 
//           </li> 
//         </ul> 
         
//         <div className="theme-switcher"> 
//           <button 
//             className={`theme-btn ${currentTheme === 'dark' ? 'active' : ''}`} 
//             onClick={() => changeTheme('dark')} 
//           > 
//             Dark 
//           </button> 
//           <button 
//             className={`theme-btn ${currentTheme === 'light' ? 'active' : ''}`} 
//             onClick={() => changeTheme('light')} 
//           > 
//             Light 
//           </button> 
//           <button 
//             className={`theme-btn ${currentTheme === 'neon' ? 'active' : ''}`} 
//             onClick={() => changeTheme('neon')} 
//           > 
//             Neon 
//           </button> 
//         </div> 
//       </div> 
//     </nav> 
//   ); 
// }; 
 
// export default Navbar;



import React, { useState, useEffect } from 'react'; 
import './Navbar.css'; 

const Navbar = ({ changeTheme, currentTheme }) => { 
  const [scrolled, setScrolled] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  // Google Drive link to the resume
  const resumeLink = "https://drive.google.com/file/d/1tg0EAWJ0drYNw0CX7IsDdoiSUetbMZEN/view?usp=drive_link";

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen); 
  }; 

  useEffect(() => { 
    const handleScroll = () => { 
      if (window.scrollY > 50) { 
        setScrolled(true); 
      } else { 
        setScrolled(false); 
      } 
    }; 
    
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  return ( 
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}> 
      <div className="navbar-container"> 
        <a href="#home" className="logo"> 
          <span className="highlight">Portfolio</span> 
        </a> 

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}> 
          <div className="bar"></div> 
          <div className="bar"></div> 
          <div className="bar"></div> 
        </div> 
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}> 
          <li><a href="#home" onClick={toggleMenu}>Home</a></li> 
          <li><a href="#about" onClick={toggleMenu}>About</a></li> 
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li> 
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li> 
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li> 
          <li> 
            <a href={resumeLink} className="download-link" onClick={toggleMenu} target="_blank" rel="noopener noreferrer"> 
              Download Resume 
            </a> 
          </li> 
        </ul> 
        
        <div className="theme-switcher"> 
          <button 
            className={`theme-btn ${currentTheme === 'dark' ? 'active' : ''}`} 
            onClick={() => changeTheme('dark')} 
          > 
            Dark 
          </button> 
          <button 
            className={`theme-btn ${currentTheme === 'light' ? 'active' : ''}`} 
            onClick={() => changeTheme('light')} 
          > 
            Light 
          </button> 
          <button 
            className={`theme-btn ${currentTheme === 'neon' ? 'active' : ''}`} 
            onClick={() => changeTheme('neon')} 
          > 
            Neon 
          </button> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;
