import React, { useEffect, useState } from "react";
import "./ContectUs.css";
import { FaMapPin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { db } from "../ShowDataComponent/firestore";
import { collection, addDoc } from "firebase/firestore";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const ContectUs = () => {
    const [emp, updateEmp] = useState({ first: "", last: "", email: "", number: "", query: "" });
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const checkOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener('online', checkOnlineStatus);
        window.addEventListener('offline', checkOnlineStatus);


        return () => {
            window.removeEventListener('online', checkOnlineStatus);
            window.removeEventListener('offline', checkOnlineStatus);
        };
    }, []);

    const change = (e) => {
        updateEmp({ ...emp, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isOnline) {
            alert('Your internet is not connected.');
            return;
        }

        try {
            const ep = collection(db, 'emps');
            await addDoc(ep, emp);
            alert('Your data is successfully submitted!');
            updateEmp({ first: "", last: "", email: "", number: "", query: "" }); // Reset form
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please try again!");
        }
    };

    return (
        <div className="contact-us-container d-flex align-items-center justify-content-center">
            <div className="contact-us-content row">
                <div className="col-md-6 form-section">

                    <h2>Get in Touch! We’ll Call You Back</h2>
                    <p>Your trusted partner in financial growth and security. Connect with us to discuss personalized solutions that fit your financial goals.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                        <div className="col">
                            <input type="text" name="first" className="form-control" onChange={change} placeholder="First Name" value={emp.first} required />
                        </div>
                        <div className="col">
                            <input type="text" name="last" className="form-control" onChange={change} placeholder="Last Name" value={emp.last} required />
                        </div>
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" placeholder="Your Email (e.g., example@gmail.com)" value={emp.email} onChange={change} required />
                        </div>
                        <div className="mb-3">
                            <input type="number" name="number" className="form-control" value={emp.number} placeholder="Your Contact Number (e.g., +91-555-555-5555)" onChange={change} required />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" name="query" className="form-control" value={emp.query} placeholder="Tell us how we can assist you with your financial journey" onChange={change} required rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Inquiry 🚀</button>
                    </form>
                </div>

                <div className="col-md-6 details-section">
                    <div className="detail-item">
                        <FaMapPin className="contect-icon fs-2" />
                        <div className="detail-content">
                            <h5>Corporate Office</h5>
                            <p>Dhara Finance Pvt Ltd., OFFICE NO-215 B, BTC, INDRAPRASTH SQUARE, Madhya Pradesh 452001, India</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <FaPhoneAlt className="contect-icon fs-4" />
                        <div className="detail-content">
                            <h5>Customer Support</h5>
                            <p>+91-82-2493-0532 <br /> Mon-Fri: 9 AM - 6 PM IST</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <FaEnvelope className="contect-icon fs-4" />
                        <div className="detail-content">
                            <h5>General Inquiries</h5>
                            <p>dharafinance.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContectUs;
