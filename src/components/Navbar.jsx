import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoImage from '../assets/eticprov23.png';
import unsplash from '../assets/fondo-hero@2x.png';
import ContactForm from './ContactForm'; // Import the new contact form
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
          <li role="none">
            <button 
              className="block w-full p-4 text-left hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              onClick={handleLogin}
              aria-label="Acceder a la plataforma Eticpro"
            >
              Iniciar Sesión
            </button>
          </li>
          <li role="none">
            <button 
              className="block w-full p-4 text-left hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              Contáctenme
            </button>
          </li>
        </ul>
      </nav>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={handleCloseModal}></div>
            <div className="inline-block w-full max-w-full sm:max-w-6xl p-2 sm:p-4 my-4 sm:my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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

      {/* Quiz Modal */}
      {isModalOpenQuiz && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={handleCloseModalQuiz}></div>
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModalQuiz}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <Quiz onClose={handleCloseModalQuiz} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
