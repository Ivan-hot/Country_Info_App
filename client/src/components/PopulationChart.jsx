import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ populationData }) => {
  const years = populationData.map(item => item.year);
  const population = populationData.map(item => item.value);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population Over Time',
        data: population,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h3>Population Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default PopulationChart;
