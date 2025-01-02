// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import '../../assets/styles/dashboard/Dashboard.css';
import DashboardContent from '../../components/Dashboard/DashboardContent';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardContent/>
      {/* <div className="main"> */}
        {/* <Header title="EcoScope Dashboard" /> */}
        
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
