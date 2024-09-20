import React from 'react';
import { motion } from 'framer-motion';  // Import motion for animations
import Sidebar from './Sidebar';
import Header from './Header';
import AutomateButton from './AutomateButton';
import NewVideoButton from './NewVideoButton';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        {/* Sidebar with slide-in animation */}
        <motion.div
          initial={{ x: -300 }}  // Sidebar starts off-screen to the left
          animate={{ x: 0 }}  // Slides in to the correct position
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Sidebar />
        </motion.div>

        <div className="main-content">
          <AutomateButton />
          <NewVideoButton />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
