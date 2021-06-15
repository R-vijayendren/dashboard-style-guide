import React from 'react';
import Card from '../../components/Card/Card';

import './Dashboard.scss';

const SalesGraph = () => {
  return (
    <Card>
      <div className='sales-content'>
        <div className='sales-header'>Sales in 2020</div>
        <div className='sales-description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          minus fugit provident cupiditate voluptas similique exercitationem
          expedita maxime vel aut.
        </div>
      </div>
      <div className='sales-graph'></div>
    </Card>
  );
};

export default SalesGraph;
