import React from 'react';
import ToolCard from '../../components/Dashboard/Toolcard';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="toolCards">
        <ToolCard title="Tree Count" description="Accurately count trees in designated areas" path="/tree-count" />
        <ToolCard title="Green Cover Estimator" description="Estimate the green cover percentage" path="/green-cover" />
        <ToolCard title="Tree Species Identifier" description="Identify different tree species" path="/tree-species" />
        <ToolCard title="Optimal Pathing" description="Compute optimal path within the area" path="/optimal-path" />
        <ToolCard title="Historical Data" description="Access historical data for analysis" path="/historical-data" />
      </div>
    </div>
  );
};

export default DashboardContent;
