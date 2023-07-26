import React from 'react';


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Eticpro.</h1>
        <p className='py-4'>Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños. Nuestro equipo de expertos en cumplimiento ha desarrollado una plataforma intuitiva y segura para ayudarte a abordar los desafíos regulatorios actuales. Nuestra misión es brindarte las herramientas necesarias para mantener el cumplimiento normativo sin complicaciones y minimizar los riesgos asociados.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
           
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Soluciones</h6>
        <ul>
            <li className='py-2 text-sm'>Análisis</li>
            <li className='py-2 text-sm'>E-learning</li>

        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Soporte</h6>
        <ul>
            <li className='py-2 text-sm'>Precios</li>
            <li className='py-2 text-sm'>Documentacion</li>
            <li className='py-2 text-sm'>Guias</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Empresa</h6>
        <ul>
            <li className='py-2 text-sm'>Programa de Afiliacion</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Privacidad de Datos</li>
            <li className='py-2 text-sm'>Terminos</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
