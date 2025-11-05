// App.js
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from './components/Analytics';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Cards from './components/Cards';
import Help from './components/Help';
import Centre from './components/centre';
import News from './components/News';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Description from './components/Description';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import HelpChatButton from './components/HelpChatButton';

function App() {
  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowContactForm(true);
    }
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div id="inicio" className="inicio" style={{ marginTop: '5%' }}>
      <Navbar handleContactClick={handleContactClick} handleAboutClick={handleAboutClick} />
      <Hero />
      <Description />
      <Analytics />
      <Help />
      <Centre />
      <Features />
      <About ref={aboutRef} />
      <Cards />
      <Clients />
      <Faq />
      <News />
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
