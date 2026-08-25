import React from 'react';
import { useTranslation } from 'react-i18next';
import logo1 from '../assets/beneficios-reputacion@2x.png';
import logo2 from '../assets/beneficios-seguridad@2x.png';
import logo3 from '../assets/beneficios-tiempo@2x.png';

const Help = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      logo: logo1,
      alt: t('help.card1Title'),
      title: t('help.card1Title'),
      description: t('help.card1Desc'),
      accent: 'from-blue-500 to-cyan-400',
    },
    {
      logo: logo2,
      alt: t('help.card2Title'),
      title: t('help.card2Title'),
      description: t('help.card2Desc'),
      accent: 'from-indigo-500 to-blue-400',
    },
    {
      logo: logo3,
      alt: t('help.card3Title'),
      title: t('help.card3Title'),
      description: t('help.card3Desc'),
      accent: 'from-blue-600 to-indigo-400',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f4fd] py-20 px-4" aria-labelledby="help-heading">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-4 uppercase">
            {t('help.badge')}
          </div>
          <h2 id="help-heading" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {t('help.title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.accent} flex items-center justify-center mb-6 shadow-md`}>
                <img src={b.logo} alt="" aria-hidden="true" className="w-8 h-8 object-contain brightness-0 invert" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
