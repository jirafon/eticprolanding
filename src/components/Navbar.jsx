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
      <div
        className="fixed top-0 left-0 w-full flex justify-between items-center px-4 text-black z-30"
        style={{
          backgroundImage: `url(${celeste})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: window.innerWidth < 750 ? '60px' : '96px', // Ajusta la altura para móviles
        }}
      >
        <img
          src={LogoImage}
          alt="Eticpro"
          className="transition-transform duration-300"
          style={{
            width: window.innerWidth < 750 ? '90px' : '230px', // Aumenta el tamaño del logo en móvil (20% más de 70px)
            height: window.innerWidth < 750 ? '20px' : '50px', // Aumenta la altura del logo en móvil (20% más de 28px)
          }}
        />

        <ul className="hidden md:flex items-center space-x-4">
          <li className="p-4">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')}>Inicio</a>
          </li>
          <li className="p-4">
            <a href="#ventajas" onClick={(e) => handleSmoothScroll(e, 'ventajas')}>Ventajas</a>
          </li>
          <li className="p-4">
            <a href="#planes" onClick={(e) => handleSmoothScroll(e, 'planes')}>Planes</a>
          </li>
          <li className="p-4">
            <a href="#FAQ" onClick={(e) => handleSmoothScroll(e, 'FAQ')}>FAQ</a>
          </li>
          <li>
            <button className="nav-button nav-button-entrar" onClick={handleOpenModal}>Entrar</button>
          </li>
          <li>
            <button className="nav-button nav-button-demo" onClick={handleOpenModal}>Solicita un demo</button>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <ul
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
        >
          <li className="p-4">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')}>Inicio</a>
          </li>
          <li className="p-4">
            <a href="#ventajas" onClick={(e) => handleSmoothScroll(e, 'ventajas')}>Ventajas</a>
          </li>
          <li className="p-4">
            <a href="#planes" onClick={(e) => handleSmoothScroll(e, 'planes')}>Planes</a>
          </li>
          <li className="p-4">
            <a href="#FAQ" onClick={(e) => handleSmoothScroll(e, 'FAQ')}>FAQ</a>
          </li>
          <li>
            <button className="nav-button nav-button-entrar" onClick={handleOpenModal}>Entrar</button>
          </li>
          <li>
            <button className="nav-button nav-button-demo" onClick={handleOpenModal}>Solicita un demo</button>
          </li>
        </ul>
      </div>

      {/* Sección de Inicio */}
      <div id="inicio" className="inicio relative min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={unsplash}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ height: '130vh' }} // Ajusta la altura del fondo según sea necesario
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 md:pt-32">
          <div className="text-black mb-8">
            <p className="font-bold text-4xl lg:text-5xl mb-4 px-4 lg:px-[20%] text-center md:leading-tight" style={{ fontSize: '180%', marginTop: '2rem' }}>
              Maneja tus procesos de compliance en un solo lugar, de manera segura.
            </p>
            <p className="text-2xl lg:text-3xl px-4 lg:px-[15%] text-center md:leading-tight" style={{ fontSize: '100%', marginTop: '2rem' }}>
              EticPro es una plataforma de software robusta que simplifica el cumplimiento ético y la gestión de conflictos en tu organización.
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 px-4 lg:px-[15%] mt-8">
            <button className="nav-button nav-button-demo" onClick={handleOpenModal}>
              Solicita un demo
            </button>
            <button className="nav-button nav-button-entrar" onClick={handleOpenModalQuiz}>
              Diagnóstico en Línea
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
                title="Video Eticpro"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <DemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Quiz isOpen={isModalOpenQuiz} onClose={handleCloseModalQuiz} />
    </>
  );
};

export default Navbar;
