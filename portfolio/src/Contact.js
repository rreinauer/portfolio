import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-container">
        <a href="https://linkedin.com/in/rachel-reinauer" target="_blank">
          <FontAwesomeIcon
            className="contact-icon"
            icon={faLinkedin}
            size="2x"
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/rreinauer" target="_blank">
          <FontAwesomeIcon
            className="contact-icon"
            icon={faGithub}
            size="2x"
          ></FontAwesomeIcon>
        </a>
      </div>
      <span>rereinauer@gmail.com</span>
    </div>
  );
};

export default Contact;
