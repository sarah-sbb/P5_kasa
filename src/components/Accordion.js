import React from 'react';

const Accordion = ({ id, title, content }) => {
  return (
    <div className="accordion-container">
      <input type="checkbox" id={id} className="accordion-toggle"/>
      <label htmlFor={id} className="accordion-header">
        <p>{title}</p>
        <i className="fa-solid fa-angle-up"></i>
      </label>
      <div className="accordion-content">
        {content}
      </div>
    </div>
  );
};

export default Accordion;
