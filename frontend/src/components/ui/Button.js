import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  // Determine button class based on variant
  const getButtonClass = () => {
    switch(variant) {
      case 'secondary':
        return 'secondary-btn';
      case 'tertiary':
        return 'tertiary-btn';
      default:
        return 'primary-btn';
    }
  };

  return (
    <motion.button
      className={`${getButtonClass()} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
      {children}
      {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;