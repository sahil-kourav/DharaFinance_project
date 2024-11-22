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
import LoanAmountComponent from "./LoanOptionsComponent/PersonalLoanComponent/LoanAmountComponent";
import MoneyComponent from "./LoanOptionsComponent/PersonalLoanComponent/MoneyComponent";
import DOBComponent from "./LoanOptionsComponent/PersonalLoanComponent/DOBComponent";
import RentHomeComponent from "./LoanOptionsComponent/PersonalLoanComponent/RentHomeComponent"; 
import CreditComponent from "./LoanOptionsComponent/PersonalLoanComponent/CreditComponent"; 
import EmploymentComponent from "./LoanOptionsComponent/PersonalLoanComponent/EmploymentComponent"; 
import AnnualIncomeComponent from "./LoanOptionsComponent/PersonalLoanComponent/AnnualIncomeComponent"; 
import QualificationComponent from "./LoanOptionsComponent/PersonalLoanComponent/QualificationComponent"; 
import ZipComponent from "./LoanOptionsComponent/PersonalLoanComponent/ZipComponent"; 
import AddressComponent from "./LoanOptionsComponent/PersonalLoanComponent/AddressComponent"; 
import NameComponent from "./LoanOptionsComponent/PersonalLoanComponent/NameComponent"; 
import PhoneComponent from "./LoanOptionsComponent/PersonalLoanComponent/PhoneComponent"; 
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
        <Route path="/loan-amount" element={<LoanAmountComponent />} />
      <Route path="/need-money" element={<MoneyComponent />} />
      <Route path="/dob" element={<DOBComponent />} />
      <Route path="/rent-home" element={<RentHomeComponent />} />
      <Route path="/credit" element={<CreditComponent />} />
      <Route path="/employment-status" element={<EmploymentComponent />} />
      <Route path="/annual-income" element={<AnnualIncomeComponent />} />
      <Route path="/qualification" element={<QualificationComponent />} />
      <Route path="/zip-code" element={<ZipComponent />} />
      <Route path="/address" element={<AddressComponent />} />
      <Route path="/full-name" element={<NameComponent />} />
      <Route path="/phone" element={<PhoneComponent />} />

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
