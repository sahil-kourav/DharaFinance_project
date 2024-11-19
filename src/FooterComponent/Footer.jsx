import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import appStoreImg from '../Assets/ap.png';
import googlePlayImg from '../Assets/gp2.jpg';
import { Router } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-heading">About Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-us">About Dhara Finance</Link></li>
              <li><a href="#">Careers</a></li>
              <li><Link to="/connect-us">Contect us</Link></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">News & Events</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Legal Information</h5>
            <ul className="list-unstyled">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Your Privacy Choices</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Licenses & Disclosures</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="footer-icons-box">
              <a href="https://www.facebook.com/dhara.motor.3/"><i className="footer-icon bi bi-facebook"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FDharaMotorFLtd"><i className="footer-icon bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/dharafinanceindore/"><i className="footer-icon bi bi-instagram"></i></a>
              <a href="https://in.linkedin.com/company/dhara-finance"><i className="footer-icon bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className='text-secondary'>© 2024 Dhara Finance. All Rights Reserved.</p>
          <p className='text-secondary'>Online Security: <span className='text-light'>Protect Against Fraud</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
