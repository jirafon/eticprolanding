import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='bg-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>
        COMPLIANCE MANAGER
      </p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Crecer con Seguridad.
      </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Rapido, flexible, confiable para...
        </p>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Conflictos de Interés', 'Due Diligence']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className='md:text-2xl text-xl font-bold text-black'>
        Monitoree y maneje sus labores de compliance con un gestor muy seguro y moderno.
      </p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
        Comenzar
      </button>
    </div>
  </div>
  
  );
};

export default Hero;
