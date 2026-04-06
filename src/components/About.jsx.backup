import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Laptop from "../assets/team2.png";
import GG from "../assets/biogg.png";
import CH from "../assets/bioch2.png";

const About = () => {
  const { t } = useTranslation();
  const [showGiovannaFull, setShowGiovannaFull] = useState(false);

  return (
    <section id="aboutus" className="aboutus relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="relative w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> {t('about.badge')} </div>
            <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"> {t('about.title')} </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> {t('about.subtitle')} </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative z-10">
                <img className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" src={Laptop} alt="Equipo de Eticpro trabajando en la plataforma de compliance" loading="lazy" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('about.mainTitle')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4"> {t('about.description1')} </p>
                <p className="text-gray-700 leading-relaxed"> {t('about.description2')} <strong className="text-blue-600">{t('about.hours')}</strong>. </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('about.fast')}</h4>
                  <p className="text-sm text-gray-600">{t('about.fastDesc')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('about.secure')}</h4>
                  <p className="text-sm text-gray-600">{t('about.secureDesc')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('about.specialized')}</h4>
                  <p className="text-sm text-gray-600">{t('about.specializedDesc')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('about.efficient')}</h4>
                  <p className="text-sm text-gray-600">{t('about.efficientDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Technology Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl mb-20 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('about.technologyTitle')}</h3>
                <p className="text-lg leading-relaxed">{t('about.technologyDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('about.unbiaxTitle')}</h3>
                <p className="text-lg leading-relaxed">{t('about.unbiaxDesc')}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> {t('about.identity')} </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{t('about.mission')}</h4>
                <p className="text-gray-600 leading-relaxed"> {t('about.missionText')} </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{t('about.vision')}</h4>
                <p className="text-gray-600 leading-relaxed"> {t('about.visionText')} </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{t('about.values')}</h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{t('about.integrity')}</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{t('about.innovation')}</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{t('about.efficiency')}</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{t('about.empathy')}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {t('about.teamTitle')} </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto"> {t('about.teamSubtitle')} </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img className="w-32 h-32 rounded-full shadow-lg mx-auto mb-4 object-cover" src={GG} alt="Giovanna Gardella - Managing Director de Eticpro" loading="lazy" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{t('about.giovanna')}</h4>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"> Managing Director </div>
              </div>
              <div className="text-gray-700 leading-relaxed text-sm">
                {!showGiovannaFull ? (
                  <>
                    <p>{t('about.giovannaShort')}</p>
                    <button 
                      onClick={() => setShowGiovannaFull(true)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      {t('about.readMore')}
                    </button>
                  </>
                ) : (
                  <>
                    <p>{t('about.giovannaFull')}</p>
                    <button 
                      onClick={() => setShowGiovannaFull(false)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      {t('about.readLess')}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img className="w-32 h-32 rounded-full shadow-lg mx-auto mb-4 object-cover" src={CH} alt="Cristian Haquin - Managing Director de Eticpro" loading="lazy" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{t('about.cristian')}</h4>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"> Managing Director </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm"> {t('about.cristianBio')} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
