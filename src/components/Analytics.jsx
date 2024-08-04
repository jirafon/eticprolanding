import React from 'react';
import QuotationMarks from '../assets/comillas@2x.png'; // Asegúrate de que la ruta sea correcta
import XimenaPhoto from '../assets/ximena.png'; // Asegúrate de que la ruta sea correcta

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col items-center'>
        <div className='relative max-w-[800px] mx-auto p-6'>
          <img 
            src={QuotationMarks} 
            alt="Gráfico de comillas" 
            className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16' 
          />
          <div className='flex items-start'>
            <div className='ml-20'> {/* Ajusta el margen a la izquierda según sea necesario */}
              <p className='text-lg leading-relaxed'>
                Quisiera destacar la plataforma Eticpro, es muy útil, bien diseñada, intuitiva y fácil de usar. Cada vez que he necesitado ayuda, el equipo de soporte me ha respondido de manera rápida y efectiva. Siempre han sido receptivos y serviciales ante cualquier pregunta que he tenido. Realmente valoro la experiencia que he tenido durante el periodo de implementación y marcha blanca que llevamos.
              </p>
              <div className='pt-6 flex items-center'>
                <img 
                  src={XimenaPhoto} 
                  alt="Ximena Fritz" 
                  className='w-16 h-16 rounded-full object-cover border-2 border-gray-300 mr-4' // Añadido margen derecho
                />
                <div>
                  <p className='font-bold text-xl'>Ximena Fritz</p>
                  <p className='text-gray-600'>Lider Compliance, Laboratorio Bagó.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
