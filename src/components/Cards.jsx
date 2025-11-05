import React from 'react';
import { useTranslation } from 'react-i18next';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Multi from '../assets/multi.png';

const Cards = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      name: t('pricing.pyme'),
      price: 18,
      icon: Single,
      gradient: 'from-cyan-50 via-teal-50 to-cyan-100',
      borderColor: 'border-cyan-400',
      textColor: 'text-cyan-900',
      titleColor: 'text-cyan-700',
      badge: null,
      bulletColor: 'bg-cyan-500',
      features: [
        { label: '80', suffix: ` ${t('pricing.users')}` },
        { label: '1', suffix: ` ${t('pricing.admins')}` },
        { label: '50Mb', suffix: ` ${t('pricing.storage')}` },
        { type: 'pymeModules', modules: [
          t('pricing.moduleMeeting'),
          t('pricing.moduleRepositoryShort'),
          t('pricing.moduleComplaintChannel'),
          t('pricing.moduleConflictsShort'),
          t('pricing.moduleValueTransferShort')
        ] },
        { label: `${t('pricing.installation')}: 18 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.starter'),
      price: 30,
      icon: Single,
      gradient: 'from-blue-100 via-indigo-100 to-blue-200',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-900',
      titleColor: 'text-blue-700',
      badge: null,
      bulletColor: 'bg-blue-500',
      features: [
        { label: '300', suffix: ` ${t('pricing.users')}` },
        { label: '3', suffix: ` ${t('pricing.admins')}` },
        { label: '200Mb', suffix: ` ${t('pricing.storage')}` },
        { type: 'modules', modules: [
          t('pricing.moduleRepository'),
          t('pricing.moduleValueTransfer'),
          t('pricing.moduleDueDiligence'),
          t('pricing.moduleMeetings'),
          t('pricing.moduleConflicts'),
          t('pricing.moduleComplaints')
        ] },
        { label: `${t('pricing.installation')}: 25 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.pro'),
      price: 90,
      icon: Double,
      gradient: 'from-purple-100 via-violet-100 to-purple-200',
      borderColor: 'border-purple-600',
      textColor: 'text-purple-900',
      titleColor: 'text-purple-700',
      badge: 'POPULAR',
      bulletColor: 'bg-purple-500',
      features: [
        { label: '1000', suffix: ` ${t('pricing.users')}` },
        { label: '8', suffix: ` ${t('pricing.admins')}` },
        { label: '1GB', suffix: ` ${t('pricing.storage')}` },
        { type: 'modules', modules: [
          t('pricing.moduleRepository'),
          t('pricing.moduleValueTransfer'),
          t('pricing.moduleDueDiligence'),
          t('pricing.moduleMeetings'),
          t('pricing.moduleConflicts'),
          t('pricing.moduleComplaints')
        ] },
        { label: `${t('pricing.installation')}: 60 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.corporate'),
      price: 170,
      icon: Triple,
      gradient: 'from-emerald-100 via-teal-100 to-emerald-200',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-900',
      titleColor: 'text-emerald-700',
      badge: null,
      bulletColor: 'bg-emerald-500',
      features: [
        { label: '2000', suffix: ` ${t('pricing.users')}` },
        { label: '20', suffix: ` ${t('pricing.admins')}` },
        { label: '2GB', suffix: ` ${t('pricing.storage')}` },
        { type: 'modules', modules: [
          t('pricing.moduleRepository'),
          t('pricing.moduleValueTransfer'),
          t('pricing.moduleDueDiligence'),
          t('pricing.moduleMeetings'),
          t('pricing.moduleConflicts'),
          t('pricing.moduleComplaints')
        ] },
        { label: `${t('pricing.installation')}: 120 ${t('pricing.uf')} + ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.custom'),
      price: null,
      icon: Multi,
      gradient: 'from-amber-50 via-yellow-50 to-amber-100',
      borderColor: 'border-amber-400',
      textColor: 'text-amber-900',
      titleColor: 'text-amber-700',
      badge: null,
      bulletColor: 'bg-amber-500',
      features: [
        { label: t('pricing.customDesc1'), special: true },
        { label: t('pricing.customDesc2'), special: true },
        { label: t('pricing.customDesc3'), special: true },
        { label: t('pricing.customDesc4'), special: true },
        { label: t('pricing.customDesc5'), special: true, highlight: true }
      ]
    }
  ];

  return (
    <section id="planes" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className='w-full py-16 px-4'>
        <div className="text-center mb-12">
          <h4 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>{t('pricing.title')}</h4>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-slate-600 mx-auto rounded-full"></div>
        </div>
      
        <div className='max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center'>
          {plans.filter(plan => plan.price !== 18).map((plan, index) => (
            <div
              key={index}
              className={`
                 relative w-full max-w-sm bg-white rounded-2xl shadow-lg 
                 border-2 ${plan.borderColor}
                 transform transition-all duration-300 
                 hover:scale-105 hover:shadow-2xl
                 flex flex-col
                 ${plan.badge === 'POPULAR' ? 'ring-2 ring-purple-400 ring-opacity-50' : ''}
               `}
            >
              {/* Badge Popular */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-violet-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header con gradiente */}
              <div className={`bg-gradient-to-br ${plan.gradient} rounded-t-2xl p-8 pb-10`}>
                <div className="flex justify-center mb-5">
                  <div className={`w-20 h-20 ${plan.name === t('pricing.corporate') ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} rounded-full p-4 shadow-lg flex items-center justify-center`}>
                    <img className='w-full h-full object-contain' src={plan.icon} alt={plan.name} />
                  </div>
                </div>
                <h2 className={`text-2xl font-bold text-center mb-3 ${plan.titleColor}`}>{plan.name}</h2>
                {plan.price ? (
                  <div className="text-center">
                    <span className={`text-5xl font-bold ${plan.textColor}`}>{plan.price}</span>
                    <span className={`text-xl ml-2 ${plan.textColor} opacity-80`}>{t('pricing.uf')}</span>
                    <p className={`text-base mt-1 ${plan.textColor} opacity-70`}>/ {t('pricing.monthly')}</p>
                  </div>
                ) : (
                  <p className={`text-center text-2xl font-bold ${plan.textColor} mt-2`}>{t('pricing.contact')}</p>
                )}
              </div>

              {/* Features */}
              <div className={`flex-1 px-8 py-8 space-y-4 bg-white`}>
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${feature.special ? `py-4 px-4 bg-gray-50 rounded-lg` : feature.type === 'modules' || feature.type === 'pymeModules' ? `py-4 px-4 bg-gray-50 rounded-lg` : `py-3 border-b border-gray-100`}
                      ${feature.highlight ? 'bg-indigo-50 border-indigo-200 border' : ''}
                      transition-colors duration-200
                    `}
                  >
                    {feature.type === 'modules' || feature.type === 'pymeModules' ? (
                      <div>
                        <p className={`text-sm font-semibold ${plan.titleColor} mb-2`}>
                          {feature.type === 'pymeModules' ? t('pricing.pymeModules').split(':')[0] + ':' : t('pricing.modules').split(':')[0] + ':'}
                        </p>
                        <ul className="space-y-2">
                          {feature.modules.map((module, modIdx) => (
                            <li key={modIdx} className="flex items-start">
                              <span className={`w-2 h-2 ${plan.bulletColor} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                              <span className="text-sm text-gray-700">{module}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-600 mt-3 italic">
                          {t('pricing.searchIntegration')}
                        </p>
                      </div>
                    ) : feature.special ? (
                      <p className={`text-sm ${feature.highlight ? `font-semibold ${plan.titleColor}` : 'text-gray-600'} leading-relaxed`}>
                        {feature.label}
                      </p>
                    ) : (
                      <p className={`text-base font-medium flex items-center text-gray-700`}>
                        <span className={`w-2 h-2 ${plan.bulletColor} rounded-full mr-3`}></span>
                        <span className={`font-bold ${plan.textColor}`}>{feature.label}</span>
                        <span className="text-gray-600 ml-1">{feature.suffix}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer notes */}
        <div className="max-w-[1400px] mx-auto mt-12 space-y-2">
          <p className='text-center text-sm font-semibold text-gray-600'>
            <span className="text-blue-600">**</span>
            {t('pricing.extraStorage')}
            <span className="text-blue-600">**</span>
          </p>
          <p className='text-center text-sm font-semibold text-gray-600'>
            {t('pricing.additional')}
          </p>
          <p className='text-center text-sm font-semibold text-gray-600'>
            <span className="text-purple-600">***</span>
            {t('pricing.includes')}
          </p>
          <p className='text-center text-base font-medium text-gray-700 mt-6 italic'>
            Consulte para ver otras opciones a la medida
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;

