import React, { useState } from 'react';
import image1 from '../assets/eticprologo1.png'; // Change this to correct paths for your images
import camp from '../assets/camp.png'; // Change this to correct paths for your images
import formul from '../assets/apps@2x.png'; // Change this to correct paths for your images
import denuncias from '../assets/denuncias1.png'; // Change this to correct paths for your images
import declar from '../assets/aut.png'; // Change this to correct paths for your images
import certeval from '../assets/misd.png'; // Change this to correct paths for your images
import declaracionesvid from '../assets/declaracionesvid.gif'; // Change this to correct paths for your images
import pendientes from '../assets/pendientes.gif'; // Change this to the correct path for your GIF
import reunionesvid from '../assets/reuniones.gif'; // Change this to the correct path for your GIF
import repovid from '../assets/repo.gif'; // Change this to the correct path for your GIF
import denunciasvid from '../assets/denuncias.gif'; // Change this to the correct path for your GIF
import campvid from '../assets/campvid.gif'; // Change this to the correct path for your GIF
import actividadvid from '../assets/actividadvid.gif'; // Change this to the correct path for your GIF
import transferenciavid from '../assets/transferenciasvid.gif'; // Change this to the correct path for your GIF
import diligenciavid from '../assets/diligenciavid.gif'; // Change this to the correct path for your GIF

const KeyFeatures = () => {
  const [selectedImage, setSelectedImage] = useState(pendientes); // Set GIF as default image

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id="ventajas" className="relative">
      <div className='w-full bg-[#ecfdff] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-start mb-8'>
              ¿Qué controles tiene ETICPRO? 
            </h2>
        
            <h6 className='text-sm text-start mb-8'>
              ETICPRO tiene el contenido legal que tomaría muchas horas de abogado y años de experiencia en redacción de formularios además de la funcionalidad para la eficiencia de los flujos de trabajos de cumplimiento. 
              Los módulos  son los siguientes:
            </h6>
            <h6 className='text-sm text-start mb-8'>
              Perfiles de Usuarios: Gerente de Cumplimiento, Director, Auditor, Aprobador, Declarante, Denunciante, Investigador y Miembro del Comité de Ética
            </h6>
            <ul className='list-none space-y-4'>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(campvid)}>
                <span className='text-lg md:text-xl'>Campañas de Cultura de Cumplimiento</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(repovid)}>
                <span className='text-lg md:text-xl'>Repositorio de Políticas y Procedimientos de Cumplimiento con Control de Lectura</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(declaracionesvid)}>
                <span className='text-lg md:text-xl'>Declaraciones de Conflictos de Interés</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(transferenciavid)}>
                <span className='text-lg md:text-xl'>Transferencias de Valor</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(reunionesvid)}>
                <span className='text-lg md:text-xl'>Registro de Reuniones con Personas de Interés</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(diligenciavid)}>
                <span className='text-lg md:text-xl'>Diligencia Debida de Contrapartes</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(denunciasvid)}>
                <span className='text-lg md:text-xl'>Canal de Denuncias</span>
              </li>
              <li className='bg-white p-4 flex items-start cursor-pointer' onClick={() => handleClick(actividadvid)}>
                <span className='text-lg md:text-xl'>Actividad de Usuarios</span>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center relative'>
  <img 
    src={selectedImage} 
    alt='Selected Feature' 
    className='max-w-full h-auto max-h-[500px] object-contain translate-y-[40%] translate-x-[20%]' 
  />
</div>



        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
