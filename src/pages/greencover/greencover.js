import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../../assets/styles/features/FeaturePages.css";
import "../../assets/styles/results/GreenCover.css"; 

const GreenCover = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file)); // Show preview before upload

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://ecoscope-ml.onrender.com/process-green-cover", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        navigate("/green-cover-result", {
          state: { imageUrl: URL.createObjectURL(file), greenCoverPercentage: data.green_cover_percentage },
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="green-cover-container fade-in">
      <div className="green-cover-card">
        <h1 className="feature-title">Green Cover Estimator</h1>
        <p className="feature-description">Analyze the percentage of green cover in a given location.</p>

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

export default GreenCover;
