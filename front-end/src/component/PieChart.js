import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, PointElement } from 'chart.js';
import 'chart.js/auto';
Chart.register(PointElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [44, 25, 19],
    backgroundColor: [
      'rgb(3, 142, 220)',
      'rgb(223, 226, 230)',
      'rgb(95, 208, 243)'
    ],
    hoverOffset: 4
  }]
};

const chartOptions = {
  cutout: '70%', // Adjust to control the size of the inner circle
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

const MyDoughnutChart = () => (
  <div className='pie-container' >
    <Doughnut data={data} options={chartOptions} />
  </div>
);

export default MyDoughnutChart;
