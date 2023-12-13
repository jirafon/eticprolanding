import React, { useState } from 'react';
import Laptop from '../assets/laptop.png';
import Control from '../assets/cont6.png';

const Analytics = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>BLOG</p>
        <h1
          className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 cursor-pointer'
          onClick={toggleContentVisibility}
        >
          La Ética como principal activo de las empresas en el 2024
        </h1>
        {isContentVisible && (
          <div className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
            <p className='text-gray-800 ml-4'>
              <h2 className='text-lg font-semibold mb-2'>I. Construcción y Ruina de la Reputación:</h2>
              La realidad es clara: construir una buena reputación demanda años de esfuerzo constante, mientras que un solo error puede desmoronarla en cuestión de minutos. Aquí, la conducta ética y el cumplimiento corporativo se entrelazan como los cimientos indispensables para erigir una cultura organizacional de respeto y crecimiento.
            </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>II. Ética y Cumplimiento Corporativo:</h2>
        En el tejido de la economía actual, la gestión de intangibles es la clave para competir en la economía de la reputación. La ética y el cumplimiento no solo son responsabilidades individuales, sino que se vuelven la esencia misma de toda la organización. La transparencia y la confianza son activos invaluables en este nuevo paradigma.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>III. Código de Ética Transparente:</h2>
        La creación de un código de ética transparente se erige como un faro que ilumina los objetivos de la compañía. Es imperativo involucrar a todos los actores, especialmente a los líderes, quienes son los abanderados de estos principios. La independencia del encargado del cumplimiento es la garantía de que la ética no es solo una palabra, sino una acción palpable.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>IV. Cumplimiento Normativo como Defensa Empresarial:</h2>
        El cumplimiento normativo no es simplemente una cuestión legal; es la línea de defensa que garantiza que cada nivel de la empresa opere de manera ética y legítima. Prevenir conflictos se traduce en lealtad de empleados, interés de audiencias y resguardo del capital intelectual.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>V. Ventajas de una Buena Reputación:</h2>
        La buena reputación no es solo un distintivo, sino un activo que impulsa el crecimiento económico y eleva el valor comercial de los productos. En tiempos de crisis, la reputación se convierte en el escudo que resguarda el valor de mercado y la confianza organizacional.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>VI. Liderazgo Ético en la Cultura Organizacional:</h2>
        La ética organizacional es el timón que guía las decisiones en momentos cruciales. Los líderes éticos no solo inspiran confianza, sino que cultivan un compromiso voluntario de los empleados ante las acciones organizacionales.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>VII. Compliance en la "Nueva Normalidad":</h2>
        En este escenario de la "nueva normalidad", la necesidad de compliance no solo persiste, sino que se torna aún más apremiante. La comunicación interna efectiva, respaldada por habilidades de empatía, se convierte en el cimiento sobre el cual las empresas construyen su resiliencia.
      </p>
      <p className='text-gray-800 ml-4'>
        <h2 className='text-lg font-semibold mb-2'>VIII. Habilidades del Oficial de Cumplimiento:</h2>
        El oficial de cumplimiento, en este contexto, no solo debe poseer conocimientos técnicos y perspicacia comercial, sino también cinco habilidades esenciales que agregan un máximo valor: valor, integridad, habilidades de diplomacia y negociación, gestión de riesgos y, sobre todo, liderazgo.
      </p>
      <p className='text-gray-800'>
        En conclusión, el compliance y la ética empresarial no son simplemente un "boom" corporativo pasajero, sino una necesidad ineludible en la dinámica empresarial actual. Las empresas que adoptan estos principios no solo se resguardan legalmente, sino que construyen cimientos sólidos para un crecimiento sostenible en esta era de desafíos constantes.
        </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
