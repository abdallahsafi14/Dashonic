import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CombinedChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
        ],
        datasets: [
          {
            label: "Bar Dataset 1",
            data: [10, 13, 12, 20, 16, 15, 22, 23, 22, 17, 23],
            backgroundColor: "rgba(95, 208, 243, 0.85)",
            barPercentage: 0.5,
            categoryPercentage: 0.8,
          },
          {
            label: "Bar Dataset 2",
            data: [20, 23, 22, 30, 26, 25, 32, 33, 32, 27, 33],
            backgroundColor: "rgb(3, 142, 220)",
            barPercentage: 0.5,
            categoryPercentage: 0.8,
          },
          {
            label: "Line Dataset",
            type: "line",
            data: [10, 13, 12, 20, 16, 15, 22, 23, 22, 17, 23],
            borderColor: "#3f8542",
            tension: 0.1,
            fill: false,
          },
          {
            label: "Curve Dataset",
            type: "line",
            data: [55, 62, 70, 50, 65, 40, 55, 42, 55, 64, 50, 45],
            borderColor: "rgba(245,245, 235, 0.0)",
            backgroundColor: "rgba(245, 245, 235, 0.1)",
            lineTension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        indexAxis: "x",
        responsive: true,
        maintainAspectRatio: false,
       
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up the chart on component unmount
      }
    };
  }, []);

  return (
    <div className="mixed-chart d-flex justify-content-center " style={{}}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default CombinedChart;
