import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import unsplash from '../assets/fondo-hero@2x.png';
import videoPoster from '../assets/portada-video@2x.png';
import ReadinessQuizModal from './ReadinessQuizModal';

const YOUTUBE_ID = 'DURPwY7KBEY';

const Hero = () => {
  const { t } = useTranslation();
  const [showReadinessQuiz, setShowReadinessQuiz] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="inicio relative overflow-hidden pt-28 md:pt-36 scroll-mt-24" role="banner" aria-label="Página principal">
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
              <h1 className="text-4xl md:text-5xl xl:text-6xl leading-[1.05] font-bold mb-6 text-balance text-slate-900">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-8 max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </header>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl">
              <button
                className="nav-button nav-button-demo text-base font-semibold"
                onClick={() => scrollTo('contacto')}
                aria-label={t('hero.contactButton')}
              >
                {t('hero.contactButton')}
              </button>
              <button
                onClick={() => setShowReadinessQuiz(true)}
                className="nav-button bg-white/80 border border-slate-200 text-slate-800 text-base font-semibold shadow-[0_16px_40px_rgba(15,32,74,0.08)] hover:bg-white"
              >
                {t('readinessQuiz.openButton')}
              </button>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('ventajas')}
              className="mt-4 text-sm font-semibold text-blue-800 hover:text-blue-950 underline-offset-4 hover:underline"
            >
              {t('hero.modulesButton')} →
            </button>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">{t('hero.stat1Value')}</div>
                <div className="text-sm text-slate-600 mt-1">{t('hero.stat1Label')}</div>
              </div>
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">{t('hero.stat2Value')}</div>
                <div className="text-sm text-slate-600 mt-1">{t('hero.stat2Label')}</div>
              </div>
              <div className="glass-card rounded-[28px] px-5 py-5">
                <div className="text-3xl font-extrabold text-blue-800">{t('hero.stat3Value')}</div>
                <div className="text-sm text-slate-600 mt-1">{t('hero.stat3Label')}</div>
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
                  {isVideoPlaying ? (
                    <iframe
                      allow="autoplay; gyroscope; fullscreen;"
                      allowFullScreen
                      src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&autoplay=1`}
                      style={{ border: '0', height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}
                      title="Video demostrativo de Eticpro - Plataforma de Compliance"
                    ></iframe>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 w-full h-full group"
                      aria-label={t('hero.watchVideo')}
                    >
                      <img
                        src={videoPoster}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <span className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/15 transition-colors" />
                      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-800 shadow-xl transition-transform group-hover:scale-105">
                          <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                        <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-800">
                          {t('hero.watchVideo')}
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReadinessQuizModal isOpen={showReadinessQuiz} onClose={() => setShowReadinessQuiz(false)} />
      </div>
    </section>
  );
};

export default Hero;
