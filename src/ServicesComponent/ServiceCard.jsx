import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, description }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
