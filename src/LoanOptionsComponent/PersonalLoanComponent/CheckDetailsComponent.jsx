import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";

const CheckDetailsComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Extracting data from location state
  const {
    loanPurpose,
    loanAmount,
    loanDuration,
    aadharNumber,
    street,
    city,
    annualIncome,
    creditScore,
    dateOfBirth,
    email,
    employmentStatus,
    needMoney,
    firstName,
    lastName,
    phoneNumber,
    education,
    rentHome,
    zipCode,
  } = state;

  return (
    <div className="loan-details-container">
      <h1 className="loan-details-title">Verify Your Loan Information</h1>
      <div className="loan-details-summary">
        <div className="loan-details-item">
          <strong className="data-label">Loan Purpose:</strong>
          <span className="data-value">{loanPurpose}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Loan Amount:</strong>
          <span className="data-value">₹{loanAmount}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Loan Duration:</strong>
          <span className="data-value">{loanDuration} years</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Aadhar Details:</strong>
          <span className="data-value">{aadharNumber}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Street Address:</strong>
          <span className="data-value">{street}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">City Name:</strong>
          <span className="data-value">{city}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Annual Income:</strong>
          <span className="data-value">₹{annualIncome}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Credit Score:</strong>
          <span className="data-value">{creditScore}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Date of Birth:</strong>
          <span className="data-value">{dateOfBirth}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Email ID:</strong>
          <span className="data-value">{email}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Employment Status:</strong>
          <span className="data-value">{employmentStatus}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Need funds by:</strong>
          <span className="data-value">{needMoney}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">First Name:</strong>
          <span className="data-value">{firstName}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Last Name:</strong>
          <span className="data-value">{lastName}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Phone Number:</strong>
          <span className="data-value">{phoneNumber}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Education:</strong>
          <span className="data-value">{education}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Rent or Own Home:</strong>
          <span className="data-value">{rentHome}</span>
        </div>
        <div className="loan-details-item">
          <strong className="data-label">Zip Code:</strong>
          <span className="data-value">{zipCode}</span>
        </div>
      </div>
      <div className="loan-details-actions" style={{width: '400px', margin: '0 auto'}}>
          <button type="submit" className="personal-loan-submit-button">
          Confirm and Apply
        </button>
      </div>
    </div>
  );
};

export default CheckDetailsComponent;
