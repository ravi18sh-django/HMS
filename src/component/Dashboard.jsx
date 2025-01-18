import React from "react";
import '../App.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">Menu</h3>
        <ul className="menu-list">
          <li className="menu-item">Dashboard</li>
          <li className="menu-item">Users</li>
          <li className="menu-item">Settings</li>
          <li className="menu-item">Reports</li>
          <li className="menu-item">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Your Dashboard</h1>
        <p>This is the main content area where you can display widgets or data.</p>
        <div className="widget-container">
          <div className="widget">Widget 1</div>
          <div className="widget">Widget 2</div>
          <div className="widget">Widget 3</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
