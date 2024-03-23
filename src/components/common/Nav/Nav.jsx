import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import your CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [big,setbig]=useState(false);
  
  useEffect(()=>{
    if (window.innerWidth < 1170) {
      setbig(false);
    }else {
      setbig(true);
    }
   })
   
  
  const toggleNavbar = () => {
    
     if(window.innerWidth < 1170){
      setIsOpen(!isOpen);
      // alert('ok')
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <img src="./img/MMMUT LOGO.png" alt="Logo" className="navbar__logo" />
          <span className="navbar__title">CDC (Coders & Developers Club)</span>
        </div>
        <button className="navbar__toggle" onClick={toggleNavbar}>
          {/* <span className="navbar__icon"></span>
          <span className="navbar__icon"></span>
          <span className="navbar__icon"></span> */}
        </button>
        <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar__link" 
          onClick={toggleNavbar}
          >Home</Link>
          <Link to="/about" className="navbar__link" 
          onClick={toggleNavbar}
          >About</Link>
          <Link to="/team" className="navbar__link" 
          onClick={toggleNavbar}
          >Team</Link>
          <Link to="/event" className="navbar__link" 
          onClick={toggleNavbar}
          >Event</Link>
          <Link to="/contact" className="navbar__link" 
          onClick={toggleNavbar}
          >Contact</Link>
          <Link to="/contest" className="navbar__link" 
          onClick={toggleNavbar}
          >Contests</Link>
          <Link to="/query" className="navbar__link" 
          onClick={toggleNavbar}
          >Query</Link>
          <Link to="/verify" className="navbar__link" 
          onClick={toggleNavbar}
          >Verify</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
