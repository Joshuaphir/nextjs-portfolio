import React from 'react';

const CybersecurityIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="shieldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="lockGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>

      {/* Shield with 3D Effect */}
      <path
        d="M12 2C8.5 2 5 3.2 5 6v5.6c0 5.1 3.5 8.9 7 9.9 3.5-1 7-4.8 7-9.9V6c0-2.8-3.5-4-7-4z"
        fill="url(#shieldGradient)"
        className="shadow-lg"
      />
      <path
        d="M12 2C8.5 2 5 3.2 5 6v1c0 1.2.8 2.3 2 2.8V6c0-1.7 3-2.6 5-2.6s5 .9 5 2.6v3.8c1.2-.5 2-1.6 2-2.8V6c0-2.8-3.5-4-7-4z"
        className="fill-current text-blue-900 opacity-30"
      />

      {/* Lock with 3D Effect */}
      <g transform="translate(0, 2)">
        <rect x="8" y="10" width="8" height="6" rx="1" fill="url(#lockGradient)" />
        <rect x="8" y="10" width="8" height="6" rx="1" className="fill-current text-gray-900 opacity-20" />
        <path
          d="M9.5 10V8a2.5 2.5 0 115 0v2"
          className="stroke-current text-gray-100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Circuit Lines with Highlights */}
      <path
        d="M12 16v2M10 18h4M7 9h10M7 12h10"
        className="stroke-current text-blue-100"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5v2.5M10.5 18h3M7 9h10M7 12h10"
        className="stroke-current text-blue-900 opacity-30"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CybersecurityIcon;
