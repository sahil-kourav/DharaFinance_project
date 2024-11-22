
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const AnnualIncomeComponent = () => {
  const { state } = useLocation();
  const [annualIncome, setAnnualIncome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!annualIncome) {
      alert("Please enter a valid annual income!");
      return;
    }
    navigate('/qualification', { state: { ...state, annualIncome } });
  };
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What’s your annual income?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <label htmlFor="annualIncome" className="personal-loan-label">
          Annual Income
        </label>
        <select
          id="annualIncome"
          className="personal-loan-dropdown"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
          required
        >
          <option value="">Kindly select an option.</option>
          <option value="Above 25 Lakh">Above ₹25 Lakh</option>
          <option value="15 Lakh to 24.99 Lakh">₹15 Lakh - ₹24.99 Lakh</option>
          <option value="10 Lakh to 14.99 Lakh">₹10 Lakh - ₹14.99 Lakh</option>
          <option value="8 Lakh to 9.99 Lakh">₹8 Lakh - ₹9.99 Lakh</option>
          <option value="5 Lakh to 7.99 Lakh">₹5 Lakh - ₹7.99 Lakh</option>
          <option value="3 Lakh to 4.99 Lakh">₹3 Lakh - ₹4.99 Lakh</option>
          <option value="2 Lakh to 2.99 Lakh">₹2 Lakh - ₹2.99 Lakh</option>
          <option value="Below 2 Lakh">Below ₹2 Lakh</option>

        </select>

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
export default AnnualIncomeComponent;

