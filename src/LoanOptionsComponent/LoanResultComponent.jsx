// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import './LoanResultComponent.css'; // Ensure to create this CSS file

// const LoanResultComponent = () => {
//   const location = useLocation();
//   const {
//     loanAmount,
//     interestRate,
//     tenure,
//     monthlyIncome,
//     existingEMI,
//     downPayment,
//     processingFees,
//     creditScore,
//     employmentStatus,
//     loanPurpose,
//     age,
//     location: userLocation,
//     monthlyExpenses,
//     totalLoans,
//     calculatedEMI,
//     typeProperty,
//     propertyLocation, // New property location
//   } = location.state || {};

//   return (
//     <Container className="mt-4 mb-4">
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card className="p-1 mt-0 shadow-sm result-card">
//             <Card.Body>
//               <h4 className="text-center mb-5">Your Loan Insights: A Detailed Summary</h4>
//               <h5 className="loan-report px-2 mb-3">
//                 You can expect to pay approximately ₹{calculatedEMI} each month.
//               </h5>
//               <hr />
//               <ListGroup variant="flush">
//                 <ListGroup.Item className="result-item">
//                   <strong>Total Loan Amount:</strong> ₹{loanAmount}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Interest Rate:</strong> {interestRate} %
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Loan Tenure:</strong> {tenure} years
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Monthly Income:</strong> ₹{monthlyIncome}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Existing EMI:</strong> {existingEMI || "None"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Down Payment:</strong> ₹{downPayment || "Not provided"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Processing Fees:</strong> {processingFees || "Not provided"} %
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Credit Score:</strong> {creditScore || "Not provided"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Employment Status:</strong> {employmentStatus}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Loan Purpose:</strong> {loanPurpose}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Your Current Age:</strong> {age}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Location:</strong> {userLocation || "Not provided"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Monthly Expenses:</strong> ₹{monthlyExpenses}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Total Existing Loans:</strong> {totalLoans || "None"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Type of Property:</strong> {typeProperty || "Not provided"}
//                 </ListGroup.Item>
//                 <ListGroup.Item className="result-item">
//                   <strong>Property Location:</strong> {propertyLocation || "Not provided"}
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoanResultComponent;



import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCreditCard, FaMoneyBillWave, FaHome, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import './LoanResultComponent.css'; // Updated custom CSS

const LoanResultComponent = () => {
  const location = useLocation();
  const {
    loanAmount,
    interestRate,
    tenure,
    monthlyIncome,
    existingEMI,
    downPayment,
    processingFees,
    creditScore,
    employmentStatus,
    loanPurpose,
    age,
    location: userLocation,
    monthlyExpenses,
    totalLoans,
    calculatedEMI,
    typeProperty,
    propertyLocation,
  } = location.state || {};

  const loanDetails = [
    { label: 'Total Loan Amount', value: `₹${loanAmount}`, icon: <FaRegCreditCard /> },
    { label: 'Interest Rate', value: `${interestRate}%`, icon: <FaMoneyBillWave /> },
    { label: 'Loan Tenure', value: `${tenure} years`, icon: <FaCalendarAlt /> },
    { label: 'Monthly Income', value: `₹${monthlyIncome}`, icon: <FaMoneyBillWave /> },
    { label: 'Existing EMI', value: existingEMI || 'None', icon: <FaMoneyBillWave /> },
    { label: 'Down Payment', value: `₹${downPayment || 'Not provided'}`, icon: <FaMoneyBillWave /> },
    { label: 'Processing Fees', value: `${processingFees || 'Not provided'}%`, icon: <FaMoneyBillWave /> },
    { label: 'Credit Score', value: creditScore || 'Not provided', icon: <FaUsers /> },
    { label: 'Employment Status', value: employmentStatus, icon: <FaUsers /> },
    { label: 'Loan Purpose', value: loanPurpose, icon: <FaHome /> },
    { label: 'Your Current Age', value: age, icon: <FaUsers /> },
    { label: 'Location', value: userLocation || 'Not provided', icon: <FaHome /> },
    { label: 'Monthly Expenses', value: `₹${monthlyExpenses}`, icon: <FaMoneyBillWave /> },
    { label: 'Total Existing Loans', value: totalLoans || 'None', icon: <FaMoneyBillWave /> },
    { label: 'Type of Property', value: typeProperty || 'Not provided', icon: <FaHome /> },
    { label: 'Property Location', value: propertyLocation || 'Not provided', icon: <FaHome /> },
  ];

  return (
    <Container className="mt-5 mb-5 loan-result-container">
      <Row className="justify-content-center">
        <Col md={10}>
          {/* Header Section */}
          <div className="loan-result-header text-center">
            <h2 className="loan-result-title">Your Loan Insights</h2>
            <p className="loan-result-summary">
              You can expect to pay approximately <span className="highlight-amount">₹{calculatedEMI}</span> each month.
            </p>
          </div>
          
          {/* Loan Details Section */}
          <div className="loan-details">
            <Row className="justify-content-center">
              {loanDetails.map((detail, index) => (
                <Col md={3} sm={6} xs={12} key={index} className="loan-detail mb-4">
                  <div className="loan-detail-box">
                    <div className="loan-detail-icon">{detail.icon}</div>
                    <p className="loan-detail-label">{detail.label}</p>
                    <p className="loan-detail-value">{detail.value}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanResultComponent;
