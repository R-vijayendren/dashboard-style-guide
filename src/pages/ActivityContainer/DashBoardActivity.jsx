import React from 'react';

import './DashBoardActivity.scss';

import CardWithChart from './CardWithChart';
import PieChartContainer from './PieChartContainer';

const DashBoardActivity = () => {
  return (
    <div className='card-activity-container'>
      <PieChartContainer />
      <CardWithChart />
    </div>
  );
};

export default DashBoardActivity;
