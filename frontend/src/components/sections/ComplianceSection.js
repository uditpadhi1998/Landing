import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ComplianceSection = () => {
  const { t } = useTranslation();

  const complianceFeatures = [
    {
      id: 'reach',
      title: t('compliance.reach'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      description: 'Full compliance with European REACH regulations and Emirates Authority for Standardization and Metrology requirements.',
    },
    {
      id: 'aflatoxin',
      title: t('compliance.aflatoxin'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      description: 'Guaranteed aflatoxin levels below 5 ppb with contractual penalty clauses for non-compliance.',
    },
    {
      id: 'blockchain',
      title: t('compliance.blockchain'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      description: 'Immutable blockchain ledger tracking complete product journey from cultivation to delivery.',
    },
  ];

  return (
    <section id="certification" className="section-padding bg-secondary relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Compliance Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-secondary text-white mb-4">{t('compliance.title')}</h2>
              <p className="text-white/70 mb-10">
                Our turmeric meets and exceeds all import requirements for Middle Eastern markets.
                We provide comprehensive documentation and guarantee regulatory compliance.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {complianceFeatures.map((feature, index) => (
                <Card
                  key={feature.id}
                  variant="default"
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-10">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
              >
                Download Compliance Documentation
              </Button>
            </div>
          </div>
          
          {/* Right side: Blockchain Traceability Demo */}
          <div className="bg-white rounded-xl overflow-hidden shadow-elevated" data-aos="fade-left">
            <div className="p-6 bg-secondary">
              <h3 className="text-xl font-semibold text-white mb-2">
                Blockchain Traceability
              </h3>
              <p className="text-white/70 text-sm">
                Scan any product batch to verify its complete journey from farm to shelf
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-neutral-light/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-secondary">Sample Batch: KT-2024-06-15-A</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                </div>
                
                <div className="space-y-4">
                  {/* Timeline events */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-0.5 bg-gray-200 h-full"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-secondary">Harvested</p>
                      <p className="text-xs text-gray-500">March 15, 2024 - Kandhamal, Odisha</p>
                      <p className="text-xs text-gray-600 mt-1">Harvested by traditional farmers using organic methods</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-0.5 bg-gray-200 h-full"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-secondary">Processed</p>
                      <p className="text-xs text-gray-500">March 20, 2024 - Processing Facility</p>
                      <p className="text-xs text-gray-600 mt-1">Cleaned, boiled, dried and ground following Halal protocols</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-0.5 bg-gray-200 h-full"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-secondary">Quality Testing</p>
                      <p className="text-xs text-gray-500">March 25, 2024 - Laboratory</p>
                      <p className="text-xs text-gray-600 mt-1">Curcumin content: 5.2%, Aflatoxin: &lt;2 ppb</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-0.5 bg-gray-200 h-0"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-secondary">Packaged & Shipped</p>
                      <p className="text-xs text-gray-500">April 2, 2024 - Export Terminal</p>
                      <p className="text-xs text-gray-600 mt-1">Vacuum-sealed and shipped with temperature control</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600">Blockchain Verified</span>
                </div>
                
                <button className="text-sm text-primary font-medium">
                  View Full Chain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;