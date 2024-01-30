import React from "react";
import "./nav.css";
import { BrowserRouter as Routers, Router, Route, NavLink } from "react-router-dom";
function Nav() {
  return (
    <>

    
    <div>
      <nav>
        <div className="logo">CDC (Coders & Developers Club)</div>
        <ul className="nav_item">
          
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/service">service</a>
          </li>
          <li>
            <a href="">service</a>
          </li>
          <li>
            <a href="">logout</a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Nav;
