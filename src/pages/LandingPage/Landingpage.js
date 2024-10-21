import React from 'react';
import "../../assets/styles/landingPageStyles/LandingPage.css"
import natureVideo from "../../assets/videos/nature.mp4";

const LandingPage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="landingPageContainer">
      {/* Background Video */}
      <video className="video-background" autoPlay loop muted>
        <source src={natureVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <h1 className="header">Welcome to EcoScope</h1>
      <p className="subheader">Your Ecosystem Optimized</p>

      {/* Buttons */}
      <a className="login-button" href="/login">Login / Signup</a>

      <footer className="landing_footer">© {year} EcoScope Developers</footer>
    </div>
  );
};

export default LandingPage;
