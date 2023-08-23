import React from 'react';
import Comtop from '../assets/comtop.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-right mb-2'> {/* Reduce the margin-bottom value */}
          <p className="mb-4">
            <strong>- Gestión Simplificada de Registro de Reuniones.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Sistema de denuncias Anónimas.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Gestión eficiente de Campañas de recolección de información.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Evaluación y Certificación de Conflictos sin Esfuerzo.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Historial Centralizado de Declaraciones.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Formularios Personalizados para Recopilación de Datos.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Privilegios de Co-Administrador para Supervisión.</strong> 
          </p>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Comtop} alt='/' />
      </div>
    </div>
  );
};

export default Analytics;
