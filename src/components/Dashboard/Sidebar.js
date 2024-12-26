import React, { useState } from "react";
import "../../assets/styles/dashboard/Sidebar.css";
import ToolCard from '../../components/Dashboard/Toolcard';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <div className={`icon-strip ${isSidebarOpen ? "expanded" : ""}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
        <ul>
          <li>
            <span className="icon">🏠</span>
            {isSidebarOpen && <span className="text">Home</span>}
          </li>
          <li>
            <span className="icon">🌳</span>
            {isSidebarOpen && <span className="text">Tree Count</span>}
          </li>
          <li>
            <span className="icon">📊</span>
            {isSidebarOpen && <span className="text">Green Cover</span>}
          </li>
          <li>
            <span className="icon">🧬</span>
            {isSidebarOpen && <span className="text">Species</span>}
          </li>
          <li>
            <span className="icon">🛠️</span>
            {isSidebarOpen && <span className="text">Tools</span>}
          </li>
          <li>
            <span className="icon">📜</span>
            {isSidebarOpen && <span className="text">History</span>}
          </li>
        </ul>
      </div>

      <div className="dashboard-content">
      <div className="toolCards">
          <ToolCard title="Tree Count" description="Accurately count trees in designated areas" />
          <ToolCard title="Green Cover Estimator" description="Estimate the green cover percentage" />
          <ToolCard title="Tree Species Identifier" description="Identify different tree species" />
          <ToolCard title="Optimal Pathing" description="Compute optimal path within the area" />
          <ToolCard title="Historical Data" description="Access historical data for analysis" />
        </div>
      </div>

      {/* <div className="footer">Footer Content</div> */}
    </div>
  );
};

export default Sidebar;
