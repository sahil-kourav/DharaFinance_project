import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const CreditComponent = () => {
  const { state } = useLocation(); // Get state from the previous component
  const [creditScore, setCreditScore] = useState(""); // Track credit score
  const navigate = useNavigate();

  const handleSelection = (option) => {
    setCreditScore(option); // Set the selected credit score
    // Log the selected option for debugging
    console.log(`Selected credit score: ${option}`);

    // Pass the updated state with creditScore to the next page
    navigate('/employment-status', { state: { ...state, creditScore: option } });
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your estimated credit score?</h1>
      <div className="personal-loan-option-container">
        {["Excellent (720+)", "Good (680-719)", "Fair (640-679)", "Poor (639 and below)"].map((option, index) => (
          <div
            key={index}
            className="personal-loan-option"
            onClick={() => handleSelection(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="personal-loan-information">
        <p className="personal-loan-info-item">
          <MdLock size={20} /> Your information is securely encrypted
        </p>
        <p className="personal-loan-info-item">
          <MdSpeed size={20} /> No Impact to your credit score
        </p>
      </div>
    </div>
  );
};

export default CreditComponent;
