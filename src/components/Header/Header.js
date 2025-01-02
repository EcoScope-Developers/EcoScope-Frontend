import React, { useEffect, useState } from 'react';
import '../../assets/styles/headerStyles/Header.css';
import logo from "../../assets/images/logo/Ecoscope.png";
import defaultAvatar from "../../assets/images/logo/User.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',  
    avatar: defaultAvatar, 
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setIsLoggedIn(true);
      fetch(`https://ecoscope-backend.onrender.com/api/fetch/fetch-user-by-userid?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            setUserDetails({
              username: data.user.username,
              avatar: data.user.avatar || defaultAvatar, 
            });
          }
        })
        .catch(error => console.error("Error fetching user details:", error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false); 
    toast.success("Logged out successfully.");
  };

  const navigate = useNavigate();

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <ToastContainer />
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isNavbarExpanded ? 'expanded' : ''}`}>
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="Logo" />
          EcoScope
        </a>
        <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarExpanded ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Gallery</a>
            <a className="nav-item nav-link" href="/about">About Us</a>
            <a className="nav-item nav-link" href="#">Contact</a>
            <a className="nav-item nav-link" href="/help">Help</a>
          </div>
          <div className="ml-auto user-section">
            {isLoggedIn ? (
              <div className="dropdown d-flex align-items-center" onClick={toggleDropdown}>
                <img src={userDetails.avatar} alt="User Avatar" className="avatar rounded-circle" width="40" height="40" />
                <span className="ml-2 text-white">{userDetails.username}</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu show">
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <a className="btn btn-outline-light" href="/login">Login</a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
