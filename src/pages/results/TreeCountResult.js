import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/results/TreeCount.css"; // Ensure this file is linked properly

const TreeCountResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, treeCount, annotatedImage } = location.state || {};

  return (
    <div className="tree-count-container">
      <div className="tree-count-card">
        <h1 className="result-title">Tree Count Estimation</h1>

        <div className="image-section">
          {imageUrl && <img src={imageUrl} alt="Uploaded" className="uploaded-image" />}
          {annotatedImage && <img src={annotatedImage} alt="Annotated" className="annotated-image" />}
        </div>

        <h2 className="tree-count-text">Detected Trees: {treeCount}</h2>

        <button className="upload-again-button" onClick={() => navigate("/tree-count")}>
          Upload Another Image
        </button>
      </div>
    </div>
  );
};

export default TreeCountResult;
