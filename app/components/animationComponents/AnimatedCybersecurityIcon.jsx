import React from 'react';
import { motion } from 'framer-motion';
import CybersecurityIcon from '../CybersecurityIcon';


const AnimatedCybersecurityIcon = () => {
    return (
      <motion.div
        className="hidden absolute top-0 left-0 z-10 md:block"
        animate={{
          y: [0, -20, 0], // Keyframes: initial position -> up -> back to initial
        }}
        transition={{
          duration: 1, // Duration of one cycle
          repeat: Infinity, // Repeat indefinitely
          repeatType: "loop", // Loop smoothly
          ease: "easeInOut", // Easing function
        }}
      >
        <CybersecurityIcon />
      </motion.div>
    );
  };
  
  export default AnimatedCybersecurityIcon;
