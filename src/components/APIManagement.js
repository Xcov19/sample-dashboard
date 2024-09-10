import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
const apiUsageData = [
  { name: 'Search', usage: 5000 },
  { name: 'Consultation', usage: 3000 },
  { name: 'Care Journey', usage: 2000 },
  { name: 'Learning', usage: 1000 },
];

const APIManagement = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>API Usage Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={apiUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>API Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <button className="btn">Test Search/Consultation API</button>
            <button className="btn">Test Care Journey API</button>
            <button className="btn">Test Patient Learning API</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default APIManagement;