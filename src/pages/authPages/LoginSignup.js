import React, { useState } from "react";
import '../../assets/styles/authStyles/style.css';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../../utils/loader";

function LoginSignup() {
  const navigate = useNavigate(); // Get the navigate function

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const onSuccess = async (response) => {
    setLoading(true);

    // Open the Google authentication URL in a new window
    const popup = window.open('https://ecoscope-backend.onrender.com/api/auth/google', 'GoogleLogin', 'width=600,height=600');

    // Polling interval to check if popup is closed
    const popupChecker = setInterval(() => {
      if (popup.closed) {
        clearInterval(popupChecker);
        setLoading(false);
        toast.error('Login was canceled.');
      }
    }, 500);

    // Listen for messages from the popup window
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://ecoscope-backend.onrender.com') return;

      const responseData = event.data;
      console.log(responseData);

      clearInterval(popupChecker); // Stop checking once we receive a message

      if (responseData.status) {
        // console.log('User Data:', responseData.user);
        localStorage.setItem('userId', responseData.user._id);
        // localStorage.setItem('user', JSON.stringify(responseData.user));

        toast.success('Login Successful!');
        window.location.href = '/home';
        setLoading(false);
      } else {
        setLoading(false);
        toast.error('Login failed. Please try again.');
      }
    });
  };

  const onFailure = (error) => {
    //console.error('Login Failed:', error);
    console.error('Google login failed:', error);
    toast.error('Google login failed. Please try again.');

    // toast.error("Login failed. Please try again.");
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  }

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
  
    try {
      const response = await fetch('https://ecoscope-backend.onrender.com/api/auth/register', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || 'Signup successful!');
        // Clear form fields
        setFormData({
          email: '',
          password: '',
          username: ''
        });
        // navigate("/test"); // Redirect if necessary
      } else {
        toast.error(data.message || 'Signup failed');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
  
    try {
      const response = await fetch('https://ecoscope-backend.onrender.com/api/auth/login', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      const data = await response.json();
      const userId = data.userId;
      
      if (response.ok) {
        localStorage.setItem('userId', userId);
        toast.success(data.message || 'Login successful!');
        // Clear form fields
        setFormData({
          email: '',
          password: '',
          username: ''
        });
        navigate("/home"); // Redirect to /test after login
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  

  return (
    <>
    <ToastContainer />
        {isLoading ? (
       <Loader/>
      ) : (
      
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">

            {/* Sign In Form */}
            <form className="sign-in-form" onSubmit={handleLoginSubmit}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <input type="submit" className="btn1 solid" disabled={isLoading} />
              <Link className="forgot_password" to="/forgot-password">Forgot Password</Link>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                {/* <a href="https://ecoscope-backend.onrender.com/api/auth/google" className="social-icon"> */}
                <a href="#" className="social-icon" onClick={() => onSuccess()}>
                  <i className="fab fa-google"/>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>

            {/* Sign Up Form */}
            <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <input type="submit" className="btn1" disabled={isLoading} />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="https://ecoscope-backend.onrender.com/api/auth/google" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content new_signup">
              <h3>New here?</h3>
              <p className="new_signup">
                Begin the journey to empower forest conservation through automated tree enumeration and insightful analytics.
              </p>
              <button className="btn1 transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Welcome back! Take another step toward preserving nature and empowering our planet.
              </p>
              <button className="btn1 transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      )
        }
    </>
  );
}

export default LoginSignup;
