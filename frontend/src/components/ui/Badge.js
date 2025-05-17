import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  text, 
  variant = 'default',
  className = '', 
  ...props 
}) => {
  // Determine badge class based on variant
  const getBadgeClass = () => {
    switch(variant) {
      case 'primary':
        return 'bg-primary text-secondary';
      case 'secondary':
        return 'bg-secondary text-white';
      case 'accent':
        return 'bg-accent-secondary text-white';
      case 'outline':
        return 'bg-transparent border border-primary text-secondary';
      default:
        return 'bg-neutral-light text-neutral-dark border border-gray-200';
    }
  };

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeClass()} ${className}`}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {text}
    </motion.span>
  );
};

export default Badge;