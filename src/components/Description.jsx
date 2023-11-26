import React from 'react';
import Control from '../assets/cont1.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Qué es Eticpro?
</h1>
          <img className='w-[2000px] mx-auto my-4' src={Control} alt='/' />
          <p>
            {/* Your additional content goes here */}
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>COMENZAR</button> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
