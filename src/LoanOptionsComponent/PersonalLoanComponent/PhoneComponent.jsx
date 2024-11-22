import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const PhoneComponent = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState(""); // Track phone number input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate phone number (must be 10 digits)
    if (phoneNumber.trim().length !== 10 || isNaN(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    navigate("/email"); // Proceed to the next question if validation passes
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your phone number?</h1>
      <form className="personal-loan-form-section" onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber" className="personal-loan-label">
          Phone Number
        </label>
        <input
          type="text" // Changed to "text" to ensure proper validation of number length
          id="phoneNumber"
          className="personal-loan-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="📞 Enter your contact number"
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

export default PhoneComponent;
