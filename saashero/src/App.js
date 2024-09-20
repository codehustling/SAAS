import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Hero';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';  // Import the Pricing component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />   {/* Hero page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
        <Route path="/pricing" element={<Pricing />} />  {/* Pricing page */}
      </Routes>
    </Router>
  );
}

export default App;
