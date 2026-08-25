import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  buildStructuredData,
  getSeo,
  hreflangLinks,
  langFromPath,
  OG_IMAGE,
  urlForLang,
} from '../seo';

function upsertMeta(selectorAttr, key, content) {
  let el = document.head.querySelector(`meta[${selectorAttr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(selectorAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, extra = {}) {
  const extraSelector = extra.hreflang ? `[hreflang="${extra.hreflang}"]` : '';
  let el = document.head.querySelector(`link[rel="${rel}"]${extraSelector}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SeoHead = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);

  useEffect(() => {
    const seo = getSeo(lang);
    const pageUrl = urlForLang(lang);

    document.title = seo.title;
    document.documentElement.lang = seo.htmlLang;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:locale', seo.locale);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    upsertLink('canonical', pageUrl);
    hreflangLinks().forEach(({ hreflang, href }) => {
      upsertLink('alternate', href, { hreflang });
    });

    const script = document.getElementById('structured-data');
    if (script) {
      script.textContent = JSON.stringify(buildStructuredData(seo.lang, pageUrl));
    }
  }, [lang, i18n.language, i18n.resolvedLanguage]);

  return null;
};

export default SeoHead;
