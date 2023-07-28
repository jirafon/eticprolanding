import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Small Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
          <h2 className='text-2xl font-bold text-center py-8'>Small</h2>
          <p className='text-center text-4xl font-bold'>30 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>400 Declaraciones</p>
            <p className='py-2 border-b mx-8'>2 Usuarios</p>
            <p className='py-2 border-b mx-8'>2 Campañas</p>
          </div>
        </div>

        {/* Mid Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8'>Mid</h2>
          <p className='text-center text-4xl font-bold'>60 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>800 Declaraciones</p>
            <p className='py-2 border-b mx-8'>2 Usuarios</p>
            <p className='py-2 border-b mx-8'>2 Campañas</p>
            <p className='py-2 border-b mx-8'>1 Licencias E-learning </p>
          </div>
        </div>

        {/* Pro Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8'>Pro</h2>
          <p className='text-center text-4xl font-bold'>132,5 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>2000 Declaraciones</p>
            <p className='py-2 border-b mx-8'>5 Usuarios</p>
            <p className='py-2 border-b mx-8'>2 Campañas</p>
            <p className='py-2 border-b mx-8'>2 Licencias E-learning </p>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
          <p className='text-center text-4xl font-bold'>285 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5000 Declaraciones</p>
            <p className='py-2 border-b mx-8'>Usuarios Ilimitado</p>
            <p className='py-2 border-b mx-8'>8 Campañas</p>
            <p className='py-2 border-b mx-8'>5 Licencias E-learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
