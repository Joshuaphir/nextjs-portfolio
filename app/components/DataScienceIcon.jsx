import React from 'react';

const DataScienceIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#9D2A71" />
        </linearGradient>
        <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>

      {/* 3D Bars */}
      <rect
        x="6"
        y="20"
        width="4"
        height="8"
        rx="1"
        fill="url(#barGradient)"
        className="shadow-lg"
      />
      <rect
        x="14"
        y="14"
        width="4"
        height="14"
        rx="1"
        fill="url(#barGradient)"
        className="shadow-lg"
      />
      <rect
        x="22"
        y="10"
        width="4"
        height="18"
        rx="1"
        fill="url(#barGradient)"
        className="shadow-lg"
      />

      {/* Circular Chart */}
      <circle
        cx="16"
        cy="8"
        r="5"
        fill="url(#circleGradient)"
        className="shadow-xl"
      />
      <path
        d="M16 3a5 5 0 00-5 5h5V3z"
        className="fill-current text-white opacity-50"
      />
      <path
        d="M16 3a5 5 0 00-3 8.7"
        className="stroke-current text-gray-300"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Axes */}
      <path
        d="M5 30h24M6 5v26"
        className="stroke-current text-gray-300"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DataScienceIcon;
