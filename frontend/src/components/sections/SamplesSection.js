import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const SamplesSection = () => {
  const { t } = useTranslation();

  const sampleFeatures = [
    {
      id: 'free-samples',
      title: t('samples.free'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      ),
    },
    {
      id: 'shipping',
      title: t('samples.shipping'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      ),
    },
    {
      id: 'lab-test',
      title: t('samples.labTest'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
    },
    {
      id: 'qr-code',
      title: t('samples.qrCode'),
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
        </svg>
      ),
    },
  ];

  const sampleVariants = [
    {
      id: 'raw-powder',
      name: 'Raw Turmeric Powder',
      description: 'Fine-ground pure turmeric powder with 5% curcumin content',
      image: 'https://images.pexels.com/photos/4198234/pexels-photo-4198234.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'finger-whole',
      name: 'Whole Turmeric Fingers',
      description: 'Whole dried turmeric fingers with natural color and aroma',
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'extract',
      name: 'Turmeric Extract',
      description: 'Concentrated turmeric extract with 95% curcuminoids',
      image: 'https://images.pexels.com/photos/4198014/pexels-photo-4198014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
  ];

  return (
    <section id="samples" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: Try Before You Buy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-secondary text-secondary mb-4">{t('samples.title')}</h2>
              <p className="text-gray-600 mb-8">
                We're confident in the exceptional quality of our turmeric. Request complimentary samples to experience 
                our premium product firsthand before making your bulk purchase decision.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {sampleFeatures.map((feature, index) => (
                <div 
                  key={feature.id}
                  className="flex items-start space-x-3"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium text-secondary">{feature.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10 mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Quality Assurance Protocol
              </h3>
              <p className="text-gray-600 text-sm">
                Each sample includes comprehensive lab testing results verifying curcumin content, 
                microbial analysis, and heavy metal screening. Our transparent approach gives you 
                complete confidence in our product quality.
              </p>
            </div>
            
            <Button
              className="w-full sm:w-auto"
            >
              Request Free Samples Now
            </Button>
          </div>
          
          {/* Right column: Sample variants */}
          <div>
            <div className="bg-neutral-light/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Available Sample Variants
              </h3>
              
              <div className="space-y-6">
                {sampleVariants.map((variant, index) => (
                  <Card
                    key={variant.id}
                    variant="bordered"
                    className="p-0 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <div className="h-40 sm:h-full bg-cover bg-center" style={{ backgroundImage: `url(${variant.image})` }}></div>
                      </div>
                      <div className="sm:w-2/3 p-6">
                        <h4 className="font-semibold text-secondary mb-2">{variant.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">{variant.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-secondary bg-primary/10 px-2 py-1 rounded">
                            1kg Sample Available
                          </span>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            <span className="ml-2 text-sm font-medium text-gray-600">Select</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Select up to 3 sample variants for free shipping
                </p>
                <div className="flex justify-center">
                  <div className="h-24 w-24 bg-white p-2 rounded-lg shadow-sm flex items-center justify-center">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://kandhamalturmeric.com/qr" 
                      alt="QR Code"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Scan to view our farm-to-packaging video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamplesSection;