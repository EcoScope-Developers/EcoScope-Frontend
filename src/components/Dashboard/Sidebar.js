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
      {/* <div className="footer">Footer Content</div> */}
    </div>
  );
};

export default Sidebar;
