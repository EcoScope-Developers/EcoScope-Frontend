import React from 'react'
import ToolCard from '../../components/Dashboard/Toolcard';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="toolCards">
                <ToolCard title="Tree Count" description="Accurately count trees in designated areas" />
                <ToolCard title="Green Cover Estimator" description="Estimate the green cover percentage" />
                <ToolCard title="Tree Species Identifier" description="Identify different tree species" />
                <ToolCard title="Optimal Pathing" description="Compute optimal path within the area" />
                <ToolCard title="Historical Data" description="Access historical data for analysis" />
            </div>
        </div>
    )
}

export default DashboardContent
