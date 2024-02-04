import React from "react";
import "./nav.css";
// import "./navbar.js"

import { Link, NavLink } from 'react-router-dom'
function Nav() {
  return (
    <>

<div className="container">
    <header className="site-header">
        <div className="header__content--flow">
            <section className="header-content--left">
                <a href="#" className="brand-logo">
                < img src="./img/MMMUT LOGO.png" alt="" />
                    <span className="logo-text"> CDC (Coders & Developers Club)</span>
                </a>
                <button className="nav-toggle">
                    <span className="toggle--icon"></span>
                </button>
            </section>
            <section className="header-content--right">
                <nav className="header-nav" role="navigation">
                    <ul className="nav__list" aria-expanded="false">
                        <li className="list-item">
                            <Link className="nav__link" to="/">Home</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav__link" to="/">About</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav__link" to="/team">Team</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav__link" to="/event">Events</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav__link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </header>
</div>
    

    </>
  );
}

export default Nav;
