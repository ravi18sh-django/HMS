import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MedicineRevenueGraph = () => {
  // Sample data for the graph
  const data = {
    labels: ['Medicine 1', 'Medicine 2', 'Medicine 3', 'Medicine 4', 'Medicine 5'], // Medicine names
    datasets: [
      {
        label: 'Revenue in USD',
        data: [500, 300, 800, 450, 700], // Revenue data
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Bar border color
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Medicine Revenue'
      }
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts from zero
      }
    }
  };

  return (
    <div className="medicine-revenue-graph" style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MedicineRevenueGraph;
