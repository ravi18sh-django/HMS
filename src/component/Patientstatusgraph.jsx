import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering the required chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PatientStatusGraph = () => {
  // Data for the bar chart
  const data = {
    labels: ["Death", "Recovered"], // Categories for death and recovered patients
    datasets: [
      {
        label: "Patient Status", // Title for the graph
        data: [22, 48], // Example data: 30 deaths, 70 recovered. You can dynamically change these values.
        backgroundColor: ["#FF5733", "#2c51cd"], // Red for death, Green for recovered
        borderColor: ["#FF5733", "#2c51cd"], // Border color for each bar
        borderWidth: 1,
      },
    ],
  };

  // Options to customize the chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} patients`;
          },
        },
      },
    },
  };

  return (
    <div className="container text-center mt-5">
      <h3 className="mb-4">Patient Status: Death vs Recovered</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PatientStatusGraph;
