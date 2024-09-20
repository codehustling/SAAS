import React from 'react';
import { motion } from 'framer-motion';
import '../styles/NewVideoButton.css';

function NewVideoButton() {
  return (
    <motion.button whileHover={{ scale: 1.1 }} className="new-video-button">
      New Video
    </motion.button>
  );
}

export default NewVideoButton;


