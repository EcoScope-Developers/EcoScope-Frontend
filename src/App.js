import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/Landingpage';
import LoginSignup from './pages/authPages/LoginSignup';
import ResendVerificationPage from './pages/authPages/ResendVerificationPage';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPasswordPage from './pages/authPages/ForgotPasswordPage';
import ResetPasswordPage from './pages/authPages/resetPasswordPage';
import Test from './pages/test';
import AboutUs from './pages/aboutPage/AboutUs';
import HelpPage from './pages/helppage/HelpPage';
import Header from './components/Header/Header';
import Dashboard from './pages/dashboard/Dashbord';

import "./App.css"

function Layout() {
  const location = useLocation();

  // Hide Header and Footer for "/" and "/login"
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resend-verification" element={<ResendVerificationPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpPage />} />

        <Route path="/test" element={<Test />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
