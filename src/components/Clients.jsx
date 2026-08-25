import React from 'react';
import { useTranslation } from 'react-i18next';
import Schwager from '../assets/logo-schwager.png';
import Bago from '../assets/logo-bago.png';
import Mapsa from '../assets/logo-larrain.png';
import SC1 from '../assets/sc1.png';
import Ese from '../assets/ese.png';

import SC2 from '../assets/sc3.png';
import SC3 from '../assets/sc2.png';

import SC4 from '../assets/sc4.png';
import Life4 from '../assets/life4logo.png';

import Gruas from '../assets/logo-gruas5.png';

import ComplianceGC from '../assets/compliancegc.png';
import ComplianceTracker from '../assets/ctracker.png';
const Clients = () => {
  const { t } = useTranslation();

  const logos = [
    { src: Schwager, alt: 'Logo de Schwager, cliente de Eticpro' },
    { src: Bago, alt: 'Logo de Laboratorio Bagó, cliente de Eticpro' },
    { src: Mapsa, alt: 'Logo de Larrain, cliente de Eticpro' },
    { src: Life4, alt: 'Logo de Life4, cliente de Eticpro' },
    { src: Gruas, alt: 'Logo de Grúas, cliente de Eticpro' },
    { src: ComplianceTracker, alt: 'Logo de Compliance Tracker' },
    { src: ComplianceGC, alt: 'Logo de Compliance GC' },
    { src: SC3, alt: 'Logo de empresa cliente de Eticpro' },
    { src: SC2, alt: 'Logo de empresa cliente de Eticpro' },
    { src: SC4, alt: 'Logo de empresa cliente de Eticpro' },
    { src: SC1, alt: 'Logo de empresa cliente de Eticpro' },
    { src: Ese, alt: 'Logo de ESE Business School' }
  ];

  return (
    <section id="clients" className="w-full bg-white py-16 px-4" aria-labelledby="clients-heading">
      <div className='max-w-[1240px] mx-auto text-center'>
          <h2 id="clients-heading" className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-8'>{t('clients.title')}</h2>

          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8'>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img 
                  className='h-12 md:h-16 lg:h-20 w-auto object-contain' 
                  src={logo.src} 
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: '150px' }}
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Clients;
