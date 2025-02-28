import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/features/FeaturePages.css"
import "../../assets/styles/results/TreeSpeciesIdentifier.css";

const TreeSpeciesIdentifier = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const identifySpecies = async () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://127.0.0.1:5000/identify-tree-species", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.species) {
        navigate("/tree-species-result", {
          state: { imageUrl: URL.createObjectURL(selectedImage), species: data.species },
        });
      } else {
        alert("No species identified.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to server.");
    }
  };

  return (
    <div className="feature-container fade-in">
      <h1 className="feature-title">Tree Species Identifier</h1>
      <p className="feature-description">Upload an image to identify tree species.</p>

      <input type="file" accept="image/*" onChange={handleFileChange} className="upload-input" />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="preview-image" />}
      
      <button className="upload-button" onClick={identifySpecies}>Identify Species</button>
    </div>
  );
};

export default TreeSpeciesIdentifier;
