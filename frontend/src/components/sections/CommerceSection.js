import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const CommerceSection = () => {
  const { t } = useTranslation();

  const commerceOptions = [
    {
      id: 'payment',
      title: t('commerce.payment'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      ),
      description: 'Choose payment terms that align with your business cash flow. We offer flexible NET-30, NET-60, or Letter of Credit arrangements tailored to your needs.',
    },
    {
      id: 'installment',
      title: t('commerce.installment'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      description: 'First-time buyers can benefit from our installment plans with 25% down payment and the balance due before shipment, easing your initial procurement.',
    },
    {
      id: 'insurance',
      title: t('commerce.insurance'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      description: 'Our partnership with the Export Credit Guarantee Corporation provides trade credit insurance, minimizing risk and ensuring secure transactions.',
    },
  ];

  return (
    <section id="commerce" className="section-padding bg-neutral-light relative">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/5 -skew-x-12 transform origin-bottom-right z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: Visual */}
          <div className="relative" data-aos="fade-right">
            <div className="relative rounded-xl overflow-hidden shadow-elevated">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="Business meeting"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-elevated max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary">Trade Security</h3>
              </div>
              <p className="text-sm text-gray-600">
                All transactions secured with comprehensive credit protection and risk mitigation protocols
              </p>
            </div>
            
            <div className="absolute -top-5 right-0 transform translate-x-1/3 bg-white px-4 py-2 rounded-lg shadow-soft text-center">
              <span className="block text-xs text-gray-500">Trade Volume</span>
              <span className="block text-lg font-bold text-secondary">$2.4M</span>
              <span className="block text-xs text-green-500">↑ 32% YoY</span>
            </div>
          </div>
          
          {/* Right column: Commerce Options */}
          <div>
            <div data-aos="fade-left">
              <h2 className="heading-secondary text-secondary mb-4">{t('commerce.title')}</h2>
              <p className="text-gray-600 mb-8">
                We understand the unique needs of Middle Eastern importers and have designed flexible commerce options 
                to facilitate smooth business transactions and long-term partnerships.
              </p>
            </div>
            
            <div className="space-y-6">
              {commerceOptions.map((option, index) => (
                <Card
                  key={option.id}
                  variant="subtle"
                  className="border-l-4 border-primary"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="heading-tertiary text-secondary mb-2">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-soft" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-semibold text-secondary mb-3">
                Currency Options
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-secondary/5 px-4 py-2 rounded-lg flex items-center">
                  <span className="text-secondary font-medium mr-2">USD</span>
                  <span className="text-xs text-gray-500">$ US Dollar</span>
                </div>
                <div className="bg-secondary/5 px-4 py-2 rounded-lg flex items-center">
                  <span className="text-secondary font-medium mr-2">AED</span>
                  <span className="text-xs text-gray-500">د.إ UAE Dirham</span>
                </div>
                <div className="bg-secondary/5 px-4 py-2 rounded-lg flex items-center">
                  <span className="text-secondary font-medium mr-2">SAR</span>
                  <span className="text-xs text-gray-500">﷼ Saudi Riyal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommerceSection;