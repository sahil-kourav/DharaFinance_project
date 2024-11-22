import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const AadharComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [aadharNumber, setAadharNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (aadharNumber.trim().length !== 12 || isNaN(aadharNumber)) {
        alert("Please enter a valid 12-digit aadhar number!");
        return;
      }

    navigate("/check-details", { state: { ...state, aadharNumber } });
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your 12 digit Aadhar number?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <label htmlFor="aadharNumber" className="personal-loan-label">
       Aadhar number
        </label>
        <input
          type="number"
          id="aadharNumber"
          className="personal-loan-input"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          placeholder="Enter your aadhar number"
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

export default AadharComponent;
