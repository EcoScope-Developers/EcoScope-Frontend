import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landingpage'; // Make sure this matches the filename
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;
