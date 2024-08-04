import React from 'react';
import logo1 from '../assets/beneficios-reputacion@2x.png'; // Ajusta la ruta según sea necesario
import logo2 from '../assets/beneficios-seguridad@2x.png'; // Ajusta la ruta según sea necesario
import logo3 from '../assets/beneficios-tiempo@2x.png'; // Ajusta la ruta según sea necesario

const Analytics = () => {
  return (
    <div className='w-full' style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <div className='py-16 px-4'>
        <div className='max-w-[1240px] mx-auto text-center mb-8'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Mejora tu organización en:</h1>
        </div>
        <div className='mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          <div className='p-6 border border-gray-300 rounded-md flex flex-col justify-start items-start relative' style={{ backgroundColor: 'rgb(236, 253, 255)', height: '200px' }}>
            <img src={logo1} alt="Logo 1" className='absolute top-4 right-4' style={{ width: '50px', height: '50px' }} />
            <h2 className='text-2xl font-bold mb-4 text-black'>Ahorro en tiempo y costos</h2>
            <p className='text-black'>Ahorra tiempo con procesos automatizados, fácil implementación, y soporte digital.</p>
          </div>
          <div className='p-6 border border-gray-300 rounded-md flex flex-col justify-start items-start relative' style={{ backgroundColor: 'rgb(236, 253, 255)', height: '200px' }}>
            <img src={logo2} alt="Logo 2" className='absolute top-4 right-4' style={{ width: '50px', height: '50px' }} />
            <h2 className='text-2xl font-bold mb-4 text-black'>Cuidado reputacional</h2>
            <p className='text-black'>Mejora la transparencia, integra criterios ESG, y cumple con nuevas regulaciones para cuidar tu reputación.</p>
          </div>
          <div className='p-6 border border-gray-300 rounded-md flex flex-col justify-start items-start relative' style={{ backgroundColor: 'rgb(236, 253, 255)', height: '200px' }}>
            <img src={logo3} alt="Logo 3" className='absolute top-4 right-4' style={{ width: '50px', height: '50px' }} />
            <h2 className='text-2xl font-bold mb-4 text-black'>Mayor seguridad</h2>
            <p className='text-black'>Protege tu información con monitoreo constante y mitigación de riesgos penales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
