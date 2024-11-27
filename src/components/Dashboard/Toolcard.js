// src/components/ToolCard.js
import React from 'react';
import '../../assets/styles/dashboard/Toolcard.css';

const ToolCard = ({ title, description }) => {
  return (
    <div className="toolCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="viewButton">View</button>
    </div>
  );
};

export default ToolCard;
