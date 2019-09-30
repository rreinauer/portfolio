import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './WorkMenu.css';

const WorkMenu = ({ show }) => {
  const hideOrShow = show ? 'work-menu-main show' : 'work-menu-main hide';
  return (
    <div className={hideOrShow}>
      <Link smooth to="#scavengart" className="project-link">
        <div className="project" id="scavengart-box">
          <img className="project-img" src="splashPage.jpg" />
          <span className="link">scavengARt</span>
        </div>
      </Link>
      <div className="project" id="purple-parrots-box">
        <img className="project-img" src="purple-parrots.png" />
        <span className="link">Purple Parrots</span>
      </div>
      <div className="project" id="scavengart-box">
        <img className="project-img" src="splashPage.jpg" />
        <span className="link">Purple Parrots</span>
      </div>
    </div>
  );
};

export default WorkMenu;
