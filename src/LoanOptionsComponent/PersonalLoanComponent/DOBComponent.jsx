import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const DOBComponent = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!dateOfBirth) {
      alert("Please enter your date of birth!");
      return;
    }
    navigate("/rent-home");
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your date of birth?</h1>
      <div className="personal-loan-form-section">
        <label htmlFor="dob" className="personal-loan-label">
        MM/DD/YYYY
        </label>
        <input
          type="date"
          id="dob"
          className="personal-loan-input"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        <button className="personal-loan-submit-button" onClick={handleContinue}>
          Continue
        </button>
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

export default DOBComponent;
