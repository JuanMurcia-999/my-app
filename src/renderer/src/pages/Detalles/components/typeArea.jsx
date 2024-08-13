import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleAreaChart = ({ data, width = 1500, height = 400, margin = { top: 10, right: 30, left: 0, bottom: 0 }, dataKey = "value", strokeColor = "#00f5ed", fillColor = "#00f5ed" }) => (
  <AreaChart
    width={width}
    height={height}
    data={data}
    margin={margin}
  >
    <CartesianGrid fill="red" fillOpacity={0.6}   strokeDasharray="4 1 2" />
    <XAxis dataKey="created_at"  tick={{stroke: 'red', strokeWidth: 1}} />
    <YAxis  />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey={dataKey} stroke={strokeColor} fill={fillColor} />

  </AreaChart>
);

export default SimpleAreaChart;
