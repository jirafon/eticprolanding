import React from 'react';
import Laptop from '../assets/laptop11.jpg';
import Control from '../assets/cont6.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>COMPLIANCE DASHBOARD CONTROL & STORAGE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Maneja tus Datos  y controles de compliance centralizado y seguro. </h1>

<p>EticPro es una plataforma de software robusta que simplifica el cumplimiento ético y la gestión de conflictos en tu organización. Con una interfaz fácil de usar, EticPro ofrece características clave, como la gestión de reuniones con Personas Expuestas Políticamente (PEP), un sistema de denuncias anónimas, campañas eficientes de conflictos de interés y evaluaciones claras con certificación auditada.</p>
<p>Accede a declaraciones históricas, crea formularios personalizados y otorga privilegios de co-administrador para una supervisión efectiva. Asegura una cultura de integridad y transparencia con EticPro.</p>

<p>Solicita una demostración ahora y descubre la vanguardia del cumplimiento ético.</p>

  

         
   
    {/*      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>COMENZAR</button> */}
        </div>


      </div>
    </div>
  );
};

export default Analytics;
