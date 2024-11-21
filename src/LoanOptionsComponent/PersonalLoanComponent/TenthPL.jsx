
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const TenthPL = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
      navigate('/eleventh');
    };        
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">Select Educational Qualification</h1>
      <div className="personal-loan-form-section">
        <label htmlFor="loanPurpose" className="personal-loan-label">Select a Loan Purpose</label>
        <select id="loanPurpose" className="personal-loan-dropdown">
          <option value="Debt Consolidation">College graduate & above</option>
          <option value="Pay Off Credit Cards">12th Pass</option>
          <option value="Home Improvement">10th Pass & below</option>
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

export default TenthPL;

