import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import campvid from '../assets/campvid.gif';
import repovid from '../assets/repo.gif';
import declaracionesvid from '../assets/declaracionesvid.gif';
import transferenciavid from '../assets/transferenciasvid.gif';
import reunionesvid from '../assets/reuniones.gif';
import diligenciavid from '../assets/diligenciavid.gif';
import denunciasvid from '../assets/denuncias.gif';
import actividadvid from '../assets/actividadvid.gif';
import pendientes from '../assets/pendientes.gif';

// Icon paths (inline SVGs keep bundle light)
const icons = {
  campaigns: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  ),
  repository: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  ),
  conflicts: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  transfers: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  ),
  meetings: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  dueDiligence: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  ),
  complaints: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  ),
  activity: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
};

const KeyFeatures = () => {
  const { t } = useTranslation();

  const modules = [
    { key: 'campaigns',    gif: campvid,          icon: icons.campaigns   },
    { key: 'repository',   gif: repovid,           icon: icons.repository  },
    { key: 'conflicts',    gif: declaracionesvid,  icon: icons.conflicts   },
    { key: 'transfers',    gif: transferenciavid,  icon: icons.transfers   },
    { key: 'meetings',     gif: reunionesvid,      icon: icons.meetings    },
    { key: 'dueDiligence', gif: diligenciavid,     icon: icons.dueDiligence},
    { key: 'complaints',   gif: denunciasvid,      icon: icons.complaints  },
    { key: 'activity',     gif: actividadvid,      icon: icons.activity    },
  ];

  const [active, setActive] = useState(modules[0]);

  return (
    <section id="ventajas" className="relative overflow-hidden bg-[#06112a] py-24 px-4" aria-labelledby="features-heading">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">
            Plataforma
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t('features.title')}
          </h2>
          <p className="text-blue-200/70 max-w-2xl mx-auto text-base leading-relaxed">
            {t('features.description')}
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">

          {/* LEFT — module list */}
          <div className="space-y-2">
            {modules.map((mod) => {
              const isActive = active.key === mod.key;
              return (
                <button
                  key={mod.key}
                  onClick={() => setActive(mod)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 group
                    ${isActive
                      ? 'bg-white/10 border border-white/20 shadow-lg shadow-blue-900/30'
                      : 'border border-transparent hover:bg-white/5 hover:border-white/10'
                    }`}
                >
                  {/* Icon bubble */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200
                    ${isActive ? 'bg-blue-500' : 'bg-white/5 group-hover:bg-blue-500/20'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {mod.icon}
                    </svg>
                  </div>

                  <h3 className={`text-base font-semibold transition-colors duration-200
                    ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                    {t(`features.${mod.key}`)}
                  </h3>

                  {/* Active indicator arrow */}
                  {isActive && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}

            {/* Profiles note */}
            <p className="text-xs text-white/30 pt-4 leading-relaxed px-2">
              {t('features.profiles')}
            </p>
          </div>

          {/* RIGHT — preview */}
          <div className="sticky top-28">
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl shadow-blue-950/60 p-2">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-3">
                  <span className="text-xs text-white/20">app.eticpro.com</span>
                </div>
              </div>
              <img
                key={active.gif}
                src={active.gif}
                alt={`Captura del módulo ${t(`features.${active.key}`)} en Eticpro`}
                className="w-full h-auto rounded-b-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
