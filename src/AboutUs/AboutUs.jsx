import React from 'react';
import './AboutUs.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaChartLine, FaCoins, FaCheckCircle } from 'react-icons/fa';
import financeImage from '../Assets/insurance-img.webp';
import { Link } from 'react-router-dom';
import teamImage from '../Assets/teamimg.jpeg';

const AboutUs = () => {
  return (
    <Container className="about-us my-5 px-4">
      {/* "Who Are We?" Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image 
            src={financeImage} 
            alt="About Us" 
            fluid 
            className="rounded shadow-sm modern-image"
          />
        </Col>

        <Col md={6} className="text-section">
          <h2 className="modern-title">Who Are We?</h2>
          <p className="modern-subtitle">Empowering Your Financial Future</p>
          <p className="modern-description">
            At Dhara Finance, we empower individuals and businesses to shape their financial future with confidence. Our mission is to provide innovative and reliable financial solutions tailored to your needs.
          </p>
          <p className="modern-description">
            We leverage a deep understanding of the financial landscape to offer expert guidance and resources. Whether it’s planning, investing, or managing assets, our team is here to help you achieve stability and growth.
          </p>

          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <div className="feature modern-feature">
                <FaChartLine className="feature-icon text-primary" />
                <div>
                  <h5 className="feature-title">Versatile Financial Services</h5>
                  <p className="feature-description">We offer a range of financial solutions to meet diverse needs, from wealth management to digital investments.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-2">
              <div className="feature modern-feature">
                <FaCoins className="feature-icon text-primary" />
                <div>
                  <h5 className="feature-title">Innovative Strategies</h5>
                  <p className="feature-description">Our approach combines industry expertise with technology to create innovative financial pathways.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* "Why Choose Us?" Section */}
      <Container className="why-choose-us modern-section pt-0 p-4">
        <Row className="align-items-center">
          <Col md={6} className="order-md-2">
            <Image 
              src={teamImage} 
              alt="Our Team" 
              fluid 
              className="rounded shadow-sm modern-image"
            />
          </Col>

          <Col md={6} className="order-md-1 text-section">
            <h2 className="modern-title">Why Choose Dhara Finance?</h2>
            <p className="modern-description">
              At Dhara Finance, we are dedicated to empowering your financial journey. With our extensive experience and in-depth knowledge of financial solutions, we guide you in making informed decisions and securing your future.
            </p>
            
            <ul className="list-unstyled modern-list">
              <li className="feature-item">
                <FaCheckCircle className="feature-right-icon text-primary me-2" />
                Tailored financial strategies that prioritize your needs and goals.
              </li>
              <li className="feature-item">
                <FaCheckCircle className="feature-right-icon text-primary me-2" />
                Trusted advisors who bring transparency and clarity to financial planning.
              </li>
              <li className="feature-item">
                <FaCheckCircle className="feature-right-icon text-primary me-2" />
                Proven track record of helping clients achieve financial stability.
              </li>
            </ul>

            <Link to="/connect-us" className="btn btn-light mt-4 modern-button">Contect us 🚀</Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;