import React, { useEffect, useState } from 'react';
import '../../assets/styles/headerStyles/Header.css';
import logo from "../../assets/images/logo/Ecoscope.png";
import defaultAvatar from "../../assets/images/logo/User.png";

const Header = () => {
    const [userDetails, setUserDetails] = useState({
        username: 'John Doe',  // Default username
        avatar: defaultAvatar, // Default avatar
    });

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating user login status

    useEffect(() => {
        // Fetch userId from localStorage
        const userId = localStorage.getItem('userId');
        
        // If userId exists, fetch user details
        if (userId) {
            fetch(`http://localhost:8000/api/fetch/fetch-user-by-userid?userId=${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.user) {
                        // Update state with fetched username and avatar
                        setUserDetails({
                            username: data.user.username,
                            avatar: data.user.avatar || defaultAvatar, // Use default if no avatar is available
                        });
                    }
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                });
        } else {
            console.log("No userId found in localStorage.");
        }
    }, []);

    const handleLogout = () => {
        // Clear the localStorage and update login state
        localStorage.removeItem('userId');
        setIsLoggedIn(false); // Update the login state to false
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-3"
                    alt="Logo"
                />
                EcoScope
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Gallery</a>
                    <a className="nav-item nav-link" href="#">About Us</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
                <div className="ml-auto user-section">
                    {isLoggedIn ? (
                        <div className="dropdown d-flex align-items-center">
                            <img
                                src={userDetails.avatar}
                                alt="User Avatar"
                                className="avatar rounded-circle"
                                width="40"
                                height="40"
                                id="userDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            />
                            <span className="ml-2 text-white">{userDetails.username}</span>
                            <div className="dropdown-menu" aria-labelledby="userDropdown">
                                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    ) : (
                        <a className="btn btn-outline-light" href="/login">Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
