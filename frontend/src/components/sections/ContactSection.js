import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        message: '',
      });
    }, 1000);
  };

  const countries = [
    'United Arab Emirates',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Jordan',
    'Lebanon',
    'Other'
  ];

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute left-0 top-0 w-full h-80 bg-secondary z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side: Contact info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="heading-secondary text-secondary mb-6">{t('cta.primary')}</h2>
                  <p className="text-gray-600 mb-8">
                    Get in touch with our export team to discuss your specific requirements, 
                    pricing details, and contract terms. We're committed to building long-term 
                    partnerships with Middle Eastern buyers.
                  </p>
                </motion.div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Email Us</h3>
                      <p className="text-gray-600">exports@kandhamalturmeric.com</p>
                      <p className="text-gray-600">support@kandhamalturmeric.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Visit Us</h3>
                      <p className="text-gray-600">Kandhamal Apex Spices Association for Marketing,</p>
                      <p className="text-gray-600">Phulbani, Kandhamal District,</p>
                      <p className="text-gray-600">Odisha, India - 762001</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-neutral-light/50 rounded-xl border border-gray-200" data-aos="fade-up">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Download Resources</h3>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
                    >
                      <svg className="w-8 h-8 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-secondary">Product Catalog PDF</p>
                        <p className="text-xs text-gray-500">4.2 MB</p>
                      </div>
                    </a>
                    
                    <a 
                      href="#" 
                      className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
                    >
                      <svg className="w-8 h-8 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-secondary">{t('cta.tertiary')}</p>
                        <p className="text-xs text-gray-500">2.8 MB</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right side: Contact form */}
              <div data-aos="fade-left">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your request has been submitted successfully. Our export team will contact you within 24 hours.
                    </p>
                    <Button 
                      variant="secondary"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">{t('form.name')} *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="form-label">{t('form.company')} *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-input"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="form-label">{t('form.email')} *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">{t('form.phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="form-label">{t('form.country')} *</label>
                      <select
                        id="country"
                        name="country"
                        className="form-input"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select Country --</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="form-label">{t('form.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="form-input resize-none"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <Button 
                        type="submit"
                        className="w-full sm:w-auto"
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                          </svg>
                        }
                      >
                        {t('form.submit')}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Card component specifically for the contact section
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-elevated overflow-hidden ${className}`}>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default ContactSection;