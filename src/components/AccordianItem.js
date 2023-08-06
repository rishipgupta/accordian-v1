import React from 'react';
import { useState } from 'react';

const AccordianItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className={isOpen ? 'item open' : 'item'} onClick={handleClick}>
      <p className='number'>{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className='content-box'>{text}</div>}
    </div>
  )
}

export default AccordianItem
