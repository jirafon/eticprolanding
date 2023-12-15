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
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'></h1>
            <p>
            </p>
            <img className='w-[150px] mx-auto my-4' src={GG} alt='/' />
            <div>
            <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Giovanna</h6>
            <h6 className='md:text-4xl sm:text-3xl text-4xl  py-2'>Managing Director</h6>

              <p>

              Giovanna ha trabajado en distintas instituciones financieras en Miami, EE.UU. como consultora especialista en la gestión e implementación de modelos de prevención de delitos. En Latinoamérica participó en la implementación y certificación del Programa de Compliance de BHP Billiton, Metales Base de acuerdo al Foreign Corrupt Practices Act, Uk Bribery Act y la Ley Chilena No.20393 de Responsabilidad Penal de las Personas Jurídicas. Toda esta experiencia ha enriquecido a Giovanna con amplios conocimientos de la legislación de Antilavado de activos y anticorrupción tanto en EE.UU. como Latinoamérica. Además Giovanna ha participado en la implementación y gestión de programas de Compliance de códigos de buenas prácticas de la industria farmacéutica y de dispositivos médicos desempeñándose como Compliance Officer de Stryker, Grünenthal y Novartis. La Sra. Gardella, es abogado de la Universidad de Chile, posee un Master en Derecho Comparado de la Universidad de Miami (LL.M.) y está certificada como especialista en Antilavado de Dinero por la Asociación Mundial de Especialistas en Antilavado de Dinero, conocida por sus siglas en Inglés ACAMS. Obtuvo un diploma de inglés legal en la Universidad de Columbia en Nueva York , EEUU. Fue docente de la Universidad Adolfo Ibáñez en el programa de Diplomado de Oficiales de Cumplimiento en su sede en Miami.
              </p>
            </div>
            <img className='w-[150px] mx-auto my-4' src={CH} alt='/' />
            <div>
            <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Cristian</h6>
            <h6 className='md:text-4xl sm:text-3xl text-2xl  py-2'>Managing Director</h6>

              <p>
              Cristian es Ingeniero Civil Industrial de la Universidad de Santiago, com título MBA en Negocios Internacionales de la U. Federico Santa Maria. Trabajó en empresas tecnológicas líderes en Chile como Ericcson, Nortel, Siemens y en BHP Billiton en Brasil, con enfoque en manejo de datos y alta comprensión de procesos. Su experiencia abarca liderar áreas de negocios y de desarrollo en HW y SW, incluyendo habilidades en Machine Learning, LLM y Computer Vision. Además de tener gran experiencia en consultoria a empresas, es Full-Stack Developer y arquitecto de soluciones. Se distingue en entender desde el negocio a sus clientes y desarrollar sus propias herramientas aplicando soluciones tecnológicas completas integradas para mejorar procesos empresariales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
