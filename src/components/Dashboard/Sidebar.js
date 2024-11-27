// src/components/Sidebar.js
import React from 'react';
import '../../assets/styles/dashboard/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>EcoScope</h2>
      <ul>
        <li>Profile</li>
        <li>Tree Count</li>
        <li>Green Cover Estimator</li>
        <li>Tree Species Identifier</li>
        <li>Optimal Pathing</li>
        <li>Historical Data</li>
      </ul>
    </div>
  );
};

export default Sidebar;
