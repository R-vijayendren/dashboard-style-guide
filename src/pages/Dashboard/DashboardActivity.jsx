import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import Card from '../../components/Card/Card';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DashboardActivity = () => {
  return (
    <div className='card-pie-chart-container'>
      <Card>
        <div className='card-head__header'>ACTIVITIES</div>
        <div className='pie-chart-container'>
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              labelLine={false}
              outerRadius={50}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorum rem tenetur quibusdam, blanditiis expedita voluptatem?
          Similique veritatis nihil molestiae!
        </div>
      </Card>
      <Card>
        <div className='card-head__header'>ACTIVITIES</div>
        <div className='pie-chart-container'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorum rem tenetur quibusdam, blanditiis expedita voluptatem?
          Similique veritatis nihil molestiae!
        </div>
      </Card>
    </div>
  );
};

export default DashboardActivity;
