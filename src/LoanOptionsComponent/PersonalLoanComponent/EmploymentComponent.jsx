
import React, {useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';

const EmploymentComponent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [employmentStatus, setEmploymentStatus] = useState(""); 

  const handleSelection = (option) => {
    setEmploymentStatus(option);
   console.log(`Selected option: ${option}`);

    navigate('/annual-income', { state: { ...state, employmentStatus: option } });
  };
  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">What's your employment status?</h1>
      <div className="personal-loan-option-container">
        {["Full-time", "Part-time", "Self-employed", "Unemployed", "Other"].map((option, index) => (
          <div   
          
            key={index}
            className="personal-loan-option"
            onClick={() => handleSelection(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="personal-loan-information">
        <p className="personal-loan-info-item"> <MdLock size={20} /> Your information is securely encrypted</p>
        <p className="personal-loan-info-item"><MdSpeed size={20} /> No Impact to your credit score</p>
      </div>
    </div>
  );
};

export default EmploymentComponent;

