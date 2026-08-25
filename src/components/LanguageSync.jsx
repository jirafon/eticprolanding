import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { langFromPath } from '../seo';

const LanguageSync = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = langFromPath(pathname);

  useEffect(() => {
    if ((i18n.resolvedLanguage || i18n.language || '').slice(0, 2) !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return null;
};

export default LanguageSync;
