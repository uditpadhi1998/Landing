import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/animation';

const IncentivesSection = () => {
  const { t } = useTranslation();

  const incentives = [
    {
      id: 'bulk-discount',
      title: t('incentives.bulk'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      badgeText: '10% OFF',
    },
    {
      id: 'early-payment',
      title: t('incentives.payment'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      badgeText: '5% EXTRA',
    },
    {
      id: 'loyalty-rebate',
      title: t('incentives.loyalty'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      badgeText: '2% ANNUAL',
    },
    {
      id: 'free-logistics',
      title: t('incentives.logistics'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
        </svg>
      ),
      badgeText: 'FREE SHIPPING',
    }
  ];

  return (
    <section id="incentives" className="py-20 bg-secondary relative">
      {/* Background pattern for depth */}
      <div className="absolute inset-0 pattern-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium inline-block mb-2">
              Exclusive for UAE, Qatar & KSA Buyers
            </span>
            <h2 className="heading-secondary text-white mb-4">{t('incentives.title')}</h2>
            <p className="text-white/70">
              Take advantage of our special launch incentives designed specifically for our Middle Eastern partners.
              Limited time offers to boost your margins and enhance competitiveness.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {incentives.map((incentive, index) => (
            <Card
              key={incentive.id}
              variant="elevated"
              className="border-t-4 border-primary relative overflow-visible"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Badge */}
              <div className="absolute -top-5 right-4 bg-primary text-secondary font-bold px-4 py-2 rounded-full text-sm shadow-elevated">
                {incentive.badgeText}
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                {incentive.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {incentive.title.split(':')[0]}:
              </h3>
              <p className="text-gray-600">
                {incentive.title.split(':')[1]}
              </p>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <motion.div
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="mx-auto px-8"
            >
              Claim Your Incentives Now
            </Button>
          </motion.div>
          <p className="text-white/50 text-sm mt-4">
            *Offers valid until August 30th, 2024. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;