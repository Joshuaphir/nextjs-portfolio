import React from 'react';

const GlobeIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={`h-8 w-8 ${className || ''}`}
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="globeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>

      {/* Globe Circle */}
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="url(#globeGradient)"
        className="shadow-lg"
      />
      
      {/* Grid Lines */}
      <circle
        cx="16"
        cy="16"
        r="10"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="1.5"
        className="opacity-80"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="1"
        className="opacity-60"
      />
      
      {/* Horizontal Grid */}
      <path
        d="M4 16c0-6.5 4.5-12 12-12s12 5.5 12 12"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="1.5"
        className="opacity-70"
      />
      <path
        d="M16 4c-6.5 0-12 4.5-12 12"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="1"
        className="opacity-60"
      />

      {/* Additional Grid Detail */}
      <path
        d="M12 16c0 2.5 3.5 5 7 5s7-2.5 7-5c0-2.5-3.5-5-7-5s-7 2.5-7 5z"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="1.5"
        className="opacity-50"
      />

      {/* Small Shadow Details */}
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="none"
        stroke="black"
        strokeWidth="0.5"
        opacity="0.3"
        className="shadow-xl"
      />
    </svg>
  );
};

export default GlobeIcon;
