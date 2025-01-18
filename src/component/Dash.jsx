import React from "react";
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>

      <div className="row">
        {/* Widget 1 */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">Total: 120</p>
              <button className="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <p className="card-text">Today: $1,240</p>
              <button className="btn btn-success btn-sm">View Report</button>
            </div>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Tasks</h5>
              <p className="card-text">Completed: 8/10</p>
              <button className="btn btn-warning btn-sm">Manage Tasks</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {/* Example Full-Width Section */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Activity Overview</h5>
              <p className="card-text">
                Here you can see an overview of the most recent activity on the platform.
              </p>
              <button className="btn btn-info btn-sm">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;