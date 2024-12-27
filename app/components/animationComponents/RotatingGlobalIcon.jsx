import React from 'react';
import { motion } from 'framer-motion';
import GlobeIcon from '../GlobeIcon';

const RotatingGlobalIcon = () => {
  return (
    <motion.div
      className="hidden absolute top-0 left-0 z-10 md:block"
      animate={{
        rotateY: [0, 360], 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear", 
      }}
    >
      <GlobeIcon />
    </motion.div>
  );
};

export default RotatingGlobalIcon;
