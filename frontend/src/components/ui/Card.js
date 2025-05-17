import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  className = '', 
  ...props 
}) => {
  // Determine card class based on variant
  const getCardClass = () => {
    switch(variant) {
      case 'glass':
        return 'glass-card';
      case 'elevated':
        return 'bg-white shadow-elevated';
      case 'bordered':
        return 'bg-white border border-gray-200';
      case 'subtle':
        return 'bg-neutral-light/50';
      default:
        return 'bg-white shadow-soft';
    }
  };

  return (
    <motion.div
      className={`rounded-xl overflow-hidden p-6 ${getCardClass()} ${className}`}
      whileHover={{ y: -5, boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05)' }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;