import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../../assets/styles/dashboard/Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Track active item

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="dashboard-wrapper">
      <div className={`icon-strip ${isSidebarOpen ? "expanded" : ""}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
        <ul>
          {[ 
            { icon: "🏠", label: "Home", to: "/home" },
            { icon: "👤", label: "Profile", to: "/profile" },
            { icon: "💸", label: "Pricing Plans", to: "/plans" }, 
            { icon: "🌳", label: "Tree Count", to: "/tree-count" },
            { icon: "📊", label: "Green Cover", to: "/green-cover" },
            { icon: "🧬", label: "Species", to: "/tree-species" },
            { icon: "🛣️", label: "Optimal Path", to: "/optimal-path" },
            { icon: "📈", label: "Historical Data", to: "/historical-data" },
            { icon: "🌦️", label: "Current Weather", to: "https://present-weather-info.netlify.app" },
            {/* { icon: "🛠️", label: "Tools", to: "/tools" }, */},
            {/* { icon: "📜", label: "History", to: "/history" }, */},
          ].map((item) => (
            <li
              key={item.label}
              className={activeItem === item.label ? "active" : ""}
              onClick={() => handleItemClick(item.label)}
            >
              <Link to={item.to}> {/* Use Link component for navigation */}
                <span className="icon">{item.icon}</span>
                {isSidebarOpen && <span className="text">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
