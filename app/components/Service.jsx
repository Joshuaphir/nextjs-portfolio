"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CircularProgressBar = ({ value, color, label }) => {
  return (
    <div className="relative w-24 h-24">
      <svg className="transform -rotate-90" width="96" height="96" viewBox="0 0 36 36">
        <circle
          className="text-gray-200"
          strokeWidth="3.8"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
        <motion.circle
          className={color}
          strokeWidth="3.8"
          strokeDasharray="100"
          strokeDashoffset={100 - value}
          strokeLinecap="round"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 100 - value }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold">{value}%</span>
      </div>
      <p className="mt-2 text-center text-sm font-medium">{label}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    { name: 'Database Management', progress: 90, color: 'text-blue-500 stroke-blue-500' },
    { name: 'Web Development', progress: 95, color: 'text-purple-500 stroke-purple-500' },
    { name: 'Networking', progress: 80, color: 'text-yellow-500 stroke-yellow-500' },
    { name: 'Computer Security', progress: 88, color: 'text-red-500 stroke-red-500' },
  ];

  return (
    <section className="my-5 py-5 sm:py-12 bg-[#2E5077] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className='text-white mb-4 text-3xl text-center sm:text-4xl lg:text-5xl font-semiboldbold'>My Services</h2>
        <p className="text-gray-300 sm:text-start text-center text-base sm:text-lg mb-6 lg:text-xl">
        I specialize in database management, web development, networking, and computer security, 
        delivering tailored, efficient solutions to meet your needs.
        </p>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CircularProgressBar
                value={service.progress}
                color={service.color}
                label={service.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
