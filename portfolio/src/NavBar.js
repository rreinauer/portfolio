import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

const NavBar = ({ showMenu }) => {
  return (
    <div id="navbar">
      <div id="nav-left">
        <Link smooth to="#home">
          <FontAwesomeIcon icon={faHorse} className="icon" size="2x" />
        </Link>
        <Link className="nav-link" onClick={() => showMenu()}>
          WORK{' '}
          <FontAwesomeIcon icon={faChevronDown} className="menu-icon-arrow" />
        </Link>
      </div>

      <div id="nav-links">
        <Link smooth to="#about-me" className="nav-link">
          ABOUT ME
        </Link>

        <Link className="nav-link">CONTACT</Link>
      </div>
    </div>
  );
};

export default NavBar;
