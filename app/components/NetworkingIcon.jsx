import React from 'react';

const NetworkingIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="networkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>

      {/* Central Node */}
      <circle cx="12" cy="12" r="3" fill="url(#networkGradient)" />
      
      {/* Connections */}
      <path
        d="M12 15v3M12 9V6M15 12h3M9 12H6"
        className="stroke-current text-blue-100"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Outer Nodes */}
      <circle cx="12" cy="3" r="2" className="fill-current text-gray-300" />
      <circle cx="12" cy="21" r="2" className="fill-current text-gray-300" />
      <circle cx="3" cy="12" r="2" className="fill-current text-gray-300" />
      <circle cx="21" cy="12" r="2" className="fill-current text-gray-300" />
    </svg>
  );
};

export default NetworkingIcon;
