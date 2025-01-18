import React from 'react';
import { FaUsers, FaClinicMedical, FaStethoscope, FaBoxes } from 'react-icons/fa'; // Importing icons

const InfoCards = () => {
  return (
    <div className="row g-4">
      {/* Card for Patients */}
      <div className="col-md-3">
        <div className="card shadow-sm border-0 bg-info text-white">
          <div className="card-body text-center">
            <FaUsers size={40} />
            <h5 className="card-title mt-3">Patients</h5>
            <p className="card-text">548</p>
          </div>
        </div>
      </div>

      {/* Card for Clinic */}
      <div className="col-md-3">
        <div className="card shadow-sm border-0 bg-success text-white">
          <div className="card-body text-center">
            <FaClinicMedical size={40} />
            <h5 className="card-title mt-3">Clinic</h5>
            <p className="card-text">22</p>
          </div>
        </div>
      </div>

      {/* Card for Doctors */}
      <div className="col-md-3">
        <div className="card shadow-sm border-0 bg-warning text-white">
          <div className="card-body text-center">
            <FaStethoscope size={40} />
            <h5 className="card-title mt-3">Doctors</h5>
            <p className="card-text">253</p>
          </div>
        </div>
      </div>

      {/* Card for Inventory */}
      <div className="col-md-3">
        <div className="card shadow-sm border-0 bg-danger text-white">
          <div className="card-body text-center">
            <FaBoxes size={40} />
            <h5 className="card-title mt-3">Inventory</h5>
            <p className="card-text">+28%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
