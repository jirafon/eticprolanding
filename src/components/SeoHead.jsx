import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { buildStructuredData, getSeo, OG_IMAGE, SITE_URL } from '../seo';

function upsertMeta(selectorAttr, key, content) {
  let el = document.head.querySelector(`meta[${selectorAttr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(selectorAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const SeoHead = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const seo = getSeo(i18n.resolvedLanguage || i18n.language);

    document.title = seo.title;
    document.documentElement.lang = seo.htmlLang;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:locale', seo.locale);
    upsertMeta('property', 'og:url', `${SITE_URL}/`);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${SITE_URL}/`);

    const script = document.getElementById('structured-data');
    if (script) {
      script.textContent = JSON.stringify(buildStructuredData(seo.lang));
    }
  }, [i18n.language, i18n.resolvedLanguage]);

  return null;
};

export default SeoHead;
