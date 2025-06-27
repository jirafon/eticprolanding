import React, { useState } from 'react';
import unsplash from '../assets/fondo-hero@2x.png';
import Description from './Description'; // Import the Description component

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    window.location.replace('https://compliax.onrender.com');
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
            Eticpro: Plataforma de Compliance y Gestión Ética Empresarial
          </h1>
          <p className="text-2xl lg:text-3xl px-4 lg:px-[15%] leading-relaxed" style={{ fontSize: '100%', marginTop: '2rem' }}>
            Maneja tus procesos de compliance en un solo lugar, de manera segura.
            Eticpro es una plataforma de software robusta que simplifica el cumplimiento ético y la gestión de conflictos en tu organización.
          </p>
        </header>

        <div className="flex flex-wrap justify-center space-x-4 px-4 lg:px-[15%] mt-8">
          <button 
            className="nav-button nav-button-demo" 
            onClick={handleLogin}
            aria-label="Contactar con Eticpro"
          >
            Contáctenme
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
    </section>
  );
};

export default Hero;
