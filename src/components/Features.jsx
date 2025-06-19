import React, { useState } from 'react';
import campvid from '../assets/campvid.gif';
import repovid from '../assets/repo.gif';
import declaracionesvid from '../assets/declaracionesvid.gif';
import transferenciavid from '../assets/transferenciasvid.gif';
import reunionesvid from '../assets/reuniones.gif';
import diligenciavid from '../assets/diligenciavid.gif';
import denunciasvid from '../assets/denuncias.gif';
import actividadvid from '../assets/actividadvid.gif';
import pendientes from '../assets/pendientes.gif';

const KeyFeatures = () => {
  const [selectedImage, setSelectedImage] = useState(pendientes);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id="ventajas" className="relative">
      <div className="w-full bg-[#ecfdff] py-16 px-4">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {/* 🔹 h2 principal SEO */}
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-8">
              Módulos Principales de Cumplimiento en Eticpro
            </h2>

            <p className="text-sm text-start mb-6">
              Eticpro contiene el contenido legal y operativo que tomaría muchas horas de abogado y años de experiencia en formularios, junto con funcionalidad clave para mejorar la eficiencia del cumplimiento normativo.
            </p>

            <p className="text-sm text-start mb-6">
              Perfiles incluidos: Gerente de Cumplimiento, Director, Auditor, Aprobador, Declarante, Denunciante, Investigador y Comité de Ética.
            </p>

            <ul className="list-none space-y-4">
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(campvid)}>
                <h3 className="text-lg md:text-xl font-semibold">Campañas de Cultura de Cumplimiento</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(repovid)}>
                <h3 className="text-lg md:text-xl font-semibold">Repositorio de Políticas y Procedimientos</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(declaracionesvid)}>
                <h3 className="text-lg md:text-xl font-semibold">Declaraciones de Conflictos de Interés</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(transferenciavid)}>
                <h3 className="text-lg md:text-xl font-semibold">Transferencias de Valor</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(reunionesvid)}>
                <h3 className="text-lg md:text-xl font-semibold">Registro de Reuniones con Personas de Interés</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(diligenciavid)}>
                <h3 className="text-lg md:text-xl font-semibold">Diligencia Debida de Contrapartes</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(denunciasvid)}>
                <h3 className="text-lg md:text-xl font-semibold">Canal de Denuncias</h3>
              </li>
              <li className="bg-white p-4 flex items-start cursor-pointer" onClick={() => handleClick(actividadvid)}>
                <h3 className="text-lg md:text-xl font-semibold">Actividad de Usuarios</h3>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <img
              src={selectedImage}
              alt="Módulo de Eticpro"
              className="max-w-full h-auto max-h-[500px] object-contain translate-y-[40%] translate-x-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
