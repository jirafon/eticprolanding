import React from 'react';
import { useTranslation } from 'react-i18next';
import QuotationMarks from '../assets/comillas@2x.png';
import XimenaPhoto from '../assets/ximena.png';

const Analytics = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f4fd] py-20 px-4">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14 relative">
          {/* Large decorative quote mark */}
          <img
            src={QuotationMarks}
            alt=""
            aria-hidden="true"
            className="absolute -top-6 -left-4 w-14 h-14 opacity-80"
          />

          <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
            "{t('testimonial.quote')}"
          </blockquote>

          <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
            <img
              src={XimenaPhoto}
              alt={`${t('testimonial.name')}, ${t('testimonial.role')}`}
              loading="lazy"
              decoding="async"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div>
              <p className="font-bold text-gray-900 text-base">{t('testimonial.name')}</p>
              <p className="text-sm text-blue-600 font-medium">{t('testimonial.role')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
