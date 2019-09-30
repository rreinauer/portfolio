import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './WorkMenu.css';

const WorkMenu = ({ show }) => {
  return (
    <div className="work-menu-main show">
      <div className="project" id="scavengart-box">
        <div className="project-content">
          <img className="project-img" src="splashPage.jpg" />
          <span className="title">scavengARt</span>
          <p className="work-desc">
            An AR-based scavenger hunt that guides users through New York art
            museums, prompting them to follow a series of clues to discover
            selected artworks.
          </p>
        </div>
        <a
          href="http://scavengealltheart.herokuapp.com"
          target="_blank"
          className="link"
        >
          LEARN MORE
        </a>
      </div>
      <div className="project" id="purple-parrots-box">
        <div className="project-content">
          <img className="project-img" src="purple-parrots.png" />
          <span className="title">Purple Parrots</span>
          <p className="work-desc">
            E-commerce web application allows users to customize and purchase
            ice cream creations.
          </p>
        </div>
        <a
          href="http://purple-parrots.herokuapp.com"
          target="_blank"
          className="link"
        >
          LEARN MORE
        </a>
      </div>
      <div className="project" id="scavengart-box">
        <div className="project-content">
          <img className="project-img" src="splashPage.jpg" />
          <span className="title">Blockchain Meetup</span>
          <p className="work-desc">
            Solo project finds central meeting point between multiple user
            locations
          </p>
        </div>
        <a
          href="http://scavengealltheart.herokuapp.com"
          target="_blank"
          className="link"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default WorkMenu;
