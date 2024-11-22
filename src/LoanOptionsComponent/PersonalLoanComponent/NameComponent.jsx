
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const NameComponent = () => {
  const [firstName, setFirstName] = useState(""); // Track street address input
  const [lastName, setLastName] = useState(""); // Track city input
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    // Validation checks
    if (!firstName.trim()) {
      alert("Please enter a valid First Name!");
      return;
    }

    if (!lastName.trim()) {
      alert("Please enter a Last Name!");
      return;
    }

    navigate("/phone");
  };

  return (
<div className="personal-loan-container">
<div className="personal-loan-progress-bar"></div>
<h2 className="personal-loan-subheading">Personal Loan</h2>
<h1 className="personal-loan-main-title">What's your name?</h1>
<h2 className="personal-loan-subtitle">We need this info to find your personalized rates.</h2>

      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
      <label htmlFor="loanPurpose" className="personal-loan-label">First Name</label>
        <input
          type="text"
          id="firstName"
          className="personal-loan-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          required
        />

<label htmlFor="loanPurpose" className="personal-loan-label">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="personal-loan-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
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
export default NameComponent;

