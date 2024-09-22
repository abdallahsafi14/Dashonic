import React from "react";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: [
    "Sun",
    "Mon",
    "Tue",
    "Wen",
    "Thu",
    "Fri",
    "Sat",
    "asd",
    "sadad",
    "asdsa",
    "sadas",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [15, 29, 30, 61, 46, 65, 40, 34, 56, 57, 23],
      backgroundColor: ["#299fe1"],
      borderColor: ["#299fe1"],
      borderWidth: 1,
      barPercentage: 0.9, // Adjust the percentage to make the bars wider
      categoryPercentage: 0.8,
    },
  ],
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
  maintainAspectRatio:false,
};

const MyBarChart = () => <Bar data={chartData} options={chartOptions} />;

export default MyBarChart;
