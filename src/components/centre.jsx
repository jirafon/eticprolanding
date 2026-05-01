import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/apps@2x.png';

const Centre = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            {t('centre.title')}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-[500px] h-auto drop-shadow-xl"
            src={image1}
            alt="Suite de herramientas reemplazadas por Eticpro"
          />
        </div>
      </div>
    </section>
  );
};

export default Centre;
