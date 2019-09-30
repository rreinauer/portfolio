import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

const NavBar = ({ showMenu, show }) => {
  return (
    <div id="navbar">
      <div id="nav-left">
        <Link smooth to="#home">
          <div id="logo" className="icon" />
          {/* <img src="rr-logo.png" className="icon" /> */}
        </Link>
      </div>

      <div id="nav-links">
        <div id="nav-select">
          <FontAwesomeIcon icon={faBars} onClick={() => showMenu()} />
        </div>
        <Link smooth to="#about-me" className="nav-link">
          ABOUT ME
        </Link>
        <Link smooth to="#about-me" className="nav-link">
          WORK
        </Link>
        <Link smooth to="#techstack-container" className="nav-link">
          TECH STACK
        </Link>

        <Link smooth to="#contact-container" className="nav-link">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
