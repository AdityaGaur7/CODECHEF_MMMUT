import React from "react";
import { Link } from 'react-router-dom'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineEmojiEvents } from "react-icons/md";
function Nav() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4 nav">
        <div className="flex items-center">
          <img src="./img/MMMUT LOGO.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-white text-lg font-bold">CDC (Coders & Developers Club)</span>
        </div>
        <div className="hidden md:flex">
          <Link to="/" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Home </Link>
          <Link to="/About" className="text-white mx-2 hover:text-gray-300 " id='anchor'>About </Link>
          <Link to="/team" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Team </Link>
          <Link to="/event" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Events </Link>
          <Link to="/contact" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Contact</Link>
          <Link to="/contest" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Code</Link>
          <Link to="/query" className="text-white mx-2 hover:text-gray-300 " id='anchor'>Query</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
