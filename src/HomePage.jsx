import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import dharafinance from "./Assets/dhara finance.png"
import ft from "./Assets/ft.png";
import mc from "./Assets/mc.png";
import wsj from "./Assets/wsj.png";
import mint from "./Assets/mint.jpg";
import mw from "./Assets/mw.png";
import { FaHome, FaStar, FaCalculator, FaChartLine } from 'react-icons/fa'; // Import icons
import cnbc from "./Assets/cnbc.jpg";
import whatdoesltdowoman from "./Assets/what-does-lt-do-woman.jpeg";
import { FaCar,FaCreditCard, FaMoneyBillWave, FaUniversity, FaShieldAlt } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="code-container">
      {/* Banner Section */}
      <section className="banner-section">
      <div className="banner-header">
        <h1 className="banner-title">
          Why do millions of people trust Dhara Finance?
        </h1>
      </div>

      <div className="banner-content">
        {/* Image Section */}
        <div className="image-container">
          <figure className="image-wrapper">
            <img
              src={dharafinance}
              alt="CrediNest application preview"
              className="banner-image"
            />
          </figure>
        </div>

        {/* Content Section */}
        <div className="content-container">
          <article className="content-box">
            {/* Security Section */}
            <div className="content-sec">
              <h2 className="content-sec-title">Security</h2>
              <p>
              Responsive customer service ensures users feel supported, making it easy to report issues and get timely help. Positive user 
              experiences and proven reliability build trust in Dhara Finance.
              </p>
            </div>

            {/* Savings Section */}
            <div className="content-sec">
              <h2 className="content-sec-title">Savings</h2>
              <p>
              Outstanding customer support and educational resources help customers make smart decisions about their savings. Robust security measures safeguard every transaction, protecting against fraud.
              </p>
            </div>

            {/* Support Section */}
            <div className="content-sec">
              <h2 className="content-sec-title">Support</h2>
              <p>
              Round-the-clock support teams are ready to assist customers with any questions or concerns. Dhara Finance's active role in community initiatives reflects its dedication to customer well-being beyond just financial services.              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
      <hr className="divider" />


{/* ------ publication section ------ */}
  <div className="publication-section py-3 mb-4">
      <div className="container text-center">

        <p className="publication-text">
          Publications featuring <strong>Dhara Finance</strong> experts this month
        </p>

        <div className="row justify-content-center align-items-center logos-container">
          <div className="col-auto">
            <img src={cnbc} alt="cnbc" className="publication-logo entrepreneur" />
          </div>
          <div className="col-auto">
            <img src={ft} alt="Financial Times" className="publication-logo nytimes" />
          </div>
          <div className="col-auto">
            <img src={mw} alt="Market watch" className="publication-logo cnn" />
          </div>
          <div className="col-auto">
            <img src={mc} alt="Moneycontrol" className="publication-logo usatoday" />
          </div>
          <div className="col-auto">
            <img src={wsj} alt="The Wall Street Journal" className="publication-logo forbes" />
          </div>
          <div className="col-auto">
            <img src={mint} alt="mint" className="publication-logo abc"/>
          </div>
        </div>
      </div>
    </div>

   {/* ----- featured section -----  */}
   <section className="featured-rates-section">
  <div className="featured-container">
    <h2 className="featured-title">Featured rates on our network</h2>

    <div className="rate-cards-wrapper">
      {/* First Rate Card */}
      <div className="rate-card">
        <h3 className="rate-type">Mortgage</h3>
        <p className="rate-desc">APR rates as low as</p>
        <h2 className="rate-value">7.27%</h2>
        <p className="rate-term">5/1 ARM<br />$200,000 LOAN</p>
      </div>

      {/* Second Rate Card */}
      <div className="rate-card">
        <h3 className="rate-type">Home Refinance</h3>
        <p className="rate-desc">APR rates as low as</p>
        <h2 className="rate-value">6.54%</h2>
        <p className="rate-term">30 YEAR FIXED<br />$200,000 LOAN</p>
      </div>

      {/* Third Rate Card */}
      <div className="rate-card">
        <h3 className="rate-type">Personal Loans</h3>
        <p className="rate-desc">APR rates as low as</p>
        <h2 className="rate-value">7.49%</h2>
        <p className="rate-term">3 YEAR<br />$20,000 LOAN</p>
      </div>

      {/* Fourth Rate Card */}
      <div className="rate-card">
        <h3 className="rate-type">HELOC</h3>
        <p className="rate-desc">APR rates as low as</p>
        <h2 className="rate-value">6.50%</h2>
        <p className="rate-term">30 YEAR FIXED<br />$50,000 LOAN</p>
      </div>
    </div>

    <p className="disclaimer">
      Rates above may change at lender discretion and may not be available at the time of loan commitment or lock-in.
    </p>
  </div>
</section>




{/* ----- financial journey section ----- */}

<div className="financial-journey-container">
  <h2 className="financial-heading">Tools to start your financial journey</h2>
  <div className="content-wrapper">
    <div className="financial-outer-boxes">
      <div className="financial-inside-box">
        <FaHome className="financial-icon" />
        <h3>Mortgage Rates</h3>
        <p>Comparing to find your lowest rate could save you thousands.</p>
        <a href="#" className="financial-box-link">Compare Rates</a>
      </div>
      <div className="financial-inside-box">
        <FaStar className="financial-icon" />
        <h3>Ratings & Reviews</h3>
        <p>Read real reviews about the lenders on our network.</p>
        <a href="#" className="financial-box-link">Read lender reviews</a>
      </div>
      <div className="financial-inside-box">
        <FaCalculator className="financial-icon" />
        <h3>Payment Calculator</h3>
        <p>Figure out your estimated payments the easy way.</p>
        <a href="#" className="financial-box-link">Mortgage Calculator</a>
      </div>
      <div className="financial-inside-box">
        <FaChartLine className="financial-icon" />
        <h3>Credit Score</h3>
        <p>Get actionable insights to help you boost your score.</p>
        <a href="#" className="financial-box-link">Get your credit score</a>
      </div>
    </div>
  </div>
</div>


    {/* ----- What does dhara finance do? section ----- */}
    <div className="custom-container">
  <div className="custom-primary-section">
    <h2 className="custom-text-title">What does Dhara Finance do?</h2>
    <p className="custom-text-p">
      We make sure that our customers are offered speedy loans with flexible repayment options. 
      We also provide loans to women customers at special rates and fast approvals. 
      We provide fast and easy loans for the purchase of new & used cars, utility vehicles, 
      three-wheelers, and commercial vehicles.
    </p>
    <div className="custom-lists">
      <ul>
        <li><FaHome /> Mortgage Refinance</li>
        <li><FaMoneyBillWave /> Home Equity Loans</li>
        <li><FaCreditCard /> Credit Cards</li>
        <li><FaCalculator /> Mortgage Calculator</li>
        <li><FaMoneyBillWave /> Personal Loans</li>
      </ul>
      <ul>
        <li><FaUniversity /> Student Loan Refinance</li>
        <li><FaCar /> Auto Loans</li>
        <li><FaShieldAlt /> Insurance</li>
        <li><FaCreditCard /> Free Credit Score</li>
      </ul>
    </div>
  </div>
  <div className="custom-secondary-section">
    <img
      className="custom-img"
      src={whatdoesltdowoman}
      alt="Illustration of Dhara Finance's services"
    />
  </div>
</div>

  </div>
  );
};

export default HomePage;
