import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import appStoreImg from '../Assets/ap.png';
import googlePlayImg from '../Assets/gp2.jpg';
import { Router } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer align-center bg-dark text-light py-5">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-us" className="text-light">About Dhara Finance</Link></li>
              <li><a href="#" className="text-light">Careers</a></li>
              <li><Link to="/connect-us" className="text-light">Contect us</Link></li>
              <li><a href="#" className="text-light">Investors</a></li>
              <li><a href="#" className="text-light">Partner with Us</a></li>
              <li><a href="#" className="text-light">Feedback</a></li>
              <li><a href="#" className="text-light">News & Events</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Legal Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Overview</a></li>
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Your Privacy Choices</a></li>
              <li><a href="#" className="text-light">Security</a></li>
              <li><a href="#" className="text-light">Terms of Use</a></li>
              <li><a href="#" className="text-light">Licenses & Disclosures</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com/dhara.motor.3/" className="mt-2 mb-1 text-light"><i className="footer-icon bi bi-facebook"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FDharaMotorFLtd" className="mt-2 mb-1 text-light"><i className="footer-icon bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/dharafinanceindore/" className="mt-2 mb-1 text-light"><i className="footer-icon bi bi-instagram"></i></a>
              <a href="https://in.linkedin.com/company/dhara-finance" className="mt-2 mb-1 text-light"><i className="footer-icon bi bi-linkedin"></i></a>
            </div>

            <h6 className="mt-3">Download Our App</h6>
            <div className="d-flex mt-3">
            <img src={appStoreImg} alt="App Store" className="img-fluid me-1" />
            <img src={googlePlayImg} alt="Google Play" className="img-fluid img-2 " />
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
