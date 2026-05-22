import React from 'react';

export default function ItalkiLogo({ className = "w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 25,10 L 95,10 Q 110,10 110,25 L 110,35 Q 110,50 95,50 L 90,50 L 90,62 L 75,50 L 25,50 Q 10,50 10,35 L 10,25 Q 10,10 25,10 Z" 
        fill="white" 
        stroke="#F54A4A" 
        strokeWidth="6" 
        strokeLinejoin="round" 
        strokeLinecap="round"
      />
      <text 
        x="59" 
        y="39" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontWeight="800" 
        fontSize="30" 
        fill="#F54A4A" 
        textAnchor="middle" 
        letterSpacing="-0.2"
      >
        italki
      </text>
    </svg>
  );
}
