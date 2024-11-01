import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Landingpage'; // Make sure this matches the filename
import LoginSignup from './pages/authPages/LoginSignup';
import ResendVerificationPage from './pages/authPages/ResendVerificationPage';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPasswordPage from './pages/authPages/ForgotPasswordPage';
import ResetPasswordPage from './pages/authPages/resetPasswordPage';
import Test from './pages/test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/resend-verification" element={<ResendVerificationPage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
