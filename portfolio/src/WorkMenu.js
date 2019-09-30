import React from 'react';
import './WorkMenu.css';

const WorkMenu = ({ show }) => {
  const hideOrShow = show ? 'work-menu-main show' : 'work-menu-main hide';
  return (
    <div className={hideOrShow}>
      <div className="project" id="scavengart-box">
        <p>scavengARt</p>
        <img className="project-img" src="splashPage.jpg" />
      </div>
      <div className="project" id="scavengart-box">
        <p>Purple Parrots</p>
        <img className="project-img" src="splashPage.jpg" />
      </div>
    </div>
  );
};

export default WorkMenu;
