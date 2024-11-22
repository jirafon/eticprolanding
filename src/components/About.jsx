import React from 'react';
import Laptop from '../assets/team2.png';
import GG from '../assets/biogg.png';
import CH from '../assets/bioch.png';

const About = () => {
  return (
    <div id="aboutus" className="aboutus">
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[900px] mx-auto my-4' src={Laptop} alt='/' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'></p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              ¿Que es Eticpro?
            </h1>
            <p>
           
Eticpro es una herramienta  integral de cumplimiento que combina tecnología con conocimientos legales, la cual permite realizar controles preventivos de delitos económicos necesarios para el Modelo de Prevención de Delitos.
Las personas jurídicas enfrentan problemas complejos que las exponen a altos riesgos de ser responsables penalmente. Para evitar la responsabilidad criminal la empresa debe probar que efectivamente ha implementado un modelo de prevención delitos que evite la comisión del delito. Esto consume  mucho tiempo y esfuerzo en una organización, además que existe mucho desconocimiento de saber qué controles específicos pueden proteger legalmente a una empresa. Algunas  organizaciones utilizan herramientas de software genéricas que carecen de enfoque legal en la gestión, reportes, procedimientos, registro, seguridad y/o flexibilidad.
Eticpro llena este vacío, al ofrecer una solución específica para las áreas de Cumplimiento, que permite en 24hrs tener operativo el Modelo de Prevención de Delitos, el cual tiene la finalidad de que las empresas aborden eficientemente los problemas de cumplimiento en forma segura y dedicada.
            </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              ¿Quiénes Somos?
            </h1>
          <p></p>
            <p className="py-4">
              Nuestra misión es que Eticpro este dedicada a que las organizaciones puedan gestionar sus necesidades de compliance de manera eficiente, con herramientas que tienen sustento legal y ético. Esto hace que los procesos de cumplimiento sean amigables, fáciles de seguir y con sentido.
            </p>
            <p>
             Nuestra Visión es Ser una compañía que entrega soluciones concretas, tanto de forma como de fondo, a los desafíos legales de cumplimiento, consolidándose como un referente en el sector.
            </p>
            <p className="py-4">
              Nuestros Valores son Integridad, Innovación, Eficiencia y Empatía.
            </p>
            <img className='w-[150px] mx-auto my-4' src={GG} alt='Giovanna Gardella' />
            <div>
              <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Giovanna Gardella</h6>
              <h6 className='md:text-2xl sm:text-3xl text-4xl py-2'>Managing Director</h6>
              <p>
                Giovanna ha trabajado en distintas instituciones financieras en Miami, EE.UU., como consultora especialista en la gestión e implementación de modelos de prevención de delitos. En Latinoamérica, participó en la implementación y certificación del Programa de Compliance de BHP Billiton, Metales Base, de acuerdo al Foreign Corrupt Practices Act, Uk Bribery Act y la Ley Chilena No. 20393 de Responsabilidad Penal de las Personas Jurídicas. Esta experiencia le ha otorgado un amplio conocimiento de la legislación de Antilavado de Activos y Anticorrupción en EE.UU. y Latinoamérica. Además, Giovanna ha gestionado programas de cumplimiento en la industria farmacéutica y dispositivos médicos como Compliance Officer de Stryker, Grünenthal y Novartis. Es abogada de la Universidad de Chile, tiene un Master en Derecho Comparado de la Universidad de Miami (LL.M.) y está certificada como especialista en Antilavado de Dinero por la Asociación Mundial de Especialistas en Antilavado de Dinero (ACAMS). Obtuvo un diploma en inglés legal en la Universidad de Columbia en Nueva York y fue docente en el programa de Diplomado de Oficiales de Cumplimiento en la Universidad Adolfo Ibáñez en Miami.
              </p>
            </div>
            <img className='w-[150px] mx-auto my-4' src={CH} alt='Cristian Haquin' />
            <div>
              <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Cristian Haquin</h6>
              <h6 className='md:text-2xl sm:text-3xl text-2xl py-2'>Managing Director</h6>
              <p>
                Cristian es Ingeniero Civil Industrial de la Universidad de Santiago, con un MBA en Negocios Internacionales de la Universidad Federico Santa María. Trabajó en empresas líderes como Siemens y BHP Billiton. Su experiencia abarca liderar áreas de negocios, manejo y gestión de datos, diseño de procesos, y desarrollo de hardware y software, incluyendo habilidades en LLMs y Data Management. Además de su experiencia en consultoría a empresas, es Full-Stack Developer y arquitecto de soluciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
