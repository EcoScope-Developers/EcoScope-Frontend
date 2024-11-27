// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import ToolCard from '../../components/Dashboard/Toolcard';
import '../../assets/styles/dashboard/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        {/* <Header title="EcoScope Dashboard" /> */}
        <div className="toolCards">
          <ToolCard title="Tree Count" description="Accurately count trees in designated areas" />
          <ToolCard title="Green Cover Estimator" description="Estimate the green cover percentage" />
          <ToolCard title="Tree Species Identifier" description="Identify different tree species" />
          <ToolCard title="Optimal Pathing" description="Compute optimal path within the area" />
          <ToolCard title="Historical Data" description="Access historical data for analysis" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
