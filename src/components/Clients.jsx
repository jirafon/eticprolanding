import React from 'react';
import { useTranslation } from 'react-i18next';
import Schwager from '../assets/logo-schwager.png';
import Bago from '../assets/logo-bago.png';
import Mapsa from '../assets/logo-larrain.png';
import Ese from '../assets/ese.png';
import Life4 from '../assets/life4logo.png';
import Gruas from '../assets/logo-gruas5.png';
import QuotationMarks from '../assets/comillas@2x.png';
import XimenaPhoto from '../assets/ximena.png';

const Clients = () => {
  const { t } = useTranslation();

  const logos = [
    { src: Schwager, alt: 'Logo de Schwager, cliente de Eticpro' },
    { src: Bago, alt: 'Logo de Laboratorio Bagó, cliente de Eticpro' },
    { src: Mapsa, alt: 'Logo de Larrain, cliente de Eticpro' },
    { src: Life4, alt: 'Logo de Life4, cliente de Eticpro' },
    { src: Gruas, alt: 'Logo de Grúas San Blas, cliente de Eticpro' },
    { src: Ese, alt: 'Logo de ESE Business School' },
  ];

  return (
    <section id="clients" className="w-full bg-white py-16 px-4" aria-labelledby="clients-heading">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 id="clients-heading" className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-900">
          {t('clients.title')}
        </h2>
        <p className="text-slate-500 mb-10">{t('clients.subtitle')}</p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300">
              <img
                className="h-10 md:h-14 w-auto object-contain"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                style={{ maxWidth: '140px' }}
              />
            </div>
          ))}
        </div>

        <figure className="relative mt-14 max-w-3xl mx-auto text-left bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f4fd] rounded-3xl border border-slate-100 shadow-[0_18px_50px_rgba(15,32,74,0.08)] p-8 md:p-10">
          <img
            src={QuotationMarks}
            alt=""
            aria-hidden="true"
            className="absolute -top-5 -left-2 w-12 h-12 opacity-80"
          />
          <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed italic">
            “{t('testimonial.quote')}”
          </blockquote>
          <figcaption className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-6">
            <img
              src={XimenaPhoto}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div>
              <p className="font-bold text-slate-900 text-base">{t('testimonial.name')}</p>
              <p className="text-sm text-blue-700 font-medium">{t('testimonial.role')}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Clients;
