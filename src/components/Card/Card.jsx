import React from 'react';
import './Card.scss';

const Card = ({ children }) => {
  return <div className='cardWrapper'>{children}</div>;
};

export default Card;
