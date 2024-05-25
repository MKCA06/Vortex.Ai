import React from 'react';
import { Chart } from 'react-google-charts';

const BarChart = () => {
  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#2e60b0"],
    ["Silver", 10.49, "#53c9a4"],
    ["Gold", 19.30, "#2e60b0"],
    ["Platinum", 21.45, "#53c9a4"],
    ["Iron", 7.87, "#2e60b0"],
    ["Nickel", 8.90, "#53c9a4"],
    ["Lead", 11.34, "#2e60b0"],
    ["Titanium", 4.51, "#53c9a4"],
    ["Zinc", 7.14, "#2e60b0"],
    ["Magnesium", 1.74, "#53c9a4"],
    ["Iron", 7.87, "#2e60b0"],
    ["Nickel", 8.90, "#53c9a4"],
    ["Lead", 11.34, "#2e60b0"],
    ["Titanium", 4.51, "#53c9a4"],
    ["Zinc", 7.14, "#2e60b0"],
    ["Magnesium", 1.74, "#53c9a4"],
  ];

  const options = {
    // title: "Density of Various Metals, in g/cm^3",
    chartArea: { width: "80%" },
    hAxis: {
      title: "Density",
      minValue: 0,
    },
    vAxis: {
      title: "Element",
    },
    legend: { position: "none" },
    backgroundColor: "#333",
    colors: ["#2e60b0", "#53c9a4"],
  };

  return (
    <div className="chart-container">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
