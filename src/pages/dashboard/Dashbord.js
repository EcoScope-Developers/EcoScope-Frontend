import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import Sidebar from '../../components/Dashboard/Sidebar';
import '../../assets/styles/dashboard/Dashboard.css';
import DashboardContent from '../../components/Dashboard/DashboardContent';

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="dashboard">
      <Sidebar /> {/* ✅ Sidebar remains intact */}
      <div className="main-content">
       
        <DashboardContent navigate={navigate} /> {/* ✅ Pass navigate to child component */}
      </div>
    </div>
  );
};

export default Dashboard;
