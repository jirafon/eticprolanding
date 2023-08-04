import React from 'react';
import Comtop from '../assets/comtop.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-right'>
          <p className="mb-4">
            <strong>- Gestión Simplificada de Registro de Reuniones.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Sistema de denuncias Anónimas.</strong> 
          </p>
          <p className="mb-4">
            <strong>- Eficientes Campañas de Conflictos de Interés.</strong> 
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
          <p className="mb-4">
          </p>

        {/*  <ul className="list-disc list-inside mb-4">
            <li>Interfaz Fácil de Usar: Experimenta una interfaz fluida e intuitiva que simplifica las interacciones del usuario, reduciendo el tiempo de capacitación para tu equipo.</li>
            <li>Seguridad y Privacidad de Datos: Descansa tranquilo sabiendo que tus datos sensibles están protegidos con cifrado de última generación y estrictas medidas de privacidad.</li>
            <li>Informes e Información en Tiempo Real: Toma decisiones informadas de manera rápida con informes en tiempo real e información útil proporcionada por la completa analítica de EticPro.</li>
            <li>Escalable y Adaptable: Ya sea que tengas un pequeño negocio o una gran empresa, EticPro se adapta a tus necesidades cambiantes de organización con facilidad.</li>
            <li>Soporte Dedicado: Nuestro equipo de expertos está listo para brindar asistencia y apoyo rápidos durante tu experiencia con EticPro, garantizando una experiencia fluida.</li>
  </ul>*/}
          
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>COMENZAR</button> */}
        </div>
        <img className='w-[500px] mx-auto my-4' src={Comtop} alt='/' />

      </div>
    </div>
  );
};

export default Analytics;
