import React from 'react';
import Laptop from '../assets/team2.png';

const About = () => {
  return (
    <div id="about" className="about">

    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '></p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Quienes Somos.</h1>
          <p>


          Nuestro equipo está compuesto por Giovanna y Cristian, expertos en Compliance y Tecnologia. Nos enorgullece contar con profesionales altamente capacitados que trabajan en conjunto para brindar soluciones efectivas y personalizadas a nuestros clientes.

</p>
<p>
Giovanna, es abogada experta en cumplimiento y prevención de delitos financieros. Con experiencia en instituciones financieras en Miami y en la implementación del Programa de Compliance de BHP Billiton en América Latina, Giovanna ha sido Compliance Officer en empresas farmacéuticas líderes como Stryker, Grünenthal y Novartis. Su formación incluye un Master en Derecho Comparado de la Universidad de Miami y certificación en Antilavado de Dinero por ACAMS. Giovanna también ha sido docente en la Universidad Adolfo Ibáñez en Miami, contribuyendo al programa de Diplomado de Oficiales de Cumplimiento. Destaca por su enfoque integral y comprensión profunda de regulaciones en EE. UU. y Latinoamérica.
</p>

<p>
</p>
<p>
La calidad y la innovación son pilares fundamentales en todo lo que hacemos. Estamos constantemente actualizando nuestros conocimientos y adoptando nuevas tecnologías para garantizar que nuestros productos y servicios estén a la vanguardia de la industria.

Además, nos preocupamos por el impacto que tenemos en nuestro entorno. Buscamos ser una empresa sostenible y respetuosa con el medio ambiente, implementando prácticas responsables en todas nuestras operaciones.




          </p>
       
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '></p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'></h1>
          <p>

          </p>
          
        </div>
      </div>
    </div>
    </div>

  );
};

export default About;
