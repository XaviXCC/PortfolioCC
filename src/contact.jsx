/* 
  File: contact.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

export default function Contact() {
    const navigate = useNavigate(); // get the navigate function

    // state management for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    // handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // print the form data
        console.log("Form Data Submitted:", formData);

        //jump to home page
        navigate("/");
    };

    return (
        <div className="contact-page">
            {/* my info panel */}
            <div className="contact-panel">
                <h2>Contact Information</h2>
                <p>Email: xxue2@centennialcollege.ca</p>
                <p>Phone: +1 416 464 9863</p>
                <p>Address:  941 Progress Ave, Scarborough,. ON M1G 3T8</p>
            </div>

            {/* contact us form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Me a Message</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>
        </div>
    );
}
