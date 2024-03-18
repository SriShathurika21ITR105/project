import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Contact = () => {
    return (
        <div className="home-contact page-container p-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className='pb-3 fw-light'>Have Questions?</h3>
            <button className="general-button">
        <Link to="/Contactt">Contact Us</Link>
            </button>
        </div>
    )
}

export default Contact;