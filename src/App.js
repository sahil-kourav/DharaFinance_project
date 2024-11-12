import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './NavbarComponent/Navbar'; 
import './App.css';
import ContectUs from './ContectUS/ContectUs';
import Footer from './FooterComponent/Footer';
import HomePage from './HomePage';
import AboutUsPage from './AboutUs/AboutUs';
import ServicesPage from './ServicesComponent/ServicesPage';
import LoanOptions from './LoanOptionsComponent/LoanOptions';
import PersonalLoanComponent from './LoanOptionsComponent/PersonalLoanComponent'; 
import StudentLoanComponent from './LoanOptionsComponent/StudentLoanComponent';
import CreditCardComponent from './LoanOptionsComponent/CreditCardComponent';
import CreditScoreComponent from './LoanOptionsComponent/CreditScoreComponent';
import InsuranceComponent from './LoanOptionsComponent/InsuranceComponent';
import HomePurchaseComponent from './LoanOptionsComponent/HomePurchaseComponent';
import AutoLoanComponent from './LoanOptionsComponent/AutoLoanComponent';
import LoanResultComponent from './LoanOptionsComponent/LoanResultComponent';
import ShowData from './ShowDataComponent/ShowData';

const App = () => {       
  const location = useLocation(); 

  return (
    <div>
      <Navbar />
      {location.pathname === "/" && <LoanOptions />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/show-only-owner" element={<ShowData />} />
        <Route path="/connect-us" element={<ContectUs />} />
        <Route path="/personal-loans" element={<PersonalLoanComponent />} />
        <Route path="/loan-result" element={<LoanResultComponent />} /> 
        <Route path="/student-loans" element={<StudentLoanComponent />} />
        <Route path="/home-purchase" element={<HomePurchaseComponent />} />
        <Route path="/credit-cards" element={<CreditCardComponent />} />
        <Route path="/insurance" element={<InsuranceComponent />} />
        <Route path="/auto-loans" element={<AutoLoanComponent />} />
        <Route path="/credit-score" element={<CreditScoreComponent />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
