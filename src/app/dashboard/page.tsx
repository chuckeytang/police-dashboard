"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<{ name: string, value: number }[]>([]);

  useEffect(() => {
    axios.get('/api/getData').then(response => {
      setChartData(response.data);
    });
  }, []);

  const option = {
    xAxis: {
      type: 'category',
      data: chartData.map(item => item.name),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: chartData.map(item => item.value),
        type: 'bar',
      },
    ],
  };

  return (
    <div>
      <h1>Data Dashboard</h1>
      <ReactECharts option={option} />
    </div>
  );
};

export default Dashboard;
