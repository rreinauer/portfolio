import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id="contact-container">
      <div id="contact">
        <FontAwesomeIcon
          className="contact-icon"
          icon={faLinkedin}
          size="2x"
        ></FontAwesomeIcon>
      </div>
      <div id="contact">
        <FontAwesomeIcon
          className="contact-icon"
          icon={faGithub}
          size="2x"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Contact;
