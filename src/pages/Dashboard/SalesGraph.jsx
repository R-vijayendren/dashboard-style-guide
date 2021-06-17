import React from 'react';
import Card from '../../components/Card/Card';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

import './Dashboard.scss';

import { SALES_GRAPH_DATA } from './constants';

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
      <div className='sales-graph'>
        <LineChart width={560} height={280} data={SALES_GRAPH_DATA}>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='0'>
              <stop offset='0%' stopColor='red' />
              <stop offset='25%' stopColor='orange' />
              <stop offset='50%' stopColor='blue' />
              <stop offset='75%' stopColor='green' />
              <stop offset='100%' stopColor='lightseagreen' />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeOpacity={0.5}
            horizontal={false}
            verticalPoints={[65, 146, 211, 276, 341, 406, 471, 554]}
            fill='#999'
            fillOpacity='0.08'
          />
          <XAxis
            dataKey='name'
            tickMargin={20}
            tickSize={0}
            padding={{ left: -10 }}
            tick={{ fill: '#888', fontSize: '11px' }}
            stroke='#d3d3d3'
          />
          <YAxis tickSize={0} tick={0} stroke='#d3d3d3' />
          <Line
            type='monotone'
            dataKey='customers'
            stroke='url(#gradient)'
            strokeWidth={5}
            dot={false}
            strokeLinecap='round'
          />
        </LineChart>
      </div>
    </Card>
  );
};

export default SalesGraph;
