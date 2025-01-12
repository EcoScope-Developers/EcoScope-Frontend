import React, { useState } from 'react';
import "../../assets/styles/profilePageStyles/ProfilePage.css";
import img from "../../assets/images/team/tushar.jpeg";
import { FaPencilAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'empty'

  const [profile, setProfile] = useState({
    profilePicture: img,
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    planName: 'Premium',
  });
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleProfilePictureChange = () => {
    // Logic to update profile picture
  };

  const handlePasswordChange = (e) => {
    if (e.target.name === 'currentPassword') {
      setCurrentPassword(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  };

  const handlePasswordUpdate = () => {
    setIsPasswordEditing(true);
    // Logic to update password
  };

  return (
    <div className="profile-container">
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
                <button onClick={handleProfilePictureChange} className="edit-icon-btn">
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
                    disabled={!isPasswordEditing}
                  />
                </div>
                <div className="input-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handlePasswordChange}
                    disabled={!isPasswordEditing}
                  />
                </div>
                <button onClick={handlePasswordUpdate} className="update-password-btn">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'empty' && (
          <div className="empty-tab">
            {/* Empty content for now */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
