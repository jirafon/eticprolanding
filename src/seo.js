export const DEFAULT_LANG = 'es';
export const SUPPORTED_LANGS = ['es', 'en', 'pt'];
export const SITE_URL = 'https://eticpro.com';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function pathForLang(lang) {
  const normalized = normalizeLang(lang);
  return normalized === DEFAULT_LANG ? '/' : `/${normalized}`;
}

export function urlForLang(lang) {
  const path = pathForLang(lang);
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function langFromPath(pathname = '/') {
  const segment = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LANGS.includes(segment) ? segment : DEFAULT_LANG;
}

export function hreflangLinks() {
  return [
    { hreflang: 'es', href: urlForLang('es') },
    { hreflang: 'en', href: urlForLang('en') },
    { hreflang: 'pt', href: urlForLang('pt') },
    { hreflang: 'x-default', href: urlForLang('es') },
  ];
}

const localeMap = {
  es: 'es_CL',
  en: 'en_US',
  pt: 'pt_BR',
};

const htmlLangMap = {
  es: 'es',
  en: 'en',
  pt: 'pt',
};

export const seoByLang = {
  es: {
    title: 'Eticpro | Software de Compliance y Canal de Denuncias',
    description:
      'Plataforma de compliance para empresas en Chile. Gestiona el Modelo de Prevención de Delitos (Ley 20.393 y 21.595), canal de denuncias y conflictos de interés.',
    keywords:
      'software compliance Chile, canal de denuncias, modelo de prevención de delitos, ley 20.393, ley 21.595, gestión ética empresarial, conflictos de interés, cumplimiento normativo, Eticpro',
  },
  en: {
    title: 'Eticpro | Compliance Software and Whistleblowing Channel',
    description:
      'Compliance platform for companies in Chile and Latin America. Manage your Crime Prevention Model, whistleblowing channel, and conflicts of interest in one place.',
    keywords:
      'compliance software Chile, whistleblowing channel, crime prevention model, corporate ethics, conflicts of interest, Eticpro',
  },
  pt: {
    title: 'Eticpro | Software de Compliance e Canal de Denúncias',
    description:
      'Plataforma de compliance para empresas no Chile e na América Latina. Gerencie o Modelo de Prevenção de Delitos, canal de denúncias e conflitos de interesse.',
    keywords:
      'software compliance Chile, canal de denúncias, modelo de prevenção de delitos, ética empresarial, conflitos de interesse, Eticpro',
  },
};

const faqByLang = {
  es: [
    {
      question: '¿Las denuncias son realmente anónimas?',
      answer:
        'Sí. Quien denuncia puede optar por no dar su nombre. Aunque se registre un correo, los datos personales no se muestran a otros usuarios ni se comparten con terceros.',
    },
    {
      question: '¿Qué uso le da Eticpro a la información que maneja?',
      answer:
        'La información se usa exclusivamente para operar los servicios de la plataforma: declaraciones, campañas, canal de denuncias y demás módulos de compliance. No vendemos ni compartimos datos con terceros y el usuario puede acceder, editar o eliminar su información.',
    },
    {
      question: '¿Qué significa Funcionario Público?',
      answer:
        'Incluye oficiales o empleados de gobierno u organizaciones públicas internacionales, personas que actúan en función oficial, dirigentes de partidos políticos o candidatos a cargo público, y representantes autorizados de un funcionario de gobierno.',
    },
    {
      question: '¿Qué es Persona Expuesta Públicamente (PEP)?',
      answer:
        'Según la Circular N°49 de la UAF, son personas chilenas o extranjeras que desempeñan o hayan desempeñado funciones públicas destacadas, hasta al menos un año después de finalizado el cargo. Incluye, entre otros, Presidente, parlamentarios, ministros y altos mandos del Estado.',
    },
  ],
  en: [
    {
      question: 'Are complaints really anonymous?',
      answer:
        'Yes. Whistleblowers can choose not to provide their name. Even if an email is stored, personal data is not shown to other users and is not shared with third parties.',
    },
    {
      question: 'How does Eticpro use the information it handles?',
      answer:
        'Information is used only to operate the platform: declarations, campaigns, the whistleblowing channel, and other compliance modules. We do not sell or share data with third parties, and users can access, edit, or delete their information.',
    },
    {
      question: 'What does Public Official mean?',
      answer:
        'It includes government officers or employees, officials of international public organizations, people acting in an official capacity, political party leaders or candidates for public office, and authorized representatives of a government official.',
    },
    {
      question: 'What is a Politically Exposed Person (PEP)?',
      answer:
        'According to UAF Circular No. 49, PEPs are Chilean or foreign persons who hold or have held prominent public functions, for at least one year after leaving office. This includes the President, members of Congress, ministers, and other senior public officials.',
    },
  ],
  pt: [
    {
      question: 'As denúncias são realmente anônimas?',
      answer:
        'Sim. Quem denuncia pode optar por não informar o nome. Mesmo que um e-mail seja registrado, os dados pessoais não são exibidos a outros usuários nem compartilhados com terceiros.',
    },
    {
      question: 'Qual o uso que o Eticpro dá às informações que manipula?',
      answer:
        'As informações são usadas exclusivamente para operar os serviços da plataforma: declarações, campanhas, canal de denúncias e demais módulos de compliance. Não vendemos nem compartilhamos dados com terceiros, e o usuário pode acessar, editar ou excluir suas informações.',
    },
    {
      question: 'O que significa Funcionário Público?',
      answer:
        'Inclui oficiais ou empregados de governo ou de organizações públicas internacionais, pessoas que atuam em função oficial, dirigentes de partidos políticos ou candidatos a cargo público, e representantes autorizados de um funcionário de governo.',
    },
    {
      question: 'O que é Pessoa Exposta Publicamente (PEP)?',
      answer:
        'Segundo a Circular nº 49 da UAF, são pessoas chilenas ou estrangeiras que desempenham ou tenham desempenhado funções públicas de destaque, até pelo menos um ano após o fim do cargo. Inclui, entre outros, Presidente, parlamentares, ministros e altos cargos do Estado.',
    },
  ],
};

export function normalizeLang(language) {
  const code = (language || DEFAULT_LANG).slice(0, 2).toLowerCase();
  return seoByLang[code] ? code : DEFAULT_LANG;
}

export function getSeo(language) {
  const lang = normalizeLang(language);
  return {
    lang,
    htmlLang: htmlLangMap[lang],
    locale: localeMap[lang],
    ...seoByLang[lang],
    faq: faqByLang[lang],
  };
}

export function buildStructuredData(language, pageUrl = SITE_URL) {
  const seo = getSeo(language);
  const canonicalUrl = pageUrl || urlForLang(seo.lang);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Eticpro',
        url: SITE_URL,
        logo: `${SITE_URL}/eticprov23.png`,
        email: 'hello@eticpro.com',
        telephone: '+56-9-8737-5517',
        areaServed: ['CL', 'LATAM'],
        sameAs: ['https://cl.linkedin.com/company/eticpro'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'hello@eticpro.com',
          telephone: '+56-9-8737-5517',
          availableLanguage: ['Spanish', 'English', 'Portuguese'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Eticpro',
        inLanguage: seo.htmlLang,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#app`,
        name: 'Eticpro',
        description: seo.description,
        url: canonicalUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: ['es', 'en', 'pt'],
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: 'CLP',
          availability: 'https://schema.org/OnlineOnly',
        },
        provider: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl.replace(/\/$/, '')}/#faq`,
        inLanguage: seo.htmlLang,
        mainEntity: seo.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}
