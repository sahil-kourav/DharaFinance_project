
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const SeventhPL = () => {
  const [loanPurpose, setLoanPurpose] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!loanPurpose) {
      alert("Please enter a valid annual income!");
      return;
    }
    navigate('/eight');
  };
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What’s your annual income?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <label htmlFor="loanPurpose" className="personal-loan-label">
        Annual Income 
        </label>
        <select
          id="loanPurpose"
          className="personal-loan-dropdown"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          <option value="25 Lac +">25 Lac +</option>
          <option value="15 Lac to 24.9 Lac">15 Lac to 24.9 Lac</option>
          <option value="10 Lac to 14.9 Lac">10 Lac to 14.9 Lac</option>
          <option value="8 Lac to 9.9 Lac">8 Lac to 9.9 Lac</option>
          <option value="5 Lac to 7.9 Lac">5 Lac to 7.9 Lac</option>
          <option value="3 Lac to 4.9 Lac">3 Lac to 4.9 Lac</option>
          <option value="2 Lac to 2.9 Lac">2 Lac to 2.9 Lac</option>
          <option value="Less than 2 Lac">Less than 2 Lac</option>
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
export default SeventhPL;

