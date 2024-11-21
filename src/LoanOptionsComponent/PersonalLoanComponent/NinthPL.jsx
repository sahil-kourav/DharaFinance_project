import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const NinthPL = () => {
  const [zipCode, setZipCode] = useState("");  // Track ZIP code input
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default
    
    // Validate input
    if (!zipCode) {
      alert("Please enter your 6-digit ZIP code!");
      return;
    }
    if (!/^\d{6}$/.test(zipCode)) {  // Check if input is exactly 6 digits
      alert("Your ZIP code must be 6 digits long!");
      return;
    }
    
    // If input is valid, navigate to the next page
    navigate('/tenth');
  };
  
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What is your ZIP code?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <input
          type="text"  // Changed type to text for numerical input only
          id="zipCode"
          className="personal-loan-input"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/[^0-9]/g, '').substring(0, 6))}  // Only allow digits and limit to 6 characters
          placeholder="Enter your 6-digit ZIP code"
          required
        />
        <button type="submit" className="personal-loan-submit-button">
          Continue
        </button>
      </form>
      <div className="personal-loan-information">
        <p className="personal-loan-info-item"> <MdLock size={20} /> Your information is securely encrypted</p>
        <p className="personal-loan-info-item"><MdSpeed size={20} /> No Impact to your credit score</p>
      </div>
    </div>
  );
};

export default NinthPL;
