import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoImage from '../assets/eticprov23.png';
import unsplash from '../assets/fondo-hero@2x.png';
import DemoModal from './Demo'; // Import the modal component
import Quiz from './Quiz'; // Import the modal component
import celeste from '../assets/celeste.png';
import inter from '../assets/inter.webloc'; // Ajusta la ruta según sea necesario
// Importa la fuente en tu archivo JavaScript (por ejemplo, index.js o App.js)
import '@fontsource/inter/400.css'; // Importa el peso de la fuente que necesitas
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isModalOpenQuiz, setIsModalOpenQuiz] = useState(false); // State to manage modal visibility

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

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleOpenModalQuiz = () => {
    setIsModalOpenQuiz(true); // Open the modal
  };

  const handleCloseModalQuiz = () => {
    setIsModalOpenQuiz(false); // Close the modal
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full flex justify-between items-center px-4 text-black z-30"
        style={{
          backgroundImage: `url(${celeste})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: window.innerWidth < 750 ? '60px' : '96px', // Ajusta la altura para móviles
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
          <img
            src={LogoImage}
            alt="Logo de Eticpro"
            className="transition-transform duration-300 hover:scale-105"
            style={{
              width: window.innerWidth < 750 ? '90px' : '230px',
              height: window.innerWidth < 750 ? '20px' : '50px',
            }}
          />
        </a>

        <ul className="hidden md:flex items-center space-x-4" role="menubar">
          <li role="none">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className="p-4 hover:text-blue-600 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </a>
          </li>
          <li role="none">
            <a 
              href="#aboutus" 
              onClick={(e) => handleSmoothScroll(e, 'aboutus')}
              className="p-4 hover:text-blue-600 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección quienes somos"
            >
              Quienes Somos
            </a>
          </li>
          <li role="none">
            <a 
              href="#planes" 
              onClick={(e) => handleSmoothScroll(e, 'planes')}
              className="p-4 hover:text-blue-600 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de planes"
            >
              Planes
            </a>
          </li>
          <li role="none">
            <a 
              href="#FAQ" 
              onClick={(e) => handleSmoothScroll(e, 'FAQ')}
              className="p-4 hover:text-blue-600 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              FAQ
            </a>
          </li>
          <li role="none">
            <button 
              className="nav-button nav-button-entrar" 
              onClick={handleLogin}
              aria-label="Acceder a la plataforma Eticpro"
            >
              Iniciar Sesión
            </button>
          </li>
          <li role="none">
            <button 
              className="nav-button nav-button-demo" 
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              Contáctenme
            </button>
          </li>
        </ul>

        <button 
          onClick={handleNav} 
          className="block md:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded transition-colors duration-200"
          aria-label={nav ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={nav}
          aria-controls="mobile-menu"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          style={{
            backgroundImage: `url(${unsplash})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            left: nav ? '0' : '-100%',
            width: '60%',
            textAlign: 'center',
            position: 'fixed',
            top: '0',
            height: '100%',
            transition: 'left 0.5s ease-in-out',
          }}
          className="z-20"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <li role="none">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className="block p-4 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              role="menuitem"
            >
              Inicio
            </a>
          </li>
          <li role="none">
            <a 
              href="#ventajas" 
              onClick={(e) => handleSmoothScroll(e, 'ventajas')}
              className="block p-4 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              role="menuitem"
            >
              Ventajas
            </a>
          </li>
          <li role="none">
            <a 
              href="#planes" 
              onClick={(e) => handleSmoothScroll(e, 'planes')}
              className="block p-4 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              role="menuitem"
            >
              Planes
            </a>
          </li>
          <li role="none">
            <a 
              href="#FAQ" 
              onClick={(e) => handleSmoothScroll(e, 'FAQ')}
              className="block p-4 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              role="menuitem"
            >
              FAQ
            </a>
          </li>
          <li role="none" className="p-4">
            <button 
              className="nav-button nav-button-entrar w-full" 
              onClick={handleLogin}
              aria-label="Acceder a la plataforma Eticpro"
            >
              Iniciar Sesión
            </button>
          </li>
          <li role="none" className="p-4">
            <button 
              className="nav-button nav-button-demo w-full" 
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              Contáctenme
            </button>
          </li>
        </ul>
      </nav>

      {/* Sección de Inicio */}
      <section id="inicio" className="inicio relative min-h-screen bg-white overflow-hidden" role="banner" aria-label="Página principal">
        <div className="absolute inset-0 z-0">
          <img
            src={unsplash}
            alt="Fondo de la página principal de Eticpro"
            className="w-full h-full object-cover"
            style={{ height: '130vh' }}
            loading="eager"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 md:pt-32">
          <header className="text-black mb-8">
            <h1 className="font-bold text-4xl lg:text-5xl mb-4 px-4 lg:px-[20%] text-center md:leading-tight" style={{ fontSize: '180%', marginTop: '2rem' }}>
              Maneja tus procesos de compliance en un solo lugar, de manera segura.
            </h1>
            <p className="text-2xl lg:text-3xl px-4 lg:px-[15%] text-center md:leading-tight" style={{ fontSize: '100%', marginTop: '2rem' }}>
              Eticpro es una plataforma de software robusta que simplifica el cumplimiento ético y la gestión de conflictos en tu organización.
            </p>
          </header>
          <div className="flex flex-wrap justify-center space-x-4 px-4 lg:px-[15%] mt-8">
            <button 
              className="nav-button nav-button-demo" 
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              Contáctenme
            </button>
          </div>
          {/* Video Section */}
          <div className="relative z-20 w-full flex justify-center mt-12">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '40vh', width: '70%' }}>
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
        </div>
      </section>

      {/* Render the modal */}
      <DemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Quiz isOpen={isModalOpenQuiz} onClose={handleCloseModalQuiz} />
    </>
  );
};

export default Navbar;
