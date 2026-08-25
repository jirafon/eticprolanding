// App.js
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from './components/Analytics';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Help from './components/Help';
import Centre from './components/centre';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import HelpChatButton from './components/HelpChatButton';
import SeoHead from './components/SeoHead';
import LanguageSync from './components/LanguageSync';

function App() {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowContactForm(true);
    }
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="inicio" style={{ marginTop: '5%' }}>
      <LanguageSync />
      <SeoHead />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        {t('a11y.skipToContent', 'Saltar al contenido')}
      </a>
      <Navbar handleContactClick={handleContactClick} />
      <main>
        <Hero />
        <Analytics />
        <Help />
        <Centre />
        <Features />
        <Clients />
        <Faq />
      </main>
      <WhatsAppButton />
      <HelpChatButton />
      
      <Footer />
      
      {/* Modal de Contacto (opcional) */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={handleCloseContactForm}></div>
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button
                  onClick={handleCloseContactForm}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
