import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../../assets/styles/results/OptimalPath.css"; 

const OptimalPath = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file)); // Show preview before upload

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/process-optimal-path", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        navigate("/optimal-path-result", {
          state: { imageUrl: URL.createObjectURL(file), optimalPath: data.path, distance: data.distance },
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  const planName = localStorage.getItem("planName");

  if (!planName || planName.trim().toLowerCase() === "smart") {
    return (
      <div className="tree-count-container fade-in">
        <div className="tree-count-card">
          <h1 className="feature-title">Tree Species Identifier</h1>
          <p className="feature-description">🚫 You need to upgrade to the <strong>Pro or Premium Plan</strong> to use this feature.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="optimal-path-container fade-in">
      <div className="optimal-path-card">
        <h1 className="feature-title">Optimal Path Finder</h1>
        <p className="feature-description">Upload an image to find the best path.</p>

        {/* Upload Section */}
        <div className="upload-box">
          <input type="file" id="file-upload" accept="image/*" onChange={handleFileChange} hidden />
          <label htmlFor="file-upload" className="upload-label">
            <FaCloudUploadAlt size={40} />
            <span>Click to Upload Image</span>
          </label>
        </div>

        {/* Show preview if an image is selected */}
        {selectedImage && (
          <div className="preview-section">
            <img src={selectedImage} alt="Preview" className="preview-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OptimalPath;
