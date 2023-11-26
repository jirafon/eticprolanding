import React from 'react';
import Laptop from '../assets/laptop.jpg';
import Control from '../assets/cont6.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>

        <div className='flex flex-col justify-center text-center'>
          <p className='text-[#00df9a] font-bold'>REEMPLAZA TODAS ESTAS HERRAMIENTAS POR UNA SOLA DEDICADA SOLO A CUMPLIMIENTO</p>
          <img className='w-[1000px] mx-auto my-4' src={Control} alt='/' />

          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Protéjete cuando trabajas el cumplimiento.</h1>

          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>COMENZAR</button> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
