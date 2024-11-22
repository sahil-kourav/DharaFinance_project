import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";

const CheckDetailsComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Extracting data from location state
  const {
    loanPurpose,
    loanAmount,
    loanDuration,
    aadharNumber,
    creditScore,
    email,
    firstName,
    lastName,
    phoneNumber,
  } = state;

  // Check if credit score is poor and redirect accordingly
  const isPoorCredit = creditScore === "Poor (639 and below)";

  useEffect(() => {
    if (isPoorCredit) {
      navigate("/poor-credit"); // Navigate to poor-credit page if credit score is poor
    }
  }, [isPoorCredit, navigate]);

  // Default Interest Rate based on Credit Score
  const getInterestRate = () => {
    let rate = 10;
    if (creditScore === "Excellent (720+)") rate = 9;
    else if (creditScore === "Good (680-719)") rate = 10;
    else if (creditScore === "Fair (640-679)") rate = 12;
    else if (creditScore === "Poor (639 and below)") rate = 14;
    return rate;
  };

  // Loan Calculation Logic
  const calculateLoanDetails = () => {
    const principal = parseFloat(loanAmount);
    const duration = parseInt(loanDuration);
    const interestRate = getInterestRate();
    const processingFeeRate = 0.02; // Example: 2% processing fee

    // Monthly Interest Rate (Annual Rate / 12)
    const monthlyRate = (interestRate / 100) / 12;
    const months = duration * 12;

    // EMI Calculation Formula
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    // Total Repayment (EMI * Number of months)
    const totalRepaymentValue = emiValue * months;

    // Total Interest (Total Repayment - Principal)
    const totalInterestValue = totalRepaymentValue - principal;

    // Processing Fee (e.g., 2% of loan amount)
    const processingFee = principal * processingFeeRate;

    return {
      emi: emiValue.toFixed(2),
      totalRepayment: totalRepaymentValue.toFixed(2),
      totalInterest: totalInterestValue.toFixed(2),
      fees: processingFee.toFixed(2),
    };
  };

  // Calculate loan details
  const { emi, totalRepayment, totalInterest, fees } = calculateLoanDetails();

  // If the credit score is good, show the loan details
  if (!isPoorCredit) {
    return (
      <div className="loan-details-container">
        <div className="loan-details-header">
          <h1>Congratulations, {firstName} {lastName}!</h1>
          <h3>Your Loan is Approved and Underway!</h3>
        </div>

        <div className="loan-summary">
          <h2>Loan Application Details</h2>
          <div className="loan-details">
            <div className="loan-item">
              <strong>Loan Purpose: <span>{loanPurpose}</span></strong>
            </div>
            <div className="loan-item">
              <strong>Aadhar Number:  <span> {aadharNumber}</span></strong>   
            </div>
            <div className="loan-item">
              <strong>Email: <span> {email}</span></strong>
            </div>
            <div className="loan-item">
              <strong>Phone Number: <span>{ phoneNumber}</span></strong>
            </div>
            <div className="loan-item">
              <strong>Loan Amount: <span>₹{loanAmount}</span></strong>
            </div>
            <div className="loan-item">
              <strong>Loan Duration: <span> {loanDuration} years</span></strong>
            </div>
            <div className="loan-item">
              <strong>Credit Score: <span> {creditScore}</span></strong>
            </div>
          </div>
        </div>

        <div className="loan-calculations">
          <h2>Loan Summary & Charges</h2>
          <div className="calculation-item">
            <strong>Monthly EMI:</strong>
            <span>₹{emi}</span>
          </div>
          <div className="calculation-item">
            <strong>Total Repayment:</strong>
            <span>₹{totalRepayment}</span>
          </div>
          <div className="calculation-item">
            <strong>Total Interest:</strong>
            <span>₹{totalInterest}</span>
          </div>
          <div className="calculation-item">
            <strong>Processing Fees:</strong>
            <span>₹{fees}</span>
          </div>
        </div>

        <div className="loan-actions">
          <button
            className="apply-button"
            onClick={() => navigate("/")} // Navigate to the homepage when clicked
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default CheckDetailsComponent;
