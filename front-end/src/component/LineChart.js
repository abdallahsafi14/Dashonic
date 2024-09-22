import React from 'react';
import { Line } from 'react-chartjs-2';

const chartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "asd", "sadad", "asdsa", "sadas"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 45, 32, 54, 95],
    fill: true,
    borderColor: '#299fe1',
    backgroundColor: 'rgba(41, 159, 225, 0.1)',
    tension: 1, // Adjust the tension for curve
    cubicInterpolationMode: 'monotone', // Set the curve interpolation mode
  }]
};

const chartOptions = {
  scales: {
    x: {
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const MyCurvedLineChart = () => (
  <Line data={chartData} options={chartOptions} />
);

export default MyCurvedLineChart;
