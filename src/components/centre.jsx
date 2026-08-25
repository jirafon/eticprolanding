import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/apps@2x.png';

const Centre = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-16 px-4" aria-labelledby="centre-heading">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h2 id="centre-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            {t('centre.title')}
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-[500px] h-auto drop-shadow-xl"
            src={image1}
            alt="Herramientas de compliance reemplazadas por la plataforma Eticpro"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Centre;
