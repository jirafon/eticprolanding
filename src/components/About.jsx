import React, { useState } from "react";
import Laptop from "../assets/team2.png";
import GG from "../assets/biogg.png";
import CH from "../assets/bioch.png";

const About = () => {
  const [showGiovannaFull, setShowGiovannaFull] = useState(false);

  return (
    <section id="aboutus" className="aboutus relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="relative w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> Plataforma de Compliance </div>
            <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"> ¿Qué es <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Eticpro</span>? </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> Una solución integral que combina tecnología avanzada con expertise legal para transformar la gestión de compliance empresarial </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative z-10">
                <img className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" src={Laptop} alt="Equipo de Eticpro trabajando en la plataforma de compliance" loading="lazy" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solución Integral de Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4"> Eticpro es una herramienta integral de cumplimiento que combina tecnología con conocimientos legales, permitiendo realizar controles preventivos de delitos económicos necesarios para el Modelo de Prevención de Delitos. </p>
                <p className="text-gray-700 leading-relaxed"> Las personas jurídicas enfrentan problemas complejos que las exponen a altos riesgos de responsabilidad penal. Eticpro llena este vacío ofreciendo una solución específica que permite implementar el Modelo de Prevención de Delitos en <strong className="text-blue-600">24 horas</strong>. </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Implementación Rápida</h4>
                  <p className="text-sm text-gray-600">Modelo operativo en 24 horas</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Seguridad Legal</h4>
                  <p className="text-sm text-gray-600">Protección jurídica garantizada</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Enfoque Especializado</h4>
                  <p className="text-sm text-gray-600">Solución específica para compliance</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Eficiencia Operativa</h4>
                  <p className="text-sm text-gray-600">Procesos optimizados y automatizados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> Nuestra <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Identidad</span> </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nuestra Misión</h4>
                <p className="text-gray-600 leading-relaxed"> Eticpro está dedicada a que las organizaciones puedan gestionar sus necesidades de compliance de manera eficiente, con herramientas que tienen sustento legal y ético. </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nuestra Visión</h4>
                <p className="text-gray-600 leading-relaxed"> Ser una compañía que entrega soluciones concretas, tanto de forma como de fondo, a los desafíos legales de cumplimiento, consolidándose como un referente en el sector. </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"> </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nuestros Valores</h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Integridad</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Innovación</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Eficiencia</div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Empatía</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> Conoce a Nuestro <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Equipo</span> </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto"> Expertos en compliance y tecnología trabajando juntos para transformar la gestión ética empresarial </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img className="w-32 h-32 rounded-full shadow-lg mx-auto mb-4 object-cover" src={GG} alt="Giovanna Gardella - Managing Director de Eticpro" loading="lazy" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Giovanna Gardella</h4>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"> Managing Director </div>
              </div>
              <div className="text-gray-700 leading-relaxed text-sm">
                {!showGiovannaFull ? (
                  <>
                    <p>Giovanna ha trabajado en distintas instituciones financieras en Miami, EE.UU., como consultora especialista en la gestión e implementación de modelos de prevención de delitos. Es abogada de la Universidad de Chile, tiene un Master en Derecho Comparado de la Universidad de Miami (LL.M.) y está certificada como especialista en Antilavado de Dinero por ACAMS.</p>
                    <button 
                      onClick={() => setShowGiovannaFull(true)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Leer más
                    </button>
                  </>
                ) : (
                  <>
                    <p>Giovanna ha trabajado en distintas instituciones financieras en Miami, EE.UU., como consultora especialista en la gestión e implementación de modelos de prevención de delitos. En Latinoamérica, participó en la implementación y certificación del Programa de Compliance de BHP Billiton, Metales Base, de acuerdo al Foreign Corrupt Practices Act, Uk Bribery Act y la Ley Chilena No. 20393 de Responsabilidad Penal de las Personas Jurídicas. Esta experiencia le ha otorgado un amplio conocimiento de la legislación de Antilavado de Activos y Anticorrupción en EE.UU. y Latinoamérica. Además, Giovanna ha gestionado programas de cumplimiento en la industria farmacéutica y dispositivos médicos como Compliance Officer de Stryker, Grünenthal y Novartis. Es abogada de la Universidad de Chile, tiene un Master en Derecho Comparado de la Universidad de Miami (LL.M.) y está certificada como especialista en Antilavado de Dinero por la Asociación Mundial de Especialistas en Antilavado de Dinero (ACAMS). Obtuvo un diploma en inglés legal en la Universidad de Columbia en Nueva York y fue docente en el programa de Diplomado de Oficiales de Cumplimiento en la Universidad Adolfo Ibáñez en Miami.</p>
                    <button 
                      onClick={() => setShowGiovannaFull(false)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Leer menos
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img className="w-32 h-32 rounded-full shadow-lg mx-auto mb-4 object-cover" src={CH} alt="Cristian Haquin - Managing Director de Eticpro" loading="lazy" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Cristian Haquin</h4>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"> Managing Director </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm"> Cristian es Ingeniero Civil Industrial de la Universidad de Santiago, con un MBA en Negocios Internacionales de la Universidad Federico Santa María. Trabajó en empresas líderes como Siemens y BHP Billiton. Es Full-Stack Developer y arquitecto de soluciones. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
