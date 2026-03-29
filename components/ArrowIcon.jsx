const ArrowIcon = ({
  rotate = 0,
  color = "var(--light-gray)",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 28 20"
      className={`w-5 h-5 transition-all duration-300 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
