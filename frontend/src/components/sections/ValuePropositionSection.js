import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const ValuePropositionSection = () => {
  const { t } = useTranslation();

  const valueProps = [
    {
      id: 'gi-tag',
      title: t('valueProps.giTag'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
      description: 'Geographical Indication guarantees authentic Kandhamal origin, known for its exceptional quality and natural cultivation techniques.',
      image: 'https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 'organic',
      title: t('valueProps.organic'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      ),
      description: 'Dual certified by USDA Organic and FSSAI, ensuring the highest standards of organic cultivation and food safety.',
      image: 'https://images.pexels.com/photos/4046615/pexels-photo-4046615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 'shelf-life',
      title: t('valueProps.shelfLife'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      description: 'Advanced vacuum-sealed packaging preserves flavor, color, and active compounds for up to 40 years, maintaining premium quality.',
      image: 'https://images.pexels.com/photos/4113779/pexels-photo-4113779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 'halal',
      title: t('valueProps.halal'),
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      description: 'Fully Halal-certified processing facilities ensure our products meet all Islamic dietary requirements for Middle Eastern markets.',
      image: 'https://images.pexels.com/photos/4113263/pexels-photo-4113263.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
  ];

  return (
    <section id="about" className="section-padding relative bg-neutral-light">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-secondary text-secondary mb-4">{t('valueProps.title')}</h2>
          <p className="text-gray-600">
            Our premium turmeric adheres to the highest international standards, 
            ensuring unmatched quality and purity for our Middle Eastern partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-fade-in">
          {valueProps.map((prop, index) => (
            <Card
              key={prop.id}
              variant="glass"
              className="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="heading-tertiary text-secondary mb-2">{prop.title}</h3>
                  <p className="text-gray-600 mb-4">{prop.description}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <div className="h-48 rounded-lg overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;