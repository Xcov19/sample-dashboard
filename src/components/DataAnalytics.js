import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';

const predictiveData = [
  { month: 'Jan', actual: 1000, predicted: 1050 },
  { month: 'Feb', actual: 1200, predicted: 1180 },
  { month: 'Mar', actual: 1100, predicted: 1150 },
  { month: 'Apr', actual: 1300, predicted: 1280 },
];

const DataAnalytics = () => {
  return (
    <div>
      <h2>Data Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={predictiveData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="actual" stroke="#8884d8" />
          <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataAnalytics;