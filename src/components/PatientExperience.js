import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';

const satisfactionData = [
  { name: 'Very Satisfied', value: 400 },
  { name: 'Satisfied', value: 300 },
  { name: 'Neutral', value: 200 },
  { name: 'Dissatisfied', value: 100 },
];

const PatientExperience = () => {
  return (
    <div>
      <h2>Patient Experience</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={satisfactionData} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientExperience;