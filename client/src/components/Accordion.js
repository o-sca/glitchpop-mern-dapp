import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="faq-question-item" onClick={ () => { setIsActive(!isActive) } }>
      <div>{title}</div>
      <button>{isActive ? '-' : '+'}</button>
    </div>
    {isActive && <div style={{marginBottom: "36px"}}>{content}</div>}
    <hr />
    </>
  );
};

export default Accordion;