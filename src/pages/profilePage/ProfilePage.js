import React, { useState, useEffect, useRef } from 'react';
import "../../assets/styles/profilePageStyles/ProfilePage.css";
import img from "../../assets/images/logo/User.png";
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    profilePicture: '',
    username: '',
    email: '',
    planName: '',
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const fileInputRef = useRef(null);

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

    const requestBody = { currentPassword, newPassword };

    try {
      const response = await fetch(`https://ecoscope-backend.onrender.com/api/auth/update-password?userId=${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();

      if (response.ok) {
        setCurrentPassword('');
        setNewPassword('');
        toast.success("Password updated successfully");
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  // Handle file input click
  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Store selected image for preview
    }
  };

  // Handle saving the profile picture
  const handleSaveProfilePicture = async () => {
    if (!selectedImage) return;

    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', fileInputRef.current.files[0]); // Append the file

    setIsLoading(true); // Show loader

    try {
      const response = await fetch(`https://ecoscope-backend.onrender.com/api/profile/update-avatar?userId=${userId}`, {
        method: 'PUT',
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Profile picture updated successfully");
        window.location.reload(); // Refresh the page after successful update
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error updating profile picture:', error);
      toast.error('Failed to update profile picture');
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="tabs">
          <button className={`tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            Profile Details
          </button>
          <button className={`tab ${activeTab === 'empty' ? 'active' : ''}`} onClick={() => setActiveTab('empty')}>
            My Images
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="profile-details">
            <div className="profile-left-section">
              <div className="profile-picture-wrapper">
                {isLoading ? (
                  <div className="loader"></div> // Show loader when uploading
                ) : (
                  <img src={selectedImage || profile.profilePicture} alt="Profile" className="profile-picture-square" />
                )}
                <button className="edit-icon-btn" onClick={handleEditClick}>
                  <FaPencilAlt />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {selectedImage && (
                <button className="save-profile-btn" onClick={handleSaveProfilePicture}>
                  Save
                </button>
              )}
              <div className="input-group">
                <label>Username</label>
                <input type="text" name="username" value={profile.username} disabled />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" value={profile.email} disabled />
              </div>
              <div className="input-group">
                <label>Plan Name</label>
                <input type="text" name="planName" value={profile.planName} disabled />
              </div>
            </div>
            <div className="profile-right-section">
              <div className="password-update-section">
                <h2>Update Password</h2>
                <div className="input-group">
                  <label>Current Password</label>
                  <input type="password" name="currentPassword" value={currentPassword} onChange={handlePasswordChange} />
                </div>
                <div className="input-group">
                  <label>New Password</label>
                  <input type="password" name="newPassword" value={newPassword} onChange={handlePasswordChange} />
                </div>
                <button onClick={handlePasswordUpdate} className="update-password-btn">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'empty' && <div className="empty-tab">Empty content for now</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
