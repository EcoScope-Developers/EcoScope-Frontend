import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/dashboard/Toolcard.css';

const ToolCard = ({ title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if the link starts with http or https (external)
    if (link.startsWith('http')) {
      window.open(link, '_blank'); // open in new tab
    } else {
      navigate(link); // internal route
    }
  };

  return (
    <div className="toolCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="viewButton" onClick={handleClick}>View</button>
    </div>
  );
};

export default ToolCard;
