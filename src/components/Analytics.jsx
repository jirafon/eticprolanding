import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>COMPLIANCE ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Maneja tus Datos de compliance centralizado y seguro. </h1>
          <p>
       
Nuestra plataforma está diseñada para ayudarte a gestionar y supervisar el cumplimiento de las regulaciones y normativas en tu organización. Simplifica tus procesos y mantén un control exhaustivo con nuestras soluciones personalizadas. ¡Comienza hoy mismo y mantén tu negocio en cumplimiento!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>COMENZAR</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
