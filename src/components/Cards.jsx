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
      gradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      badge: null,
      features: [
        { label: '80', suffix: ` ${t('pricing.users')}` },
        { label: '1', suffix: ` ${t('pricing.admins')}` },
        { label: '50Mb', suffix: ` ${t('pricing.storage')}` },
        { label: t('pricing.pymeModules'), special: true },
        { label: `${t('pricing.installation')}: 18 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.starter'),
      price: 30,
      icon: Single,
      gradient: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      badge: null,
      features: [
        { label: '300', suffix: ` ${t('pricing.users')}` },
        { label: '3', suffix: ` ${t('pricing.admins')}` },
        { label: '200Mb', suffix: ` ${t('pricing.storage')}` },
        { label: t('pricing.modules'), special: true },
        { label: `${t('pricing.installation')}: 25 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.pro'),
      price: 90,
      icon: Double,
      gradient: 'from-green-50 to-emerald-100',
      borderColor: 'border-green-200',
      badge: 'POPULAR',
      features: [
        { label: '1000', suffix: ` ${t('pricing.users')}` },
        { label: '8', suffix: ` ${t('pricing.admins')}` },
        { label: '1GB', suffix: ` ${t('pricing.storage')}` },
        { label: t('pricing.modules'), special: true },
        { label: `${t('pricing.installation')}: 60 ${t('pricing.uf')}+ ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.corporate'),
      price: 170,
      icon: Triple,
      gradient: 'from-orange-50 to-amber-100',
      borderColor: 'border-orange-200',
      badge: null,
      features: [
        { label: '2000', suffix: ` ${t('pricing.users')}` },
        { label: '20', suffix: ` ${t('pricing.admins')}` },
        { label: '2GB', suffix: ` ${t('pricing.storage')}` },
        { label: t('pricing.modules'), special: true },
        { label: `${t('pricing.installation')}: 120 ${t('pricing.uf')} + ${t('pricing.iva')}`, special: true }
      ]
    },
    {
      name: t('pricing.custom'),
      price: null,
      icon: Multi,
      gradient: 'from-gray-50 to-slate-100',
      borderColor: 'border-gray-200',
      badge: null,
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      
        <div className='max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-2xl shadow-lg 
                border-2 ${plan.borderColor}
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl
                flex flex-col
                ${plan.badge === 'POPULAR' ? 'ring-2 ring-green-400 ring-opacity-50' : ''}
              `}
            >
              {/* Badge Popular */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header con gradiente */}
              <div className={`bg-gradient-to-br ${plan.gradient} rounded-t-2xl p-6 pb-8`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full p-3 shadow-lg flex items-center justify-center">
                    <img className='w-full h-full object-contain' src={plan.icon} alt={plan.name} />
                  </div>
                </div>
                <h2 className='text-xl font-bold text-center text-gray-800 mb-2'>{plan.name}</h2>
                {plan.price ? (
                  <div className="text-center">
                    <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                    <span className='text-lg text-gray-600 ml-1'>{t('pricing.uf')}</span>
                    <p className='text-sm text-gray-500 mt-1'>/ {t('pricing.monthly')}</p>
                  </div>
                ) : (
                  <p className='text-center text-xl font-bold text-gray-700 mt-2'>{t('pricing.contact')}</p>
                )}
              </div>

              {/* Features */}
              <div className='flex-1 px-6 py-6 space-y-3'>
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`
                      ${feature.special ? 'py-3 px-3 bg-gray-50 rounded-lg' : 'py-2 border-b border-gray-100'}
                      ${feature.highlight ? 'bg-blue-50 border-blue-200 border' : ''}
                      transition-colors duration-200
                    `}
                  >
                    {feature.special ? (
                      <p className={`text-xs ${feature.highlight ? 'font-semibold text-blue-700' : 'text-gray-600'} leading-relaxed`}>
                        {feature.label}
                      </p>
                    ) : (
                      <p className='text-sm font-medium text-gray-700 flex items-center'>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-bold text-gray-900">{feature.label}</span>
                        <span className="text-gray-600">{feature.suffix}</span>
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
        </div>
      </div>
    </section>
  );
};

export default Cards;

