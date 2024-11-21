
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const ThirdPL = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
      // Redirect to the next page (in this case, /second)
      navigate('/fourth');
    };
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your date of birth?</h1>
      <div className="personal-loan-form-section">
        <label htmlFor="loanPurpose" className="personal-loan-label">Select a Loan Purpose</label>
        <select id="loanPurpose" className="personal-loan-dropdown">
          <option value="Debt Consolidation">Debt Consolidation</option>
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
        <button className="personal-loan-submit-button"
          onClick={handleContinue}>
          Continue
        </button>
      </div>
      <div className="personal-loan-information">
<p className="personal-loan-info-item"> <MdLock size={20} /> Your information is securely encrypted</p>
<p className="personal-loan-info-item"><MdSpeed size={20} /> No Impact to your credit score</p>
      </div>
    </div>
  );
};

export default ThirdPL;

