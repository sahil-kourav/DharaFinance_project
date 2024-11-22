import React from "react";
import "./PersonalLoanComponent.css";

const PoorCreditComponent = () => {
  return (
    <div className="poor-credit-container">
      <div className="poor-credit-card">
        <div className="poor-credit-header">
          <h1>"We Regret to Inform You That Your Loan Application Was Not Approved"</h1>
          <p className="status-message">
          Unfortunately, your loan request has been declined based on your current credit score. We thank you for your understanding.
          </p>
        </div>
        </div>
    </div>
  );
};

export default PoorCreditComponent;