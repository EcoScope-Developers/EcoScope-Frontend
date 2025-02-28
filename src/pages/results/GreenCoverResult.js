import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/results/GreenCoverResult.css";
import { FaArrowLeft } from "react-icons/fa";

const GreenCoverResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <h2 className="error-message">No data available. Please upload an image.</h2>;
  }

  const { imageUrl, greenCoverPercentage } = location.state;

  return (
    <div className="result-container fade-in">
      <div className="result-card">
        <h1 className="result-title">Green Cover Estimation</h1>
        <img src={imageUrl} alt="Uploaded" className="result-image" />
        <p className="result-text">
          Green Cover Percentage: <strong>{greenCoverPercentage.toFixed(2)}%</strong>
        </p>
        <button className="back-button" onClick={() => navigate("/green-cover")}>
          <FaArrowLeft size={16} /> Upload Another Image
        </button>
      </div>
    </div>
  );
};

export default GreenCoverResult;
