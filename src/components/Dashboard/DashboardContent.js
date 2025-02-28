import React from "react";
import "../../assets/styles/dashboard/Dashboard.css";

const DashboardContent = ({ navigate }) => {  // ✅ Accept navigate prop
  return (
    <div className="dashboard-content">
      <div className="feature-card">
        <h2>Tree Count</h2>
        <p>Accurately count trees in designated areas</p>
        <button onClick={() => navigate("/tree-count")}>View</button>
      </div>

      <div className="feature-card">
        <h2>Green Cover Estimator</h2>
        <p>Estimate the green cover percentage</p>
        <button onClick={() => navigate("/green-cover")}>View</button>
      </div>

      <div className="feature-card">
        <h2>Tree Species Identifier</h2>
        <p>Identify different tree species</p>
        <button onClick={() => navigate("/tree-species")}>View</button>
      </div>

      <div className="feature-card">
        <h2>Optimal Pathing</h2>
        <p>Compute optimal path within the area</p>
        <button onClick={() => navigate("/optimal-path")}>View</button>
      </div>

      <div className="feature-card">
        <h2>Historical Data</h2>
        <p>Access historical data for analysis</p>
        <button onClick={() => navigate("/historical-data")}>View</button>
      </div>
    </div>
  );
};

export default DashboardContent;
