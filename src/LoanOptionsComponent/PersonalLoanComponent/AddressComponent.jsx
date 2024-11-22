import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const AddressComponent = () => {
  const { state } = useLocation();
  const [street, setStreet] = useState(""); // Track street address input
  const [city, setCity] = useState(""); // Track city input
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    // Validation checks
    if (!street.trim()) {
      alert("Please enter a valid Street Address!");
      return;
    }
    if (!city.trim()) {
      alert("Please enter a valid City!");
      return;
    }

    navigate("/full-name", { state: { ...state, street, city } });
  };

  return (
<div className="personal-loan-container">
<div className="personal-loan-progress-bar"></div>
<h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
<h1 className="personal-loan-main-title">What's your address?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
      <label htmlFor="streetAddress" className="personal-loan-label">Street Address</label>
        <input
          type="text"
          id="street"
          className="personal-loan-input"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Enter your street name"
          required
        />

<label htmlFor="city" className="personal-loan-label">City</label>
        <input
          type="text"
          id="city"
          className="personal-loan-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city name"
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

export default AddressComponent;
