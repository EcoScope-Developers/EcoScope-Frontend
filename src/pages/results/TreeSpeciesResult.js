import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/results/TreeSpeciesResult.css";

const TreeSpeciesResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <h2>No data available. Please upload an image.</h2>;
  }

  const { imageUrl, species } = location.state;

  return (
    <div className="result-container fade-in">
      <h2 className="result-title">Identified Tree Species</h2>

      <div className="result-card">
        <img src={imageUrl} alt="Identified Tree" className="tree-image" />

        <div className="species-box">
          <span>{species}</span>
        </div>
      </div>

      <button onClick={() => navigate("/tree-species")}>Upload Another Image</button>
    </div>
  );
};

export default TreeSpeciesResult;
