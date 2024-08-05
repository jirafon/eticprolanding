import React, { useState } from 'react';
import image1 from '../assets/eticprologo1.png'; // Cambia esto a las rutas correctas para tus imágenes
import camp from '../assets/camp.png'; // Cambia esto a las rutas correctas para tus imágenes
import formul from '../assets/apps@2x.png'; // Cambia esto a las rutas correctas para tus imágenes
import denuncias from '../assets/denuncias1.png'; // Cambia esto a las rutas correctas para tus imágenes
import declar from '../assets/aut.png'; // Cambia esto a las rutas correctas para tus imágenes

import certeval from '../assets/misd.png'; // Cambia esto a las rutas correctas para tus imágenes
import reuniones from '../assets/reunioneschil.jpg'; // Cambia esto a las rutas correctas para tus imágenes
const KeyFeatures = () => {
  const [selectedImage, setSelectedImage] = useState(image1); // Imagen por defecto

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id="ventajas" className="relative">

    <div className='w-full bg-[#ecfdff] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
            Características Clave y Fáciles de Usar
          </h2>
          <ul className='list-none space-y-4'>
            <li
              className='bg-white p-4 flex items-start cursor-pointer'
              onClick={() => handleClick(reuniones)}
              style={{ maxWidth: '100%' }}
            >
              <span className='text-lg md:text-xl'>
                Gestión de reuniones con Personas Expuestas Políticamente
              </span>
            </li>
            <li
              className='bg-white p-4 flex items-start cursor-pointer'
              onClick={() => handleClick(denuncias)}
              style={{ maxWidth: '100%' }}
            >
              <span className='text-lg md:text-xl'>
                Sistema de denuncias anónimas(Ley Karin y otras)
              </span>
            </li>
            <li
              className='bg-white p-4 flex items-start cursor-pointer'
              onClick={() => handleClick(camp)}
              style={{ maxWidth: '100%' }}
            >
              <span className='text-lg md:text-xl'>
                Campañas eficientes de conflictos de interés
              </span>
            </li>
            <li
              className='bg-white p-4 flex items-start cursor-pointer'
              onClick={() => handleClick(certeval)}
              style={{ maxWidth: '100%' }}
            >
              <span className='text-lg md:text-xl'>
                Evaluaciones claras con certificación auditada
              </span>
            </li>
            <li
              className='bg-white p-4 flex items-start cursor-pointer'
              onClick={() => handleClick(declar)}
              style={{ maxWidth: '100%' }}
            >
              <span className='text-lg md:text-xl'>
                Acceso a declaraciones históricas
              </span>
            </li>
       
          </ul>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <img src={selectedImage} alt='Selected Feature' className='max-w-full h-auto' />
        </div>
      </div>
    </div>
    </section>

  );

};

export default KeyFeatures;
