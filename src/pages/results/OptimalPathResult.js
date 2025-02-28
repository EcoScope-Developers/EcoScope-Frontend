import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/results/OptimalPathResult.css";

const OptimalPathResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <h2>No data available. Please upload an image.</h2>;
  }

  const { imageUrl, optimalPath, distance } = location.state;

  return (
    <div className="resultPage">
      <h2>Optimal Path Result</h2>
      <img src={imageUrl} alt="Uploaded" className="uploadedImage" />
      <p>Optimal Path: {JSON.stringify(optimalPath)}</p>
      <p>Total Distance: <strong>{distance.toFixed(2)} units</strong></p>
      <button onClick={() => navigate("/optimal-path")}>Upload Another Image</button>
    </div>
  );
};

export default OptimalPathResult;
