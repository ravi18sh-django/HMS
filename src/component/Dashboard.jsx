import React from "react";
import '../App.css'
import logo from '../assets/logo.png';
import InfoCards from "./Infocards";
import CircleGraph from "./Circlegraph";
import PatientStatusGraph from "./Patientstatusgraph";
import RecentPatientList from "./Recentpatientlist";

const Dashboard = () => {
    return (
        <div className="dashboard-container">

            <aside className="sidebar">
                <div className="logo-containers mb-4">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h3 className="text-decoration-underline">Menu</h3>
                <ul className="menu-list">
                    <li className="menu-item active">Dashboard</li>
                    <li className="menu-item">Patients</li>
                    <li className="menu-item">Clinic</li>
                    <li className="menu-item">Doctors</li>
                    <li className="menu-item">Inventory</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <InfoCards />
                <div className="row justify-content-between mb-4">
                    <div className="col-md-3 mb-4">
                        <CircleGraph />
                    </div>
                    <div className="col-md-8 mb-4">
                        <PatientStatusGraph />
                    </div>
                </div>
                {/* <div>
                    <MostSellingMedicines />
                </div> */}
                <RecentPatientList/>
            </main>
        </div>
    );
};

export default Dashboard;
