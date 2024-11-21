import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './NavbarComponent/Navbar'; 
import ContectUs from './ContectUSComponent/ContectUs';
import Footer from './FooterComponent/Footer';
import AboutUsPage from './AboutUs/AboutUs';
import ShowData from './ShowDataComponent/ShowData';
import ServicesPage from './ServicesComponent/ServicesPage';
import LoanOptions from './LoanOptionsComponent/LoanOptions';
import StudentLoanComponent from './LoanOptionsComponent/StudentLoanComponent';
import CreditCardComponent from './LoanOptionsComponent/CreditCardComponent';
import CreditScoreComponent from './LoanOptionsComponent/CreditScoreComponent';
import InsuranceComponent from './LoanOptionsComponent/InsuranceComponent';
import HomePurchaseComponent from './LoanOptionsComponent/HomePurchaseComponent';
import AutoLoanComponent from './LoanOptionsComponent/AutoLoanComponent';
import LoanResultComponent from './LoanOptionsComponent/LoanResultComponent';
import PersonalLoanComponent from './LoanOptionsComponent/PersonalLoanComponent/PersonalLoanComponent';
import FirstPL from "./LoanOptionsComponent/PersonalLoanComponent/FirstPL";
import SecondPL from "./LoanOptionsComponent/PersonalLoanComponent/SecondPL";
import ThirdPL from "./LoanOptionsComponent/PersonalLoanComponent/ThirdPL";
import FourthPL from "./LoanOptionsComponent/PersonalLoanComponent/FourthPL"; 
import FifthPL from "./LoanOptionsComponent/PersonalLoanComponent/FifthPL"; 
import SixthPL from "./LoanOptionsComponent/PersonalLoanComponent/SixthPL"; 
import SeventhPL from "./LoanOptionsComponent/PersonalLoanComponent/SeventhPL"; 
import EightPL from "./LoanOptionsComponent/PersonalLoanComponent/EightPL"; 
import NinthPL from "./LoanOptionsComponent/PersonalLoanComponent/NinthPL"; 
import TenthPL from "./LoanOptionsComponent/PersonalLoanComponent/TenthPL"; 
import EleventhPL from "./LoanOptionsComponent/PersonalLoanComponent/EleventhPL"; 
import TwelfthPL from "./LoanOptionsComponent/PersonalLoanComponent/TwelfthPL"; 
import EmailComponent from "./LoanOptionsComponent/PersonalLoanComponent/EmailComponent";
import AadharComponent from "./LoanOptionsComponent/PersonalLoanComponent/AadharComponent";
import CheckDetailsComponent from "./LoanOptionsComponent/PersonalLoanComponent/CheckDetailsComponent";


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
        <Route path="/first" element={<FirstPL />} />
      <Route path="/second" element={<SecondPL />} />
      <Route path="/third" element={<ThirdPL />} />
      <Route path="/fourth" element={<FourthPL />} />
      <Route path="/fifth" element={<FifthPL />} />
      <Route path="/sixth" element={<SixthPL />} />
      <Route path="/seventh" element={<SeventhPL />} />
      <Route path="/eight" element={<EightPL />} />
      <Route path="/ninth" element={<NinthPL />} />
      <Route path="/tenth" element={<TenthPL />} />
      <Route path="/eleventh" element={<EleventhPL />} />
      <Route path="/twelfth" element={<TwelfthPL />} />

      <Route path="/check-details" element={<CheckDetailsComponent />} />
      <Route path="/aadhar" element={<AadharComponent />} />
      <Route path="/email" element={<EmailComponent />} />
      {/* <Route path="/twelfth" element={< />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
