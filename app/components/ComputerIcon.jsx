import React from 'react';

const ComputerIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="standGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="baseGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#9D2A71" />
        </linearGradient>
      </defs>

      {/* Computer Screen */}
      <rect
        x="6"
        y="4"
        width="20"
        height="14"
        rx="2"
        fill="url(#screenGradient)"
        className="shadow-lg"
      />
      <rect
        x="7"
        y="5"
        width="18"
        height="12"
        rx="1.5"
        className="fill-current text-gray-100"
        opacity="0.15"
      />

      {/* Stand */}
      <rect
        x="13"
        y="18"
        width="6"
        height="3"
        rx="1"
        fill="url(#standGradient)"
        className="shadow-md"
      />

      {/* Base */}
      <rect
        x="8"
        y="22"
        width="16"
        height="2"
        rx="1"
        fill="url(#baseGradient)"
        className="shadow-md"
      />

      {/* Details and Highlights */}
      <path
        d="M7 5h18v12H7z"
        className="stroke-current text-gray-300"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.25"
      />
      <path
        d="M13 20h6M9 24h14"
        className="stroke-current text-gray-400"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ComputerIcon;
