import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/animation';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-secondary font-medium rounded-full mb-4">
              Limited Time Offer
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              Secure Your Premium Turmeric Supply for 2024
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Lock in your annual supply of Kandhamal's GI-tagged organic turmeric with our exclusive 
              launch incentives for Middle East buyers. Don't miss this opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
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
                className="w-full sm:w-auto"
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
          
          {/* Countdown */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-elevated max-w-2xl mx-auto" data-aos="fade-up">
            <h3 className="text-lg font-semibold text-secondary mb-4">Offer Expires In:</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-secondary text-white rounded-lg p-3">
                <div className="text-3xl font-bold mb-1">15</div>
                <div className="text-xs text-white/70">Days</div>
              </div>
              <div className="bg-secondary text-white rounded-lg p-3">
                <div className="text-3xl font-bold mb-1">07</div>
                <div className="text-xs text-white/70">Hours</div>
              </div>
              <div className="bg-secondary text-white rounded-lg p-3">
                <div className="text-3xl font-bold mb-1">22</div>
                <div className="text-xs text-white/70">Minutes</div>
              </div>
              <div className="bg-secondary text-white rounded-lg p-3">
                <div className="text-3xl font-bold mb-1">45</div>
                <div className="text-xs text-white/70">Seconds</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Offer valid until August 30th, 2024. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;