import React, { useState, useEffect } from 'react';
import "../../assets/styles/profilePageStyles/ProfilePage.css";
import img from "../../assets/images/logo/User.png";
import { FaPencilAlt } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'empty'
  const [profile, setProfile] = useState({
    profilePicture: '',
    username: '',
    email: '',
    planName: '',
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`https://ecoscope-backend.onrender.com/api/fetch/fetch-user-by-userid?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          setProfile({
            profilePicture: data.user.avatar || img,
            username: data.user.username,
            email: data.user.email,
            planName: data.user.plan,
          });
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  const handlePasswordChange = (e) => {
    if (e.target.name === 'currentPassword') {
      setCurrentPassword(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  };

  const handlePasswordUpdate = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    const requestBody = {
      currentPassword: currentPassword,
      newPassword: newPassword
    };

    try {
      const response = await fetch(`http://localhost:8000/api/auth/update-password?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();

      if (response.ok) {
        setCurrentPassword('');
        setNewPassword('');
        alert("Password updated successfully")
        // toast.success("Password updated successfully");
      } else {
        alert(`Error: ${result.message}`)
        // toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('An error occurred. Please try again.')
      // toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="profile-container">
      {/* <ToastContainer /> */}
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Details
          </button>
          <button
            className={`tab ${activeTab === 'empty' ? 'active' : ''}`}
            onClick={() => setActiveTab('empty')}
          >
            My Images
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="profile-details">
            <div className="profile-left-section">
              <div className="profile-picture-wrapper">
                <img src={profile.profilePicture} alt="Profile" className="profile-picture-square" />
                <button className="edit-icon-btn">
                  <FaPencilAlt />
                </button>
              </div>
              <div className="input-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  disabled
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  disabled
                />
              </div>
              <div className="input-group">
                <label>Plan Name</label>
                <input
                  type="text"
                  name="planName"
                  value={profile.planName}
                  disabled
                />
              </div>
            </div>
            <div className="profile-right-section">
              <div className="password-update-section">
                <h2>Update Password</h2>
                <div className="input-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="input-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button onClick={handlePasswordUpdate} className="update-password-btn">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'empty' && (
          <div className="empty-tab">
            Empty content for now
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
