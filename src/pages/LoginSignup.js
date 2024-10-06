import React, { useEffect, useState } from "react";
import '../assets/styles/authStyles/style.css';
import { Link } from "react-router-dom";
import log from "../assets/images/auth/log.svg"
import register from "../assets/images/auth/register.svg"

function LoginSignup() {

  const [isSignUpMode, setIsSignUpMode] = useState(false);


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  }

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  }

  return (
    <>
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <input type="submit" defaultValue="Login" className="btn1 solid" />
              {/* <Link to="#" className="forgetPass">Forgot password?</Link> */}
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">


                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-github" />
                </a>
              </div>
            </form>
            <form className="sign-up-form" >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" name="name"/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email"/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <input type="submit" className="btn1" defaultValue="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">


                <a href="#" className="social-icon">
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
              <h3>New here ?</h3>
              <p>
              Begin the journey to empower forest conservation through automated tree enumeration and insightful analytics.
              </p>
              <button className="btn1 transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            {/* <img src={log} className="image" alt="" /> */}
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
              Welcome back! Take another step toward preserving nature and empowering our planet.
              </p>
              <button className="btn1 transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            {/* <img src={register} className="image" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}


export default LoginSignup;