import React from 'react';
import Card from '../../components/Card/Card';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

import './Dashboard.scss';

import { SALES_GRAPH_DATA } from './constants';

import useWindowSize from '../../hooks/useWindowSize';

const SalesGraph = () => {
  const windowSize = useWindowSize();
  return (
    <Card>
      <div className='sales-content'>
        <div className='sales-header'>Sales in 2020</div>
        <div className='sales-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae
          itaque cupiditate optio, voluptas doloremque ad, hic vel veniam eum
          magni praesentium atque architecto unde mollitia porro modi, corporis
          ex!
        </div>
      </div>
      <div className='sales-graph'>
        <LineChart
          width={windowSize.width < 769 ? windowSize.width - 50 : 560}
          height={280}
          data={SALES_GRAPH_DATA}
          margin={{ left: -35, bottom: 10 }}
        >
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='0'>
              <stop offset='0%' stopColor='red' />
              <stop offset='25%' stopColor='orange' />
              <stop offset='50%' stopColor='blue' />
              <stop offset='75%' stopColor='green' />
              <stop offset='100%' stopColor='violet' />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeOpacity={0.5}
            horizontal={false}
            verticalPoints={[65, 117, 180, 242, 304, 368, 431, 494, 554]}
            fill='#999'
            fillOpacity='0.07'
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
            strokeWidth={6}
            dot={false}
            strokeLinecap='round'
          />
        </LineChart>
      </div>
    </Card>
  );
};

export default SalesGraph;
