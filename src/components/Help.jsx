import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-cyan-800 text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Te apoyamos en:</h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
        {/* Box 1: Mayor seguridad */}
         {/* Box 3: Cuidado reputacional */}
           {/* Box 2: Ahorro en tiempo y costos */}
        <div className='p-6 border border-gray-300 rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Ahorro en tiempo y costos</h2>
          <p>Ahorra tiempo con procesos automatizados, fácil implementación, y soporte digital.</p>
        </div>
         <div className='p-6 border border-gray-300 rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Cuidado reputacional</h2>
          <p>Mejora la transparencia, integra criterios ESG, y cumple con nuevas regulaciones para cuidar tu reputación.</p>
        </div>

     

      
        <div className='p-6 border border-gray-300 rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Mayor seguridad</h2>
          <p>Protege tu información con monitoreo constante y mitigación de riesgos penales.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Analytics;
