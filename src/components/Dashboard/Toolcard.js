import React from "react";
import "../../assets/styles/dashboard/Toolcard.css";

const ToolCard = ({ title, description, path }) => {
  const handleClick = () => {
    if (path === "/green-cover") {
      document.getElementById("fileInput").click();
    } else {
      window.location.href = path;
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/process-green-cover", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert(`Green Cover Percentage: ${data.green_cover_percentage.toFixed(2)}%`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="toolCard">  
      {/* Title and Description as in your working version */}
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Button with correct styling */}
      <button className="viewButton" onClick={handleClick}>View</button>

      {/* Conditionally render hidden file input */}
      {path === "/green-cover" && (
        <input 
          type="file" 
          id="fileInput" 
          style={{ display: "none" }} 
          onChange={handleFileChange} 
        />
      )}
    </div>
  );
};

export default ToolCard;
