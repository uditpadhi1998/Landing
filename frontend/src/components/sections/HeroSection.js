import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/animation';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pattern-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-4">
              <motion.span 
                className="inline-block px-3 py-1 bg-primary/20 text-secondary text-sm font-medium rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                GI-Tagged • Premium Quality
              </motion.span>
            </div>
            
            <h1 className="heading-primary mb-4 text-secondary">
              {t('hero.headline')}
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              {t('hero.subheadline')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                }
              >
                {t('cta.primary')}
              </Button>
              
              <Button 
                variant="secondary"
                onClick={() => scrollToSection('samples')}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                }
              >
                {t('cta.secondary')}
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Image - Split Screen */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-elevated">
              {/* Split screen effect with overlay */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative overflow-hidden">
                  {/* Turmeric field image */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1599909331322-28c0856db5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')` 
                  }}>
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden">
                  {/* Modern packaging image */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: `url('https://images.pexels.com/photos/4046556/pexels-photo-4046556.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` 
                  }}>
                    <div className="absolute inset-0 bg-secondary/30"></div>
                  </div>
                </div>
              </div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl max-w-md text-center transform rotate-2 shadow-elevated">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-secondary mb-2">Kandhamal Turmeric</h3>
                  <p className="text-sm md:text-base text-secondary/80">GI-Certified Organic Excellence, ethically sourced from the heart of Odisha</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-elevated flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Curcumin Content</p>
                <p className="text-sm font-semibold text-secondary">5% Guaranteed</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-elevated flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Authenticity</p>
                <p className="text-sm font-semibold text-secondary">GI-Tagged</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;