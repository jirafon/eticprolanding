import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import unsplash from '../assets/fondo-hero@2x.png';
import Description from './Description'; // Import the Description component
import ContactForm from './ContactForm'; // Import ContactForm for modal

const Hero = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    window.location.replace('https://compliax.onrender.com');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNav(false); // Close the mobile menu after clicking the link
  };

  return (
    <section id="inicio" className="inicio relative h-screen bg-white overflow-hidden" role="banner" aria-label="Página principal">
      <div className="absolute inset-0 z-0">
        <img
          src={unsplash}
          alt="Fondo de la página principal de Eticpro"
          className="w-full h-full object-cover"
          style={{ height: '130vh' }}
          loading="eager"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <header className="text-black mb-8">
          <h1 className="font-bold text-4xl lg:text-5xl mb-4 px-4 lg:px-[20%] leading-tight" style={{ fontSize: '300%' }}>
            {t('hero.title')}
          </h1>
          <p className="text-2xl lg:text-3xl px-4 lg:px-[15%] leading-relaxed" style={{ fontSize: '100%', marginTop: '2rem' }}>
            {t('hero.subtitle')}
          </p>
        </header>

        <div className="flex flex-wrap justify-center space-x-4 px-4 lg:px-[15%] mt-8">
          <button 
            className="nav-button nav-button-demo" 
            onClick={handleOpenModal}
            aria-label="Contactar con Eticpro"
          >
            {t('hero.contactButton')}
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative z-20 w-full flex justify-center mt-12">
        <div style={{ position: 'relative', paddingBottom: '39.375%', height: 0, width: '80%' }}>
          <iframe
            allow="autoplay; gyroscope; fullscreen;"
            allowFullScreen
            src="https://www.kapwing.com/e/65931ff121b875ab8f832aa1"
            style={{ border: '0', height: '100%', width: '100%', position: 'absolute', top: '0' }}
            title="Video demostrativo de Eticpro - Plataforma de Compliance"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      <Description />
      
      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={handleCloseModal}></div>
            <div className="inline-block w-full max-w-6xl p-2 sm:p-4 my-4 sm:my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
