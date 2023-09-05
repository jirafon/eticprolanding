import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Multi from '../assets/multi.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Small Card */}
        {/*}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
          <h2 className='text-2xl font-bold text-center py-8'>Small</h2>
          <p className='text-center text-4xl font-bold'>30 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>400 Declaraciones Anuales</p>
            <p className='py-2 border-b mx-8'>2 Campañas</p>
            <p className='py-2 border-b mx-8'>3 Usuarios</p>
            <p className='py-2 border-b mx-8'>50mb Canal Denuncias</p>
            <p className='py-2 border-b mx-8'>Gestor de Reuniones Ilimitado</p>

            <p className='py-2 border-b mx-8'>Sin Licencias E-learning </p>



          </div>
        </div>
  */}

        {/* Mid Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="double" />

          <h2 className='text-2xl font-bold text-center py-8'>STARTER</h2>
          <p className='text-center text-4xl font-bold'>70 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1.000 Declaraciones Anuales</p>
            <p className='py-2 border-b mx-8'>2 Campañas</p>
            <p className='py-2 border-b mx-8'>5 Usuarios</p>
            <p className='py-2 border-b mx-8'>200mb Canal Denuncias</p>
            <p className='py-2 border-b mx-8'>Gestor de Reuniones Ilimitado</p>
            <p className='py-2 border-b mx-8'>1 Licencia E-learning </p>

          </div>
        </div>

        {/* Pro Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="triple" />

          <h2 className='text-2xl font-bold text-center py-8'>PRO</h2>
          <p className='text-center text-4xl font-bold'>132 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>2.000 Declaraciones Anuales</p>
            <p className='py-2 border-b mx-8'>4 Campañas</p>
            <p className='py-2 border-b mx-8'>5 Usuarios</p>
            <p className='py-2 border-b mx-8'>1Gb Canal Denuncias </p>
            <p className='py-2 border-b mx-8'>Gestor de Reuniones Ilimitado</p>

            <p className='py-2 border-b mx-8'>2 Licencias E-learning </p>

          </div>
        </div>

        {/* Enterprise Card */}
        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Multi} alt="multi" />

          <h2 className='text-2xl font-bold text-center py-8'>ENTERPRISE</h2>
          <p className='text-center text-4xl font-bold'>285 UF / Anual</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>10.000 Declaraciones</p>
            <p className='py-2 border-b mx-8'>Campañas Sin Limite</p>
            <p className='py-2 border-b mx-8'>10 Usuarios</p>
            <p className='py-2 border-b mx-8'>2Gb Canal Denuncias </p>
            <p className='py-2 border-b mx-8'>Gestor de Reuniones Ilimitado</p>
            <p className='py-2 border-b mx-8'>5 Licencias E-learning</p>

          </div>
        </div>

        <div className='w-full sm:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
          <h2 className='text-2xl font-bold text-center py-8'>Custom</h2>
          <p className='text-center text-4xl font-bold'>Contactenos</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>20.000 Declaraciones Anuales</p>
            <p className='py-2 border-b mx-8'>Campañas</p>
            <p className='py-2 border-b mx-8'>Usuarios</p>
            <p className='py-2 border-b mx-8'>Canal Denuncias</p>
            <p className='py-2 border-b mx-8'>Gestor de Reuniones Ilimitado</p>
            <p className='py-2 border-b mx-8'>Licencias E-learning </p>
            <p className='py-2 border-b mx-8 mt-8'>Formularios Especiales</p>
            <p className='py-2 border-b mx-8 mt-8'>Exportacion Customizada</p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
