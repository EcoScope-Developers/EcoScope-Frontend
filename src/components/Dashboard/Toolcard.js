import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/dashboard/Toolcard.css';

const ToolCard = ({ title, description, link }) => {
  const navigate = useNavigate(); // 🔹 Hook for navigation

  return (
    <div className="toolCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="viewButton" onClick={() => navigate(link)}>View</button>
    </div>
  );
};

export default ToolCard;
