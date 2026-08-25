import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  const sections = [
    { title: t('faq.question1'), content: t('faq.question1Content') },
    { title: t('faq.question2'), content: t('faq.question2Content') },
    { title: t('faq.question3'), content: t('faq.question3Content') },
    { title: t('faq.question4'), content: t('faq.question4Content') },
  ];

  return (
    <section id="FAQ" className="relative py-20 bg-[#06112a] overflow-hidden" aria-labelledby="faq-heading">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-blue-300 border border-white/10">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-3">
          {sections.map((section, index) => (
            <details
              key={index}
              name="faq"
              className="group rounded-2xl border bg-white/5 border-white/10 hover:border-white/20 open:bg-white/10 open:border-blue-500/40 open:shadow-lg open:shadow-blue-900/20 transition-all duration-300"
            >
              <summary className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-white font-semibold text-base pr-4">
                  {section.title}
                </h3>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-white/10 transition-transform duration-300 group-open:rotate-45 group-open:bg-blue-500/30 group-open:border-blue-400/40">
                  <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <div
                  className="text-slate-300 text-sm leading-relaxed prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
