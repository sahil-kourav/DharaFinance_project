// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PersonalLoanComponent.css';
// import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

// const PersonalLoanComponent = () => {
//   const navigate = useNavigate();
//   const [loanAmount, setLoanAmount] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [tenure, setTenure] = useState('');
//   const [monthlyIncome, setMonthlyIncome] = useState('');
//   const [existingEMI, setExistingEMI] = useState('');
//   const [downPayment, setDownPayment] = useState('');
//   const [processingFees, setProcessingFees] = useState('');
//   const [creditScore, setCreditScore] = useState('');
//   const [employmentStatus, setEmploymentStatus] = useState('');
//   const [loanPurpose, setLoanPurpose] = useState('');
//   const [age, setAge] = useState('');
//   const [location, setLocation] = useState('');
//   const [monthlyExpenses, setMonthlyExpenses] = useState('');
//   const [totalLoans, setTotalLoans] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   // const [propertyValue, setPropertyValue] = useState(''); 
//   // const [propertyLoanAmount, setPropertyLoanAmount] = useState(''); 
//   const [propertyLocation, setPropertyLocation] = useState(''); // New state for property location
//   const [calculatedEMI, setCalculatedEMI] = useState(null);
//   const [error, setError] = useState('');

//   const calculateEMI = () => {
//     setError('');
//     const P = parseFloat(loanAmount);
//     const r = parseFloat(interestRate) / 12 / 100;
//     const n = parseFloat(tenure) * 12;

//     if (!P || !r || !n) {
//       setError('Please fill out all required fields correctly.');
//       return;
//     }

//     const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//     setCalculatedEMI(emi.toFixed(2));

//     navigate('/loan-result', {
//       state: {
//         loanAmount,
//         interestRate,
//         tenure,
//         monthlyIncome,
//         existingEMI,
//         downPayment,
//         processingFees,
//         creditScore,
//         employmentStatus,
//         loanPurpose,
//         age,
//         location,
//         monthlyExpenses,
//         totalLoans,
//         propertyType,
//         // propertyValue, 
//         // propertyLoanAmount,
//         propertyLocation, 
//         calculatedEMI: emi.toFixed(2),
//       },
//     });
//   };

//   return (
//     <Container className="loan-calculator-container mt-2">
//       <Row className="justify-content-center">
//         <Col md={10}>
//           <Card className="p-1 border-0">
//             <Card.Body>
//               <h4 className="text-center mb-5 loan-heading">Explore Your Loan Eligibility Journey</h4>
//               {error && <Alert variant="danger">{error}</Alert>}

//               <h3 className="loan-section-title">Personal Details</h3>
//               <Form>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="age" className="mb-3">
//                       <Form.Label>Age*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter age"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="monthlyIncome" className="mb-3">
//                       <Form.Label>Monthly Income*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter your monthly income"
//                         value={monthlyIncome}
//                         onChange={(e) => setMonthlyIncome(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="employmentStatus" className="mb-3">
//                       <Form.Label>Employment Status*</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={employmentStatus}
//                         onChange={(e) => setEmploymentStatus(e.target.value)}
//                         required
//                       >
//                         <option value="">Select Employment Status</option>
//                         <option value="Employed">Employed</option>
//                         <option value="Self-Employed">Self-Employed</option>
//                         <option value="Unemployed">Unemployed</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="location" className="mb-3">
//                       <Form.Label>Location/Zip Code (Optional)</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter location or zip code"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <h3 className="loan-section-title">Loan Details</h3>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="loanAmount" className="mb-3">
//                       <Form.Label>Loan Amount*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter loan amount"
//                         value={loanAmount}
//                         onChange={(e) => setLoanAmount(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="interestRate" className="mb-3">
//                       <Form.Label>Interest Rate* (%)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter interest rate"
//                         value={interestRate}
//                         onChange={(e) => setInterestRate(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="tenure" className="mb-3">
//                       <Form.Label>Loan Tenure* (Years)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter tenure in years"
//                         value={tenure}
//                         onChange={(e) => setTenure(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="existingEMI" className="mb-3">
//                       <Form.Label>Existing EMI (if any)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter existing EMI"
//                         value={existingEMI}
//                         onChange={(e) => setExistingEMI(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="creditScore" className="mb-3">
//                       <Form.Label>Credit Score*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter your credit score"
//                         value={creditScore}
//                         onChange={(e) => setCreditScore(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="downPayment" className="mb-3">
//                       <Form.Label>Down Payment*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter down payment"
//                         value={downPayment}
//                         onChange={(e) => setDownPayment(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <h3 className="loan-section-title">Other Details</h3>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="monthlyExpenses" className="mb-3">
//                       <Form.Label>Monthly Expenses</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter your monthly expenses"
//                         value={monthlyExpenses}
//                         onChange={(e) => setMonthlyExpenses(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="totalLoans" className="mb-3">
//                       <Form.Label>Total Existing Loans*</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter total existing loans"
//                         value={totalLoans}
//                         onChange={(e) => setTotalLoans(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="processingFees" className="mb-3">
//                       <Form.Label>Processing Fees (%)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter processing fees"
//                         value={processingFees}
//                         onChange={(e) => setProcessingFees(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>

