import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../assets/eticprov23.png';
import ContactForm from './ContactForm'; // Import the new contact form
import Quiz from './Quiz'; // Import the modal component
import { normalizeLang, pathForLang } from '../seo';
// Importa la fuente en tu archivo JavaScript (por ejemplo, index.js o App.js)
import '@fontsource/inter/400.css'; // Importa el peso de la fuente que necesitas
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isModalOpenQuiz, setIsModalOpenQuiz] = useState(false); // State to manage modal visibility
  const currentLang = normalizeLang(i18n.resolvedLanguage || i18n.language);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    navigate(pathForLang(lang));
    setNav(false);
  };

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

  const handleCloseModalQuiz = () => {
    setIsModalOpenQuiz(false); // Close the modal
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="glass-nav fixed top-0 left-0 w-full z-30"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] md:h-[88px] flex justify-between items-center text-slate-900">
          <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
            <img
              src={LogoImage}
              alt="Eticpro, software de compliance y canal de denuncias"
              className="w-[120px] md:w-[220px] h-auto transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>

          <ul className="hidden md:flex items-center gap-1 lg:gap-2" role="menubar">
          <li role="none">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de inicio"
            >
              {t('navbar.inicio')}
            </a>
          </li>
          <li role="none">
            <a 
              href="#ventajas" 
              onClick={(e) => handleSmoothScroll(e, 'ventajas')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de módulos principales"
            >
              {t('navbar.funcionalidades')}
            </a>
          </li>
          <li role="none">
            <a 
              href="#FAQ" 
              onClick={(e) => handleSmoothScroll(e, 'FAQ')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors duration-200"
              role="menuitem"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              FAQ
            </a>
          </li>
          <li role="none">
            <select 
              value={currentLang} 
              onChange={handleLanguageChange}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-blue-300"
              aria-label="Select language"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
          <li role="none">
            <button 
              className="nav-button nav-button-entrar text-sm font-semibold" 
              onClick={handleLogin}
              aria-label="Acceder a la plataforma Eticpro"
            >
              Iniciar Sesión
            </button>
          </li>
          <li role="none">
            <button 
              className="nav-button nav-button-demo text-sm font-semibold" 
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              {t('navbar.contacto')}
            </button>
          </li>
          </ul>

          <button 
            onClick={handleNav} 
            className="block md:hidden rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-700 shadow-sm transition-colors duration-200 hover:bg-white"
            aria-label={nav ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={nav}
            aria-controls="mobile-menu"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          style={{ left: nav ? '0' : '-100%' }}
          className="glass-nav z-20 fixed top-0 h-full w-[78%] max-w-sm px-6 pt-24 text-left transition-[left] duration-500 ease-in-out"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <li role="none">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors duration-200 hover:bg-white/70"
              role="menuitem"
            >
              {t('navbar.inicio')}
            </a>
          </li>
          <li role="none">
            <a 
              href="#ventajas" 
              onClick={(e) => handleSmoothScroll(e, 'ventajas')}
              className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors duration-200 hover:bg-white/70"
              role="menuitem"
            >
              {t('navbar.funcionalidades')}
            </a>
          </li>
          <li role="none">
            <a 
              href="#FAQ" 
              onClick={(e) => handleSmoothScroll(e, 'FAQ')}
              className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors duration-200 hover:bg-white/70"
              role="menuitem"
            >
              FAQ
            </a>
          </li>
          <li role="none">
            <select
              value={currentLang}
              onChange={handleLanguageChange}
              className="mt-4 block w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left font-semibold text-slate-800 outline-none"
              aria-label="Select language"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
          <li role="none">
            <button 
              className="mt-4 block w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left font-semibold text-slate-800 transition-colors duration-200 hover:bg-white"
              onClick={handleLogin}
              aria-label="Acceder a la plataforma Eticpro"
            >
              Iniciar Sesión
            </button>
          </li>
          <li role="none">
            <button 
              className="mt-3 block w-full rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-3 text-left font-semibold text-white shadow-lg transition duration-200 hover:from-blue-800 hover:to-blue-950"
              onClick={handleOpenModal}
              aria-label="Contactar con Eticpro"
            >
              {t('hero.contactButton')}
            </button>
          </li>
        </ul>
      </nav>

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
