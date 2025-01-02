import React, { useState } from "react";
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
            { icon: "🏠", label: "Home" },
            { icon: "🌳", label: "Tree Count" },
            { icon: "📊", label: "Green Cover" },
            { icon: "🧬", label: "Species" },
            { icon: "🛠️", label: "Tools" },
            { icon: "📜", label: "History" },
          ].map((item) => (
            <li
              key={item.label}
              className={activeItem === item.label ? "active" : ""}
              onClick={() => handleItemClick(item.label)}
            >
              <span className="icon">{item.icon}</span>
              {isSidebarOpen && <span className="text">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