//               <Col md={6}>
//                 <Form.Group controlId="loanPurpose" className="mb-3">
//                   <Form.Label>Loan Purpose*</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={loanPurpose}
//                     onChange={(e) => setLoanPurpose(e.target.value)}
//                     required
//                   >
//                     <option value="">Select Loan Purpose</option>
//                     <option value="Home Renovation">Home Renovation</option>
//                     <option value="Debt Consolidation">Buy a Car</option>
//                     <option value="Education">Education</option>
//                     <option value="Medical Expenses">Medical Expenses</option>
//                     <option value="Business">Wedding Expenses</option>
//                     <option value="Vacation">Emergency Funds</option>
//                   </Form.Control>
//                 </Form.Group>
//               </Col>
//                 </Row>

//                 <h3 className="loan-section-title">Property Ownership Details</h3>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group controlId="propertyType" className="mb-3">
//                       <Form.Label>Type of Property*</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={propertyType}
//                         onChange={(e) => setPropertyType(e.target.value)}
//                         required
//                       >
//                         <option value="">Select Property Type</option>
//                         <option value="Residential">Residential</option>
//                         <option value="Commercial">Commercial</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="propertyLocation" className="mb-3">
//                       <Form.Label>Property Location*</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter property location"
//                         value={propertyLocation}
//                         onChange={(e) => setPropertyLocation(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Button variant="primary" className="mt-4 submit-loan-detail" onClick={calculateEMI}>
//                   Submit Details
//                 </Button>
//               </Form>

//               {calculatedEMI && (
//                 <Card className="mt-4 p-3 text-center result-card">
//                   <h3>Your Estimated EMI</h3>
//                   <p className="display-4 text-success">{calculatedEMI}</p>
//                 </Card>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PersonalLoanComponent;




import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalLoanComponent.css";
import { MdSpeed, MdLock } from 'react-icons/md';


const PersonalLoanComponent = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/first');
  };

  return (
    <div className="personal-loan-container">
      <div className="personal-loan-progress-bar"></div>
      <h2 className="personal-loan-subheading">PERSONAL LOAN</h2>
      <h1 className="personal-loan-main-title">Select a loan purpose?</h1>
      <div className="personal-loan-form-section">
        <label htmlFor="loanPurpose" className="personal-loan-label">Select a Loan Purpose</label>
        <select id="loanPurpose" className="personal-loan-dropdown">
        <option value="Debt Consolidation">Choose..</option>
          <option value="Debt Consolidation">Debt Consolidation</option>
          <option value="Pay Off Credit Cards">Pay Off Credit Cards</option>
          <option value="Home Improvement">Home Improvement</option>
          <option value="Home Buying">Home Buying</option>
          <option value="Major Purchase">Major Purchase</option>
          <option value="Car Financing">Car Financing</option>
          <option value="Business">Business</option>
          <option value="Vacation">Vacation</option>
          <option value="Wedding Expenses">Wedding Expenses</option>
          <option value="Moving and Relocation">Moving and Relocation</option>
          <option value="Medical Expenses">Medical Expenses</option>
          <option value="Car Repair">Car Repair</option>
          <option value="Everyday Bills">Everyday Bills</option>
          <option value="Other">Other</option>
        </select>
        <button className="personal-loan-submit-button"
          onClick={handleContinue}>
          Continue
        </button>
      </div>
      <div className="personal-loan-information">
        <p className="personal-loan-info-item"> <MdLock size={20} /> Your information is securely encrypted</p>
        <p className="personal-loan-info-item"><MdSpeed size={20} /> No Impact to your credit score</p>
      </div>

    </div>

  );
};

export default PersonalLoanComponent;

