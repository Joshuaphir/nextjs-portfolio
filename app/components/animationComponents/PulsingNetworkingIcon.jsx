import React from 'react';
import { motion } from 'framer-motion';
import NetworkingIcon from '../NetworkingIcon';

const PulsingNetworkingIcon = () => {
  return (
    <motion.div
      className="hidden absolute top-0 left-0 z-10 md:block"
      animate={{
        scale: [1, 1.4, 1], 
      }}
      transition={{
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut", 
      }}
    >
      <NetworkingIcon />
    </motion.div>
  );
};

export default PulsingNetworkingIcon;
