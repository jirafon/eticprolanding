import React from 'react';
import Control from '../assets/cont3.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Qué es Eticpro?
</h1>
       <div style={{ position: 'relative', paddingBottom: '39.375%', height: 0, overflow: 'hidden', width: '70%' }}>
  <iframe
    allow="autoplay; gyroscope;"
    allowfullscreen
    height="100%"
    referrerpolicy="strict-origin"
    src="https://www.kapwing.com/e/6595743960655078fedd91df"
    style={{ border: '0', height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}
    title="Embedded content made on Kapwing"
    width="100%"
  ></iframe>
  </div>  



</div>

      </div>
    </div>
  );
};

export default Analytics;
