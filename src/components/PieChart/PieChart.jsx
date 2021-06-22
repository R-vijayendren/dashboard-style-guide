import React from 'react';

import { Cell, Pie, PieChart } from 'recharts';

const PieCharts = ({
  data,
  width,
  height,
  radius,
  dataKey = 'value',
  colorOptions
}) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={radius}
        fill='#8884d8'
        dataKey={dataKey}
      >
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colorOptions[index % colorOptions.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieCharts;
