import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("Agrovision");
        navigate('/signin');
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(to right, #003366, #00509E)", padding: "10px 20px" }}>
            <div className="container-fluid">
                {/* Logo */}
                <a href="/" className="navbar-brand d-flex align-items-center text-white">
                    
                    <span style={{ fontWeight: "lighter", fontFamily: "fantasy", fontSize: "1.5rem" }}>AgroVision</span>
                </a>

                {/* Toggle Button for Mobile View */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white mx-3">Home</Link>
                        </li>
                       
                        
                        {/* Auth Buttons */}
                        {localStorage.getItem("Agrovision") !== null ? (
                            <button className="btn btn-danger mx-3" onClick={logout}>Logout</button>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to='/signin' className="nav-link text-white mx-3">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link text-white mx-3">Register</Link>
                                </li>
                            </>
                        )}

                        {/* Chatbot Icon */}
                        <li className="nav-item">
                            <Link to="/chatbot" className="nav-link mx-3">
                                <img
                                    src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg?w=2000"
                                    alt="Chatbot"
                                    style={{ height: "30px", width: "40px", borderRadius: "50%" }}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
