import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    // Toggle between English and Arabic
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    
    // Add RTL class to body when Arabic, remove when English
    if (newLang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/10 text-sm font-medium hover:bg-white/30 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {i18n.language === 'en' ? (
        <>
          <span className="mr-2">العربية</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v4m1.5-4v4" />
          </svg>
        </>
      ) : (
        <>
          <span className="ml-2">English</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v4m1.5-4v4" />
          </svg>
        </>
      )}
    </motion.button>
  );
};

export default LanguageToggle;