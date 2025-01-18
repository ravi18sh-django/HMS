import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const CircleGraph = () => {
  // Data for the chart
  const data = {
    labels: ["Emergency Patients", "Enrolled Patients"], // These can be renamed as needed
    datasets: [
      {
        data: [40, 60], // Example data: 40 emergency, 60 enrolled. You can dynamically update this.
        backgroundColor: ["#FF5733", "#2c51cd"], // Red for emergency, Green for enrolled
        borderWidth: 1,
      },
    ],
  };

  // Options to style the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="container text-center mt-5">
      <h3 className="mb-4">Patient Enrollment Status</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircleGraph;
