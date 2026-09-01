import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const WHATSAPP = 'https://wa.me/56987375517';

const FinalCta = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f4fd] py-20 px-4 scroll-mt-24" aria-labelledby="final-cta-heading">
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-cyan-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="lg:pt-6">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-5">
            {t('finalCta.badge')}
          </div>
          <h2 id="final-cta-heading" className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            {t('finalCta.title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
            {t('finalCta.subtitle')}
          </p>
          <p className="text-sm font-semibold text-blue-900 mb-8">{t('finalCta.pymeNote')}</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
          >
            {t('finalCta.whatsapp')}
          </a>
        </div>

        <div className="rounded-[32px] border border-slate-100 bg-white/80 shadow-[0_24px_80px_rgba(15,32,74,0.1)] p-2 sm:p-4">
          <ContactForm hideHeader />
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
