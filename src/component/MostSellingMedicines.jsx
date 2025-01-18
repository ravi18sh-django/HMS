import React from "react";
import '../App.css'

import { Card, Col, Row } from 'react-bootstrap';


// Sample data for the medicines
const medicines = [
    { name: "Paracetamol", price: 50, quantitySold: 150 },
    { name: "Ibuprofen", price: 75, quantitySold: 120 },
    { name: "Amoxicillin", price: 100, quantitySold: 90 },
    { name: "Aspirin", price: 60, quantitySold: 110 },
    { name: "Vitamin C", price: 30, quantitySold: 200 },
    { name: "Cough Syrup", price: 45, quantitySold: 130 },
    { name: "Cetirizine", price: 50, quantitySold: 140 },
    { name: "Omeprazole", price: 120, quantitySold: 85 },
    { name: "Metformin", price: 150, quantitySold: 95 },
    { name: "Loratadine", price: 60, quantitySold: 160 }
];

const MostSellingMedicines = () => {
    return (
        <div className="medicines-container">
            <h2 className="text-center mb-4">Top 10 Most Selling Medicines</h2>
            <Row className="g-4">
                {medicines.map((medicine, index) => (
                    <Col key={index} xs={12} md={6} lg={4} xl={3}>
                        <Card className="medicine-card shadow-sm border-light rounded">
                            <Card.Body>
                                <Card.Title>{medicine.name}</Card.Title>
                                <Card.Text>
                                    <strong>Price:</strong> ₹{medicine.price} <br />
                                    <strong>Quantity Sold:</strong> {medicine.quantitySold}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                Best Seller
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MostSellingMedicines;
