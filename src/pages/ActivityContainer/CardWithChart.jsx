import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import Card from '../../components/Card/Card';

import { CUSTOMER_USER_DATA } from '../Dashboard/constants';

const CardWithChart = () => {
  return (
    <Card className='card-chart-container'>
      <div className='card-head__header'>ANALYTICS</div>
      <div className='chart-container'>
        <BarChart width={530} height={350} data={CUSTOMER_USER_DATA}>
          <XAxis
            dataKey='name'
            tickMargin={20}
            axisLine={false}
            tickSize={0}
            tick={{ fill: '#888', fontSize: '12px' }}
          />
          <YAxis
            tick={{ fill: '#888', fontSize: '12px' }}
            tickMargin={20}
            tickSize={0}
            interval={0}
            axisLine={false}
            ticks={[100, 300, 500, 700, 900, 1100, 1300]}
          />
          <Legend
            width={80}
            wrapperStyle={{
              top: 0,
              left: 100,
              backgroundColor: '#fff',
              border: '1px solid #d3d3d3',
              borderRadius: 1,
              padding: '.5rem',
              fontSize: '9px'
            }}
            align='left'
          />
          <Bar dataKey='customers' stackId='a' fill='#2541b2' />
          <Bar dataKey='users' stackId='a' fill='#1768ac' />
        </BarChart>
      </div>
    </Card>
  );
};

export default CardWithChart;
