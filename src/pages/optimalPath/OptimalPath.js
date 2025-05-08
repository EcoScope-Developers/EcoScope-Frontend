import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../../assets/styles/results/OptimalPath.css";

const OptimalPath = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const planName = localStorage.getItem("planName");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
    setLoading(true);
    setResultImage(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/compute_optimal_path", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        setLoading(false);
        return;
      }
      
      const data = await response.json();
      setResultImage(`data:image/jpeg;base64,${data.result_image}`);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  if (!planName || planName.trim().toLowerCase() === "smart") {
    return (
      <div className="tree-count-container fade-in">
        <div className="tree-count-card">
          <h1 className="feature-title">Optimal Path Finder</h1>
          <p className="feature-description">
            🚫 You need to upgrade to the <strong>Pro or Premium Plan</strong> to use this feature.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="optimal-path-container fade-in">
      <div className="optimal-path-card">
        <h1 className="feature-title">Optimal Path Finder</h1>
        <p className="feature-description">Upload an image to find the best path.</p>

        <div className="upload-box">
          <input type="file" id="file-upload" accept="image/*" onChange={handleFileChange} hidden />
          <label htmlFor="file-upload" className="upload-label">
            <FaCloudUploadAlt size={40} />
            <span>Click to Upload Image</span>
          </label>
        </div>

        {selectedImage && (
          <div className="preview-section">
            <p>Original Image Preview:</p>
            <img src={selectedImage} alt="Preview" className="preview-image" />
          </div>
        )}

        {loading && <p className="loading-text">Processing image to compute optimal path...</p>}

        {resultImage && (
          <div className="preview-section">
            <p>Optimal Path Result:</p>
            <img src={resultImage} alt="Result" className="preview-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OptimalPath;
