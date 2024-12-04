import React, { useState } from 'react';
import '../../assets/styles/authStyles/forgotPassword.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Loader from "../../utils/loader";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }
    setEmail('');
    try {
      // Send a POST request to backend for password reset
      const response = await axios.post('https://ecoscope-backend.onrender.com/api/auth/send-reset-link', { email });
      // const response = await axios.post('http://localhost:8000/api/auth/send-reset-link', { email });
      if (response.status === 200) {
        toast.success('Password reset link has been sent to your email');
      }
    } catch (error) {
      // Handle errors if the API request fails
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Error sending reset link');
      } else {
        toast.error('Server error, please try again later');
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="forgot-password-container">
          <div className="forgot-password-card">
            <h2 className="forgot-password-title">Forgot Password?</h2>
            <p className="forgot-password-subtext">
              Enter your email, and we'll send you instructions to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">Send Reset Link</button>
            </form>
          </div>
        </div>
      )
      }
    </>
  );
};

export default ForgotPasswordPage;
