import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from "react-icons/md";

const LoanDurationComponent = () => {
    const { state } = useLocation();
  const [loanDuration, setLoanDuration] = useState("");  // Track loan duration input
  const [age, setAge] = useState("");  // Track user's age
  const [errorMessage, setErrorMessage] = useState("");  // For displaying error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    // Convert age to a number for validation
    const userAge = parseInt(age);

    // Validate age: must be between 21 and 65
    if (userAge >= 21 && userAge <= 65) {
      navigate("/need-money", { state: { ...state, loanDuration } }); // Redirect if validation passes
    } else {
      setErrorMessage("To proceed with your loan application, you must be between 21 and 65 years old. We apologize for any inconvenience.");
    }
  };

  return (
    <>
      <div className="personal-loan-container">
        <div className="personal-loan-progress-bar"></div>
        <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
        <h1 className="personal-loan-main-title">What's the loan duration (in years) would you prefer?</h1>
        
        {/* Form to input loan duration and age */}
        <form className="personal-loan-form-section" onSubmit={handleSubmit}>
          
          {/* Loan Duration Input */}
          <input
            type="number"
            id="loanDuration"
            className="personal-loan-input"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}
            placeholder="Enter your desired loan duration"
            required
          />
          
          {/* Age Input */}
          <input
            type="number"
            id="age"
            className="personal-loan-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            required
          />

          {/* Error Message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="personal-loan-submit-button">
            Continue
          </button>
        </form>

        {/* Information Section */}
        <div className="personal-loan-information">
          <p className="personal-loan-info-item">
            <MdLock size={20} /> Your information is securely encrypted
          </p>
          <p className="personal-loan-info-item">
            <MdSpeed size={20} /> No Impact to your credit score
          </p>
        </div>
      </div>
    </>
  );
};

export default LoanDurationComponent;
