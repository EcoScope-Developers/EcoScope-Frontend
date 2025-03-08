import React from 'react'
import ToolCard from '../../components/Dashboard/Toolcard';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="toolCards">
                <ToolCard title="Tree Count" description="Accurately count trees in designated areas" link="/tree-count" />
                <ToolCard title="Green Cover Estimator" description="Estimate the green cover percentage" link="/green-cover"/>
                <ToolCard title="Tree Species Identifier" description="Identify different tree species" link="/tree-species"/>
                <ToolCard title="Optimal Pathing" description="Compute optimal path within the area" link="/optimal-path"/>
                <ToolCard title="Historical Data" description="Access historical data for analysis" link="/historical-data"/>
            </div>
        </div>
    )
}

export default DashboardContent
