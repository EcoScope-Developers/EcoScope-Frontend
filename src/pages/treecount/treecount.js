import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../../assets/styles/results/TreeCount.css";

const TreeCount = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [annotatedImage, setAnnotatedImage] = useState(null);
  const [treeCount, setTreeCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
    setTreeCount(null);
    setAnnotatedImage(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file); // backend expects "image"

    try {
      const response = await fetch("https://ecoscope-ml.onrender.com/tree-count", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        setTreeCount(data.tree_count);
        setAnnotatedImage(`data:image/jpeg;base64,${data.annotated_image_base64}`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tree-count-container fade-in">
      <div className="tree-count-card">
        <h1 className="feature-title">Tree Count Estimator</h1>
        <p className="feature-description">Upload an image to count the trees in the given area.</p>

        {/* Upload Section */}
        <div className="upload-box">
          <input type="file" id="file-upload" accept="image/*" onChange={handleFileChange} hidden />
          <label htmlFor="file-upload" className="upload-label">
            <FaCloudUploadAlt size={40} />
            <span>Click to Upload Image</span>
          </label>
        </div>

        {/* Preview before upload */}
        {selectedImage && (
          <div className="preview-section">
            <h3>Original Image Preview:</h3>
            <img src={selectedImage} alt="Original Preview" className="preview-image" />
          </div>
        )}

        {/* Loading state */}
        {loading && <p>Processing image, please wait...</p>}

        {/* Results */}
        {treeCount !== null && (
          <div className="results-section">
            <h3>Tree Count: {treeCount}</h3>
            {annotatedImage && (
              <div>
                <h4>Annotated Output:</h4>
                <img src={annotatedImage} alt="Annotated Result" className="annotated-image" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeCount;
