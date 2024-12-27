import React from 'react';

const DatabaseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="dbGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>

      {/* Database Shape */}
      <ellipse cx="12" cy="5" rx="7" ry="3" fill="url(#dbGradient)" />
      <path
        d="M5 5v7c0 1.1 2.7 2 7 2s7-.9 7-2V5"
        className="stroke-current text-blue-300"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5 12v5c0 1.1 2.7 2 7 2s7-.9 7-2v-5"
        className="stroke-current text-blue-300"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export default DatabaseIcon;
