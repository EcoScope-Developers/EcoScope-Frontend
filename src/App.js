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
import PricingPlans from './pages/pricingPlansPage/PricingPlans';
import NotFoundPage from './pages/errorPage/NotFoundPage';
import GreenCover from './pages/greencover/greencover.js';
import TreeCount from './pages/treecount/treecount.js';
import TreeSpeciesIdentifier from "./pages/treeSpecies/TreeSpecies.js";  // ✅ Updated
import OptimalPath from "./pages/optimalPath/OptimalPath";
import HistoricalData from "./pages/historicalData/HistoricalData";

// ✅ Import result pages
import GreenCoverResult from "./pages/results/GreenCoverResult"; 
import OptimalPathResult from "./pages/results/OptimalPathResult";
import TreeCountResult from "./pages/results/TreeCountResult";
import TreeSpeciesResult from "./pages/results/TreeSpeciesResult";  // ✅ Added Tree Species Result

import "./App.css";

function Layout() {
  const location = useLocation();

  // Hide Header and Footer for "/" and "/login"
  const showHeaderFooter = location.pathname === '/home' || location.pathname === '/about' || location.pathname === '/help' || location.pathname === '/plans' || location.pathname === '/test';

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        {/* ✅ Tool Pages */}
        <Route path="/tree-count" element={<TreeCount />} />
        <Route path="/green-cover" element={<GreenCover />} />
        <Route path="/tree-species" element={<TreeSpeciesIdentifier />} />  {/* ✅ Updated */}
        <Route path="/optimal-path" element={<OptimalPath />} />
        <Route path="/historical-data" element={<HistoricalData />} />

        {/* ✅ Result Pages */}
        <Route path="/green-cover-result" element={<GreenCoverResult />} />
        <Route path="/optimal-path-result" element={<OptimalPathResult />} />
        <Route path="/tree-count-result" element={<TreeCountResult />} />
        <Route path="/tree-species-result" element={<TreeSpeciesResult />} />  {/* ✅ Newly Added */}

        {/* ✅ Existing Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/resend-verification" element={<ResendVerificationPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/plans" element={<PricingPlans />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showHeaderFooter && <Footer />}
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
