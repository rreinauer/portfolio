import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

const NavMenu = ({ show }) => {
  const showHide = show ? 'navmenu-container show' : 'navmenu-container hide';
  return (
    <div className={showHide}>
      <Link smooth to="#about-me" className="navmenu-link">
        ABOUT ME
      </Link>
      <Link smooth to="#about-me" className="navmenu-link">
        WORK
      </Link>
      <Link smooth to="#techstack-container" className="navmenu-link">
        TECH STACK
      </Link>

      <Link smooth to="#contact-container" className="navmenu-link">
        CONTACT
      </Link>
    </div>
  );
};
export default NavMenu;
