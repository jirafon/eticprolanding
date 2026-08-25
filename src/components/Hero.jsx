import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import unsplash from '../assets/fondo-hero@2x.png';
import UnbiaxLogo from './unbiax17.png';
import ContactForm from './ContactForm'; // Import ContactForm for modal
import ReadinessQuizModal from './ReadinessQuizModal';

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReadinessQuiz, setShowReadinessQuiz] = useState(false);

  const handleLogin = () => {
    window.location.replace('https://compliax.onrender.com');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="inicio" className="inicio relative overflow-hidden pt-28 md:pt-36" role="banner" aria-label="Página principal">
      <div className="absolute inset-0 z-0 hero-mesh"></div>
      <div className="absolute inset-0 z-0 opacity-[0.12] mix-blend-multiply">
        <img
          src={unsplash}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-divider pt-10 md:pt-14">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold eyebrow-chip mb-6">
              {t('hero.eyebrow')}
            </div>
            <header className="text-left max-w-3xl">
              <h1 className="text-5xl md:text-6xl xl:text-7xl leading-[0.95] font-bold mb-6 text-balance">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-8 max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </header>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl">
              <button 
                className="nav-button nav-button-demo text-base font-semibold" 
                onClick={handleOpenModal}
                aria-label="Contactar con Eticpro"
              >
                {t('hero.contactButton')}
              </button>
              <button
                onClick={() => setShowReadinessQuiz(true)}
                className="nav-button bg-white/80 border border-slate-200 text-slate-800 text-base font-semibold shadow-[0_16px_40px_rgba(15,32,74,0.08)] hover:bg-white"
              >
                {t('readinessQuiz.openButton')}
              </button>
              <a
                href="https://unbiax.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button bg-slate-900 text-white text-base font-semibold hover:bg-slate-800"
              >
                {t('hero.otherSolutionsButton')}
              </a>
              <button
                onClick={handleLogin}
                className="nav-button bg-transparent border border-slate-300 text-slate-700 text-base font-semibold hover:bg-white/60"
              >
                Iniciar sesión
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">24h</div>
                <div className="text-sm text-slate-600 mt-1">Implementación operativa inicial</div>
              </div>
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">IA</div>
                <div className="text-sm text-slate-600 mt-1">Matrices de riesgo y control inteligente</div>
              </div>
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">360°</div>
                <div className="text-sm text-slate-600 mt-1">Gestión integral de compliance empresarial</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-8 h-36 w-36 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-slate-300/40 blur-3xl"></div>
            <div className="glass-card rounded-[32px] p-4 md:p-5">
              <div className="rounded-[26px] bg-slate-950 px-4 py-3 text-white flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-blue-200">Eticpro Platform</div>
                  <div className="text-lg font-semibold">Compliance control center</div>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
              </div>
              <div className="rounded-[26px] overflow-hidden border border-white/60 shadow-[0_14px_40px_rgba(7,19,54,0.14)]">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
                  <iframe
                    allow="autoplay; gyroscope; fullscreen;"
                    allowFullScreen
                    src="https://www.youtube.com/embed/DURPwY7KBEY?rel=0&modestbranding=1"
                    style={{ border: '0', height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}
                    title="Video demostrativo de Eticpro - Plataforma de Compliance"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white px-4 py-4 border border-slate-100">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">Powered by</div>
                  <img src={UnbiaxLogo} alt="Unbiax, tecnología de Eticpro" className="h-9 w-auto" />
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 px-4 py-4 border border-slate-100">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">Stack</div>
                  <div className="text-sm font-semibold text-slate-700">IA, trazabilidad y cumplimiento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReadinessQuizModal isOpen={showReadinessQuiz} onClose={() => setShowReadinessQuiz(false)} />
      </div>

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
