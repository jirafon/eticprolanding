// App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Help from './components/Help';
import Centre from './components/centre';
import Clients from './components/Clients';
import Hero from './components/Hero';
import FinalCta from './components/FinalCta';
import WhatsAppButton from './components/WhatsAppButton';
import SeoHead from './components/SeoHead';
import LanguageSync from './components/LanguageSync';

function App() {
  const { t } = useTranslation();

  return (
    <div className="inicio">
      <LanguageSync />
      <SeoHead />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        {t('a11y.skipToContent', 'Saltar al contenido')}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Help />
        <Features />
        <Centre />
        <Faq />
        <FinalCta />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
