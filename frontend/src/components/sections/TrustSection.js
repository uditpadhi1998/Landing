import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const TrustSection = () => {
  const { t } = useTranslation();
  
  const buyerLogos = [
    {
      id: 'buyer1',
      name: 'Dubai Spice Imports LLC',
      logo: 'https://placehold.co/200x80/FFFFFF/013220?text=Dubai+Spice+Imports'
    },
    {
      id: 'buyer2',
      name: 'Royal Food Industries',
      logo: 'https://placehold.co/200x80/FFFFFF/013220?text=Royal+Food+Industries'
    },
    {
      id: 'buyer3',
      name: 'Al-Qassim Trading Co.',
      logo: 'https://placehold.co/200x80/FFFFFF/013220?text=Al-Qassim+Trading'
    },
    {
      id: 'buyer4',
      name: 'Gulf Spice Consortium',
      logo: 'https://placehold.co/200x80/FFFFFF/013220?text=Gulf+Spice+Consortium'
    },
    {
      id: 'buyer5',
      name: 'Doha Natural Food Supplies',
      logo: 'https://placehold.co/200x80/FFFFFF/013220?text=Doha+Natural+Foods'
    }
  ];
  
  // Shipment data for live tracker
  const recentShipments = [
    {
      id: 'ship1',
      destination: 'Jebel Ali Port, Dubai',
      quantity: '5,000 kg',
      status: 'Delivered',
      date: 'June 15, 2024'
    },
    {
      id: 'ship2',
      destination: 'Hamad Port, Doha',
      quantity: '3,200 kg',
      status: 'In Transit',
      date: 'July 2, 2024'
    },
    {
      id: 'ship3',
      destination: 'King Abdullah Port, KSA',
      quantity: '4,500 kg',
      status: 'Processing',
      date: 'July 10, 2024'
    }
  ];

  return (
    <section id="trust" className="section-padding bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-secondary text-secondary mb-4">{t('trust.title')}</h2>
            <p className="text-gray-600">
              Join the growing network of satisfied Middle Eastern importers who rely on our premium turmeric 
              for their quality-conscious consumer base.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side: Testimonial */}
          <Card
            variant="glass"
            className="relative p-8"
            data-aos="fade-right"
          >
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary flex items-center justify-center rounded-full shadow-elevated">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="mb-6 pt-4">
              <p className="text-xl text-secondary italic">
                "{t('trust.testimonial')}"
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-cover bg-center mr-4" style={{ 
                  backgroundImage: `url('https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')` 
                }}></div>
                <div>
                  <p className="font-medium text-secondary">{t('trust.testimonialName')}</p>
                  <p className="text-sm text-gray-500">Leading Distributor in UAE</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-gray-500">Purity Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3+ yrs</p>
                <p className="text-xs text-gray-500">Partnership</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12 tons</p>
                <p className="text-xs text-gray-500">Annual Volume</p>
              </div>
            </div>
          </Card>
          
          {/* Right side: Live Shipment Tracker */}
          <div data-aos="fade-left">
            <h3 className="heading-tertiary text-secondary mb-4">
              Live Shipment Tracker
            </h3>
            <p className="text-gray-600 mb-6">
              Track our recent exports to the Middle East region, demonstrating our 
              consistent supply chain reliability.
            </p>
            
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <div 
                  key={shipment.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 flex items-center shadow-soft"
                >
                  <div className="w-3 h-3 rounded-full mr-3" style={{ 
                    backgroundColor: shipment.status === 'Delivered' 
                      ? '#10B981' 
                      : shipment.status === 'In Transit' 
                        ? '#F59E0B' 
                        : '#6366F1'
                  }}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-secondary">{shipment.destination}</p>
                      <p className="text-sm text-gray-500">{shipment.date}</p>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-600">{shipment.quantity}</p>
                      <p className="text-sm" style={{ 
                        color: shipment.status === 'Delivered' 
                          ? '#10B981' 
                          : shipment.status === 'In Transit' 
                            ? '#F59E0B' 
                            : '#6366F1'
                      }}>{shipment.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mb-8">
          <h3 className="heading-tertiary text-center text-secondary mb-8">
            {t('trust.suppliers')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {buyerLogos.map((buyer, index) => (
              <div 
                key={buyer.id}
                className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center h-24 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img 
                  src={buyer.logo} 
                  alt={buyer.name}
                  className="max-h-16 max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-light/50 p-6 rounded-xl text-center" data-aos="fade-up" data-aos-delay="0">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">100% Secure Transactions</h3>
            <p className="text-sm text-gray-600">All orders backed by secure payment protocols and delivery guarantees</p>
          </div>
          
          <div className="bg-neutral-light/50 p-6 rounded-xl text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">Dedicated Account Manager</h3>
            <p className="text-sm text-gray-600">Each Middle Eastern client is assigned a dedicated account manager fluent in Arabic</p>
          </div>
          
          <div className="bg-neutral-light/50 p-6 rounded-xl text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">Consistent Year-Round Supply</h3>
            <p className="text-sm text-gray-600">Guaranteed inventory levels throughout the year to meet your regular stocking needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;