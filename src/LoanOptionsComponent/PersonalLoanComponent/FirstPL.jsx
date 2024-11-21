import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const FirstPL = () => {
  const [loanAmount, setLoanAmount] = useState("");  // Track loan amount input
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default
    if (!loanAmount || isNaN(loanAmount) || loanAmount <= 0) {
      // Validate if loan amount is provided and is a positive number
      alert("Please enter a valid loan amount!");
      return;
    }
    navigate("/second");  // Redirect if validation passes
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's the loan amount you're looking for?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <input
          type="number"
          id="loanAmount"
          className="personal-loan-input"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="₹ Enter your desired loan amount"
          required
        />
        <button type="submit" className="personal-loan-submit-button">
          Continue
        </button>
      </form>

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

export default FirstPL;
