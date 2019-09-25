import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navbar">
      <div id="nav-links">
        <Link smooth to="#home" className="nav-link">
          Home
        </Link>
        <Link smooth to="#about-me" className="nav-link">
          About Me
        </Link>
        <Link className="nav-link">Work</Link>
        <Link className="nav-link">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
