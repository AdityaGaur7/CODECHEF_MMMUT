import React from "react";
import "./nav.css";
// import "./navbar.js"

import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>

{/* <div classNameName="container">
    <header classNameName="site-header">
        <div classNameName="header__content--flow">
            <section classNameName="header-content--left">
                <a href="#" classNameName="brand-logo">
                < img src="./img/MMMUT LOGO.png" alt="" />
                    <span classNameName="logo-text"> CDC (Coders & Developers Club)</span>
                </a>
                <button classNameName="nav-toggle">
                    <span classNameName="toggle--icon"></span>
                </button>
            </section>
            <section classNameName="header-content--right">
                <nav classNameName="header-nav" role="navigation">
                    <ul classNameName="nav__list" aria-expanded="false">
                        <li classNameName="list-item">
                            <Link classNameName="nav__link" to="/">Home</Link>
                        </li>
                        <li classNameName="list-item">
                            <Link classNameName="nav__link" to="/About">About</Link>
                        </li>
                        <li classNameName="list-item">
                            <Link classNameName="nav__link" to="/team">Team</Link>
                        </li>
                        <li classNameName="list-item">
                            <Link classNameName="nav__link" to="/event">Events</Link>
                        </li>
                        <li classNameName="list-item">
                            <Link classNameName="nav__link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </header>
</div> */}
    
<div className="nav">
  <div className="nav-header">
    <div className="nav-title">
    CDC (Coders & Developers Club)
    </div>
  </div>
 

  <div className="nav-links">
    <ul>
   <li> <Link to="/">Home</Link></li>
   <li> <Link to="/About">About</Link></li>
   <li> <Link to="/team">Team</Link></li>
   <li> <Link to="/event">Events</Link></li>
   <li> <Link to="/contact">Contact</Link></li>
   </ul>
  </div>
</div>

    </div>
  );
}

export default Nav;
