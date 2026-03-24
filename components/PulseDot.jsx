import React from "react";

const PulseDot = ({ className = "text-green-500" }) => {
  return (
    <span className={`animate-pulse ${className}`}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="0.8em"
        width="0.8em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
      </svg>
    </span>
  );
};

export default PulseDot;