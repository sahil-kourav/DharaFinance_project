
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const NinthPL = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
      // Redirect to the next page (in this case, /second)
      navigate('/tenth');
    };        
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What’s your annual income</h1>
      <div className="personal-loan-form-section">
        <label htmlFor="loanPurpose" className="personal-loan-label">Select a Loan Purpose</label>
        <select id="loanPurpose" className="personal-loan-dropdown">
          <option value="Debt Consolidation">25 Lac +</option>
          <option value="Pay Off Credit Cards">15 Lac to 24.9 Lac</option>
          <option value="Home Improvement">10 Lac to 14.9 Lac</option>
          <option value="Home Buying">8 Lac to 9.9 Lac</option>
          <option value="Major Purchase">5 Lac to 7.9 Lac</option>
          <option value="Car Financing">3 Lac to 4.9 Lac</option>
          <option value="Business">2 Lac to 2.9 Lac</option>
          <option value="Vacation">Less than 2 Lac</option>
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

export default NinthPL;

