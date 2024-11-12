import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import './ServicesPage.css';

import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1 className="services-heading">Our Services</h1>
        <p className="services-sub-heading">Speedy loans with flexible options tailored to your needs.</p>
      </header>
      
      <Row className="mb-4">
        <Col md={6} lg={4}>
          <ServiceCard
            title="Vehicle Finance"
            description="Finance options for all vehicle categories with quick approvals and easy documentation."
          />
        </Col>
        <Col md={6} lg={4}>
          <ServiceCard
            title="Quick Approval"
            description="Loan approvals within 48 hours, ensuring a smooth and fast process."
          />
        </Col>
        <Col md={6} lg={4}>
          <ServiceCard
            title="Flexible Repayment"
            description="Choose repayment options ranging from 12 to 36 months, tailored to your financial goals."
          />
        </Col>
        <Col md={6} lg={4}>
          <ServiceCard
            title="Women Customers"
            description="Special rates and faster approvals for women customers."
          />
        </Col>
        <Col md={6} lg={4}>
          <ServiceCard
            title="Maximum Finance"
            description="Get up to 75% of the assessed vehicle value financed."
          />
        </Col>
        <Col md={6} lg={4}>
          <ServiceCard
            title="Customer Service"
            description="Our trained and empowered team is ready to assist you at every step."
          />
        </Col>
      </Row>

      <div className="text-center mt-5">
        {/* <Button variant="primary" size="lg">Contect Us 🚀</Button> */}
        <Link to="/connect-us" className="btn btn-light mt-4 modern-button">Contect Us 🚀</Link>
        <p className="mt-3">Contact us today to learn more about our services or apply online for a quick approval!</p>
      </div>
    </Container>
  );
};

export default ServicePage;
