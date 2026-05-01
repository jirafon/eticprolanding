import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sections = [
    { title: t('faq.question1'), content: t('faq.question1Content') },
    { title: t('faq.question2'), content: t('faq.question2Content') },
    { title: t('faq.question3'), content: t('faq.question3Content') },
    { title: t('faq.question4'), content: t('faq.question4Content') },
  ];

  return (
    <section id="FAQ" className="relative py-20 bg-[#06112a] overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-blue-300 border border-white/10">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t('faq.title')}
          </h2>
        </div>

        {/* Accordion items */}
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/10 border-blue-500/40 shadow-lg shadow-blue-900/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold text-base pr-4">
                    {section.title}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-blue-500/30 border-blue-400/40' : 'bg-white/10'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div
                      className="text-slate-300 text-sm leading-relaxed prose prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
