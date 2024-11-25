import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const PersonalLoanComponent = () => {
  const { state } = useLocation();
  const [loanPurpose, setLoanPurpose] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!loanPurpose) {
      alert("Please select a loan purpose!");
      return;
    }
    navigate("/loan-amount", { state: { ...state, loanPurpose } });
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subtitle">Explore Your Loan Eligibility Journey</h2>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">Select a loan purpose?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <label htmlFor="loanPurpose" className="personal-loan-label">
          Select a Loan Purpose
        </label>
        <select
          id="loanPurpose"
          className="personal-loan-dropdown"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          <option value="Debt Consolidation">Debt Consolidation</option>
          <option value="Personal Use">Personal Use</option>
          <option value="Pay Off Credit Cards">Pay Off Credit Cards</option>
          <option value="Home Improvement">Home Improvement</option>
          <option value="Home Buying">Home Buying</option>
          <option value="Major Purchase">Major Purchase</option>
          <option value="Car Financing">Car Financing</option>
          <option value="Business">Business</option>
          <option value="Vacation">Vacation</option>
          <option value="Wedding Expenses">Wedding Expenses</option>
          <option value="Moving and Relocation">Moving and Relocation</option>
          <option value="Medical Expenses">Medical Expenses</option>
          <option value="Car Repair">Car Repair</option>
          <option value="Everyday Bills">Everyday Bills</option>
          <option value="Other">Other</option>
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

export default PersonalLoanComponent;
