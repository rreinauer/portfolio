import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
    </div>
  );
};

export default Contact;
