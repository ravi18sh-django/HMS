import React from 'react';
import { Table, Button } from 'react-bootstrap';
import '../app.css'
const RecentPatientList = () => {
  // Sample data for recent patients
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      disease: 'Flu',
      admissionDate: '2025-01-10',
      contact: '+1 234 567 890',
      address: '123 Main St, City, Country',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      disease: 'Pneumonia',
      admissionDate: '2025-01-12',
      contact: '+1 234 567 891',
      address: '456 Elm St, City, Country',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 40,
      gender: 'Male',
      disease: 'COVID-19',
      admissionDate: '2025-01-14',
      contact: '+1 234 567 892',
      address: '789 Oak St, City, Country',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 35,
      gender: 'Female',
      disease: 'Asthma',
      admissionDate: '2025-01-15',
      contact: '+1 234 567 893',
      address: '101 Pine St, City, Country',
      status: 'Active',
    },
  ];

  return (
    <div className="recent-patient-list">
      <h3 className="mb-4">Recent Patients</h3>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Admission Date</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.disease}</td>
              <td>{patient.admissionDate}</td>
              <td>{patient.contact}</td>
              <td>{patient.address}</td>
              <td>
                <span
                  className={`badge ${
                    patient.status === 'Active' ? 'bg-success' : 'bg-secondary'
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td>
                <Button variant="info" size="sm">
                  View
                </Button>
                <Button variant="warning" size="sm" className="ms-2">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecentPatientList;
