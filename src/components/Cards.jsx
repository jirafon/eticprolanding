import React from 'react';
import { useTranslation } from 'react-i18next';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Multi from '../assets/multi.png';

const Cards = () => {
  const { t } = useTranslation();
  return (
    <section id="planes">

    <div className='w-full py-[10rem] px-4 bg-white'>
      <h4 className='text-2xl font-bold text-center py-8'>{t('pricing.title')}</h4>
    
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6'>
        {/* Small Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
          <h2 className='text-2xl font-bold text-center py-8'>{t('pricing.starter')}</h2>
        <p className='text-center text-4xl font-bold'>30 {t('pricing.uf')} / {t('pricing.monthly')}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>300 {t('pricing.users')}</p>
            <p className='py-2 border-b mx-8'>3 {t('pricing.admins')}</p>
            <p className='py-2 border-b mx-8'>50Mb {t('pricing.storage')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.modules')}</p>
            <p className='py-2 border-b mx-8 mt-8'>{t('pricing.installation')}: 25 {t('pricing.uf')}+ {t('pricing.iva')}</p>
          </div>
        </div>

        {/* Mid Card */}
    <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="double" />
      <h2 className='text-2xl font-bold text-center py-8'>{t('pricing.pro')}</h2>
        <p className='text-center text-4xl font-bold'>90 {t('pricing.uf')} / {t('pricing.monthly')}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>1000 {t('pricing.users')}</p>
            <p className='py-2 border-b mx-8'>8 {t('pricing.admins')}</p>
            <p className='py-2 border-b mx-8'>250Mb {t('pricing.storage')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.modules')}</p>
            <p className='py-2 border-b mx-8 mt-8'>{t('pricing.installation')}: 60 {t('pricing.uf')}+ {t('pricing.iva')}</p>
          </div>
        </div>

 {/* Pro Card */}
 <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="triple" />
      <h2 className='text-2xl font-bold text-center py-8'>{t('pricing.corporate')}</h2>
       <p className='text-center text-4xl font-bold'>170 {t('pricing.uf')} / {t('pricing.monthly')}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>2000 {t('pricing.users')}</p>
            <p className='py-2 border-b mx-8'>20 {t('pricing.admins')}</p>
            <p className='py-2 border-b mx-8'>1GB {t('pricing.storage')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.modules')}</p>
            <p className='py-2 border-b mx-8 mt-8'>{t('pricing.installation')}: 120 {t('pricing.uf')} + {t('pricing.iva')}</p>
          </div>
        </div>

        {/* Custom Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Multi} alt="custom" />
          <h2 className='text-2xl font-bold text-center py-8'>{t('pricing.custom')}</h2>
          <p className='text-center text-2xl font-bold'>{t('pricing.contact')}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8'>{t('pricing.customDesc1')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.customDesc2')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.customDesc3')}</p>
            <p className='py-2 border-b mx-8'>{t('pricing.customDesc4')}</p>
            <p className='py-2 border-b mx-8 mt-8'>{t('pricing.customDesc5')}</p>
          </div>
        </div>
      </div>
      <p className='text-center font-bold mt-2'>**{t('pricing.extraStorage')}**</p>
      <p className='text-center font-bold mt-2'>{t('pricing.additional')}</p>
      <p className='text-center font-bold mt-2'>***{t('pricing.includes')}</p>

    </div>
    </section>
  );
};

export default Cards;

