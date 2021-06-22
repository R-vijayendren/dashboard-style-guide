import React from 'react';
import Card from '../../components/Card/Card';

import PieChart from '../../components/PieChart/PieChart';
import TimeLineContainer from './TimeLineContainer';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartContainer = () => {
  return (
    <div className='card-pie-chart-container'>
      <Card>
        <div className='card-head__header'>ACTIVITIES</div>
        <div className='pie-chart-container'>
          <PieChart
            data={data}
            width={80}
            height={80}
            radius={40}
            colorOptions={COLORS}
          />
          <div className='pie-chart-info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dolorum rem tenetur quibusdam, blanditiis expedita voluptatem?
            Similique veritatis nihil molestiae!
          </div>
        </div>
      </Card>
      <Card>
        <div className='card-head__header'>ACTIVITIES</div>
        <TimeLineContainer />
      </Card>
    </div>
  );
};

export default PieChartContainer;
