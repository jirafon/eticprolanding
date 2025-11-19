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
import Unbiax from '../assets/unbiax.avif';
const Clients = () => {
  const { t } = useTranslation();

  const logos = [
    { src: Schwager, alt: 'Schwager', href: Schwager },
    { src: Bago, alt: 'Bago', href: Bago },
    { src: Mapsa, alt: 'Mapsa', href: Mapsa },
    { src: Life4, alt: 'Life4', href: Life4 },
    { src: Gruas, alt: 'Gruas', href: Gruas },
    { src: ComplianceTracker, alt: 'ComplianceTracker', href: ComplianceTracker },
    { src: ComplianceGC, alt: 'ComplianceGC', href: ComplianceGC },
    { src: SC3, alt: 'SC3', href: SC3 },
    { src: SC2, alt: 'SC2', href: SC2 },
    { src: SC4, alt: 'SC4', href: SC4 },
    { src: SC1, alt: 'SC1', href: SC1 },
    { src: Ese, alt: 'Ese', href: Ese },
    { src: Unbiax, alt: 'Unbiax', href: Unbiax }
  ];

  return (
    <div id="Clients" className="Clients">
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto text-center'>
          {/* Title */}
          <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-8'>{t('clients.title')}</h6>

          {/* Logos in a single line */}
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8'>
            {logos.map((logo, index) => (
              <a 
                key={index}
                href={logo.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
              >
                <img 
                  className='h-12 md:h-16 lg:h-20 w-auto object-contain' 
                  src={logo.src} 
                  alt={logo.alt}
                  style={{ maxWidth: '150px' }}
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clients;
