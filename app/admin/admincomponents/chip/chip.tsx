import React from "react";

type ChipProps = {
  variant?: "default" | "success";
  onClick?: () => void;
  children: React.ReactNode;
};

const variantStyles = {
  default: "bg-gray-200 text-gray-900",
  success: "bg-orange-600 text-white px-4",
};

export const Chip: React.FC<ChipProps> = ({
  variant = "default",
  onClick,
  children,
}) => {
  const chipStyle = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full cursor-pointer ${chipStyle} transition-colors duration-300 hover:${
        variant === "default" ? "bg-gray-300" : "bg-orange-600 px-2"
      }`}
    >
      {children}
    </button>
  );
};
