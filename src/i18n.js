import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationPT from './locales/pt.json';
import { langFromPath } from './seo';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  pt: {
    translation: translationPT
  }
};

const initialLang = typeof window !== 'undefined'
  ? langFromPath(window.location.pathname)
  : 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
