"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip } from 'recharts';
import React from 'react';
import { Area, Bar, CartesianGrid, Legend, Line, Pie, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { AreaChart, BarChart, LineChart, PieChart } from 'recharts';

// DEMO DATA
const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400, products: 24 },
  { month: 'Feb', sales: 3000, profit: 1398, products: 22 },
  { month: 'Mar', sales: 2000, profit: 9800, products: 18 },
  { month: 'Apr', sales: 2780, profit: 3908, products: 29 },
  { month: 'May', sales: 1890, profit: 4800, products: 20 },
  { month: 'Jun', sales: 2390, profit: 3800, products: 28 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Software', value: 300 },
  { name: 'Services', value: 300 },
  { name: 'Hardware', value: 200 },
];

const Dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Products by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Products</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="products" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
