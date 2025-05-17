import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
import IncentivesSection from './components/sections/IncentivesSection';
import SamplesSection from './components/sections/SamplesSection';
import CommerceSection from './components/sections/CommerceSection';
import TrustSection from './components/sections/TrustSection';
import ComplianceSection from './components/sections/ComplianceSection';
import ContactSection from './components/sections/ContactSection';
import CtaSection from './components/sections/CtaSection';

function App() {
  const { i18n } = useTranslation();

  // Set direction based on language
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ValuePropositionSection />
        <IncentivesSection />
        <SamplesSection />
        <CommerceSection />
        <TrustSection />
        <ComplianceSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;