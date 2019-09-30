import React from 'react';

const WorkMenu = ({ show }) => {
  const hideOrShow = show ? 'show' : 'hide';
  return (
    <div className={hideOrShow}>
      <div className="project">scavengARt</div>
      <div className="project">Purple Parrots</div>
    </div>
  );
};

export default WorkMenu;
