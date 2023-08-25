import React from 'react';
import Comtop from '../assets/comtop.png';
import Features from '../assets/features.png';
import Quees from '../assets/quees.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
      <img className='w-[1000px] mx-auto my-4' src={Features} alt='/' />

        <div className='flex flex-col justify-right mb-2'> {/* Reduce the margin-bottom value */}
          <p className="mb-4">
            <strong>1. Gestión Simplificada de Registro de Reuniones.</strong> 
          </p>
          <p className="mb-4">
            <strong>2. Canal de denuncias Anónimas.</strong> 
          </p>
          <p className="mb-4">
            <strong>3. Campañas de recolección de información.</strong> 
          </p>
          <p className="mb-4">
            <strong>4. Evaluación y Certificación de Conflictos.</strong> 
          </p>
          <p className="mb-4">
            <strong>5. Historial Centralizado de Declaraciones, reuniones de interés, denuncias..</strong> 
          </p>
          <p className="mb-4">
            <strong>6. Formularios Personalizados para Recopilación de Datos.</strong> 
          </p>
          <p className="mb-4">
            <strong>7. Privilegios de Co-Administrador, investigador, comités para acción y Supervisión.</strong> 
          </p>


          
        </div>

      </div>
    </div>
  );
};

export default Analytics;
