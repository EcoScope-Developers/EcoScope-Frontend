import React from "react";
import "../../assets/styles/helpStyles/HelpPage.css";

const HelpPage = () => {
  return (
    <div className="help-container">
      <header className="help-header">
        <h1 className="help_header">Welcome to EcoScope</h1>
        <p>Your guide to exploring and protecting the environment using technology.</p>
      </header>

      <section className="help-section">
        <h2>How to Use Our Website</h2>
        <ul className="help-steps">
          <li>📷 Upload your satellite images for analysis.</li>
          <li>🌳 Use the **Tree Counting Tool** to calculate vegetation density.</li>
          <li>🗺️ Access detailed geospatial data about green cover and deforestation.</li>
          <li>📊 View and download reports for environmental insights.</li>
          <li>🛠️ Customize analysis parameters based on your needs.</li>
        </ul>
      </section>

      <section className="help-section features">
        <h2>Features of EcoScope</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🌍 Real-Time Data</h3>
            <p>Get accurate, real-time updates on environmental conditions.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Advanced Analysis</h3>
            <p>Leverage AI and ML algorithms for better decision-making.</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Detailed Insights</h3>
            <p>Access in-depth reports on tree density, deforestation, and green zones.</p>
          </div>
        </div>
      </section>

      <section className="help-section">
        <h2>Why Choose Us?</h2>
        <p>
          At EcoScope, we bridge the gap between technology and
          environmental conservation. Our mission is to empower individuals,
          organizations, and governments with actionable insights for a
          sustainable future.
        </p>
        <div className="testimonial">
          <p>
            "EcoScope has transformed how we monitor and protect green zones.
            A game-changer for environmental enthusiasts!"
          </p>
          <span>- Environmental Analyst</span>
        </div>
      </section>

      <footer className="help-footer">
        <p>Need more help? <a href="/contact">Contact us</a> for support!</p>
      </footer>
    </div>
  );
};

export default HelpPage;
