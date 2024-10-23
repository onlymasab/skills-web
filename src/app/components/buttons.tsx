import React from 'react';

interface ButtonProps {
  children: React.ReactNode;  // The button text or content
  variant?: 'primary' | 'secondary' | 'danger';  // The button style variant
  size?: 'sm' | 'md' | 'lg';  // The size of the button
  icon?: React.ReactNode | null;  // Optional icon for the button
  fill?: 'none' | 'solid';  // Background fill ('none', 'solid', etc.)
  onClick?: () => void;  // Click handler function
  disabled?: boolean;  // Disabled state
  className?: string;  // Additional classes for custom styling
  [key: string]: any;  // Other props for customizability
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  fill = 'none',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  // Style mappings for different variants
  const variantStyles = {
    primary: 'bg-blue-500 text-white border border-blue-500',
    secondary: 'bg-transparent text-blue-500 border border-blue-500',
    danger: 'bg-red-500 text-white border border-red-500',
  };

  // Style mappings for different sizes
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Determine the background fill
  const fillStyle = fill === 'solid' ? 'bg-blue-500 text-white' : 'bg-transparent';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fillStyle}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}
        flex items-center justify-center rounded-md font-bold leading-6 transition duration-200 ease-in-out 
        ${className}
      `}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;