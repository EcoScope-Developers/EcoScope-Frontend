import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../../assets/styles/results/TreeCount.css"; // Reusing the TreeCount styles for consistency

const TreeSpeciesIdentifier = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file)); // Show preview before upload

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/identify-tree-species", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/tree-species-result", {
          state: { imageUrl: URL.createObjectURL(file), species: data.species },
        });
      } else {
        alert(`Error: ${data.error || "Failed to identify species."}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="tree-count-container fade-in"> {/* Reusing the existing container */}
      <div className="tree-count-card"> {/* Keeping card styles consistent */}
        <h1 className="feature-title">Tree Species Identifier</h1>
        <p className="feature-description">Upload an image to identify tree species.</p>

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

export default TreeSpeciesIdentifier;
