// App.js
import React, { useState, useRef } from 'react';
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
      
      {/* Sección de Contacto */}
      <section ref={contactRef} id="contacto" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Contacto Directo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Listo para <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">transformar</span> tu compliance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completa el formulario y nuestro equipo de expertos te contactará en breve
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
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
