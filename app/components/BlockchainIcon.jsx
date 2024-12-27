import React from 'react';

const BlockchainIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="blockchainGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Blocks */}
      <rect x="4" y="4" width="6" height="6" fill="url(#blockchainGradient)" />
      <rect x="14" y="4" width="6" height="6" fill="url(#blockchainGradient)" />
      <rect x="4" y="14" width="6" height="6" fill="url(#blockchainGradient)" />
      <rect x="14" y="14" width="6" height="6" fill="url(#blockchainGradient)" />

      {/* Connections */}
      <path
        d="M10 7h4M10 17h4M7 10v4M17 10v4"
        className="stroke-current text-gray-300"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BlockchainIcon;
