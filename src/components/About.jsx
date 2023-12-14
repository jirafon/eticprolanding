import React from 'react';
import Laptop from '../assets/team2.png';
import GG from '../assets/biogg.png';
import CH from '../assets/bioch.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[900px] mx-auto my-4' src={Laptop} alt='/' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '></p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Quienes Somos.</h1>
            <p>
              Nuestro equipo está compuesto por Giovanna y Cristian, expertos en Compliance y Tecnología.
            </p>
            <img className='w-[150px] mx-auto my-4' src={GG} alt='/' />
            <div>
              <p>
                Giovanna, abogada experta en cumplimiento y prevención de delitos financieros, con experiencia en instituciones financieras en Miami y en la implementación del Programa de Compliance de BHP Billiton en América Latina. Giovanna ha sido Compliance Officer en empresas farmacéuticas líderes como Stryker, Grünenthal y Novartis. Su formación incluye un Master en Derecho Comparado de la Universidad de Miami y certificación en Antilavado de Dinero por ACAMS. Giovanna también ha sido docente en la Universidad Adolfo Ibáñez en Miami, contribuyendo al programa de Diplomado de Oficiales de Cumplimiento. Destaca por su enfoque integral y comprensión profunda de regulaciones en EE. UU. y Latinoamérica.
              </p>
            </div>
            <img className='w-[150px] mx-auto my-4' src={CH} alt='/' />
            <div>
              <p>
                Cristian es Ingeniero Civil Industrial, posee un título MBA en Negocios Internacionales. Trabajó en empresas líderes tecnológicas en Chile y en BHP Billiton en Brasil, con enfoque en manejo de datos y alta comprensión de procesos. Su experiencia abarca liderar áreas de negocios y de desarrollo en HW y SW, incluyendo habilidades en Machine Learning, LLM, y Computer Vision. Además de tener gran experiencia como Full-Stack Developer y arquitecto de soluciones, se distingue por aplicar soluciones tecnológicas completas integradas para mejorar procesos empresariales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
