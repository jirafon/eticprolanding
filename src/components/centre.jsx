import React from 'react';
import image1 from '../assets/apps@2x.png'; // Ajusta la ruta según tu estructura de archivos

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center text-left pl-8 md:pl-16'>
          <p className='text-2xl md:text-4xl font-bold mb-6'>
            Reemplaza todas estas herramientas por una sola dedicada a cumplimiento
          </p>
        </div>

        <div className='flex gap-4 justify-center items-center'>
          <img 
            className='w-full max-w-[500px] h-auto' 
            src={image1} 
            alt="Imagen 1" 
          />
          
        </div>
      </div>
    </div>
  );
};

export default Analytics;
