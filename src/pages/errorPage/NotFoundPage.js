import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { IoMdSad } from "react-icons/io"; // A new icon from react-icons
import "../../assets/styles/errorPageStyles/NotFoundPage.css";


const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <IoMdSad className="error-icon" />
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you’re looking for doesn’t exist.</p>
        <button className="home-button" onClick={goHome}>Return to Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
