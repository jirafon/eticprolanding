import React, { useState } from "react";
import { FaLinkedin, FaNewspaper, FaCalendarAlt, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalPost, setModalPost] = useState(null);

  // Array con los 3 posts más recientes de LinkedIn de Eticpro (URLs reales)
  const linkedinPosts = [
    {
      id: 1,
      title:
        "Frente al alza de los delitos económicos: beneficios de los Programas de Cumplimiento – G5noticias",
      description:
        "Con más de 20 años de experiencia, Giovanna Gardella destaca que contar con Programas de Cumplimiento es una necesidad estratégica para operar con integridad, sostenibilidad y responsabilidad.",
      date: "21 Octubre 2025",
      url: "https://share.google/7Mv32LbYDsjx5PqLV",
      category: "Medios",
      engagement: "Nuevo artículo",
      hashtags: "#Compliance #Integridad #Gobernanza",
      content: `En el último tiempo se ha escuchado hablar mucho sobre la lucha contra la corrupción y la falta a la probidad. Para esto durante varios años han existido diversos cuerpos legislativos que han creado mecanismos preventivos para que no ocurran conductas contrarias a la ética o incluso delitos. Esto se ha traducido en un entorno empresarial cada vez más exigente y regulado, razón por la cual las organizaciones deben contar con Programas de Cumplimiento (Compliance Program, en inglés) que garanticen el respeto de la regulación, según sea el caso.

Lo anterior es una necesidad estratégica para las empresas que buscan operar con integridad, sostenibilidad y responsabilidad. Así lo destaca Giovanna Gardella, abogada de la Universidad de Chile y managing director de las firmas Compliance Global Consulting y ETICPRO, quien además posee un LL.M en la Universidad de Miami y diplomado en Columbia University NYC. Giovanna ejerció el cargo de Head de Compliance en distintas multinacionales de la industria bancaria, cobre y salud.

La profesional explica que un Programa de Cumplimiento es un sistema de gestión de riesgos que integra políticas y procedimientos para asegurar que los requerimientos legales y éticos de una empresa o institución se respeten y, de esa forma, protegerla de incumplimientos legales y daños reputacionales. "Su correcta implementación permite prevenir conductas indebidas, delitos, sanciones y daños que pueden afectar gravemente el prestigio y el valor de una organización en el mercado", advierte la experta con más de 20 años de experiencia.

Adicionalmente, menciona que estos programas deben ser gestionados por un Gerente de Cumplimiento (Compliance Manager) u Oficial de Cumplimiento (Compliance Officer), profesional de alta jerarquía y experiencia, encargado de supervisar que una entidad actúe conforme a las normativas y estándares ético empresariales.

Aspectos positivos

Para esta profesional, actuar correctamente no sólo representa la satisfacción moral de hacer lo correcto, sino que también agrega valor económico. De acuerdo con un estudio de CEB RiskClarity, una cultura corporativa basada en la ética y la integridad aumenta el compromiso de los colaboradores en un 12% y mejora los retornos de los inversionistas en un 5%.

Asimismo, las empresas que cuentan con un Programa de Cumplimiento son más atractivas para socios y potenciales inversionistas, ya que ofrecen mayores garantías de transparencia y menor riesgo reputacional o penal. "Esto se traduce en más oportunidades de negocio en procesos de fusiones, adquisiciones o licencias, y mejor posicionamiento en licitaciones públicas o privadas, al recibir una puntuación superior frente a competidores que carecen de estos sistemas", resalta la profesional.

Un reciente estudio del 2024 llamado "Valuing Corporate Compliance" de la Universidad de Iowa, realizado por Todd Haug y Suneal Bedi, destaca que además de los argumentos de beneficios para empresas que se conocen hasta ahora- como el que ahorra multas, sanciones, permite ser un socio confiable y cuida la reputación de la empresa- se agrega otra variable interesante que es más apetecida por las áreas comerciales, en el cual los consumidores están dispuestos a pagar más por compliance.

Así lo demuestra este estudio en una muestra de 1600 personas "Consumers will pay more for compliance". "Hay una vinculación directa en que los productos se venden a mejor valor si se vinculan a programas de cumplimiento. Por ejemplo, en la elección de tarjetas de crédito entre los atributos que se mencionan que debería tener la tarjeta están que posea el cargo por mantención (43,7%) y el interés (20,4%) más bajo. Asimismo, otra característica muy valorada es que la empresa que la emite tenga un programa contra la corrupción y el fraude (17,9%), lo que supera a factores como los puntos que entrega el plástico (14,3%) y su diseño (3,7%)", explica Giovanna Gardella.

Legislación local

En Chile, la Ley N° 20.393 sobre Responsabilidad Penal de las Personas Jurídicas, y su reforma en el año 2023 por la Ley N°21.595 de Delitos Económicos, establece que las empresas pueden ser penalmente responsables por más de 400 delitos entre los cuales están el lavado de activos, financiamiento del terrorismo, cohecho, receptación, corrupción entre privados, administración desleal, apropiación indebida, negociación incompatible, delitos medioambientales e informáticos, entre otros.

En esta norma se establece que una empresa podrá eximirse de responsabilidad penal si cuenta con un Modelo de Prevención de Delitos que esté "efectivamente implementado" por la persona jurídica, el cual debe ser adecuado en razón de su objeto social, tamaño, complejidad, recursos y que considere por lo menos los siguientes aspectos:

1) Identificación de las actividades que impliquen riesgo de las conductas que se quieren prevenir;
2) Establecimiento de protocolos y procedimientos para prevenir las conductas delictivas;
3) Implementar un canal de denuncias y la existencia de sanciones;
4) Comunicación a los trabajadores, empleados, prestadores de servicios incluidos sus máximos ejecutivos como directores;
5) Incorporación de cláusulas de compliance en los contratos;
6) Asignación de uno o más sujetos responsables con la adecuada independencia, dotados de facultades efectivas de dirección y supervisión;
7) Asignación de recursos y medios materiales e inmateriales;
8) Previsión de evaluaciones periódicas por terceros independientes y mecanismos de perfeccionamiento o actualización a partir de tales evaluaciones.

De esta forma, agrega Giovanna Gardella, un Programa de Cumplimiento no sólo fortalece la ética organizacional y protege a la empresa de sanciones, sino que también impulsa su competitividad, sostenibilidad y confianza ante el mercado. "Una compañía o institución con un sólido Modelo de Prevención de Delitos no sólo cumple la ley, sino que genera negocios sostenibles y rentables en el largo plazo. La ética corporativa es hoy una ventaja competitiva real", asevera la abogada de Compliance Global Consulting y ETICPRO.

Acerca de Compliance Global Consulting

Firma especializada en consultoría en ética corporativa y cumplimiento normativo (Compliance) dedicada a asesorar a empresas, organizaciones, instituciones y a sus colaboradores con el objetivo de que cumplan su misión corporativa con ética e integridad, incluyendo no sólo el respecto de la ley, sino que también las buenas prácticas, mediante la gestión e implementación de Programas de Cumplimiento, los cuales son accesibles a todo tipo de empresas y diseñados de acuerdo a las necesidades y riesgos de cada cliente. Para mayor información visitar www.compliancegc.com

Acerca de ETICPRO

ETICPRO es una herramienta integral de cumplimiento que combina tecnología con conocimientos legales, permitiendo realizar controles preventivos de delitos económicos necesarios para el Modelo de Prevención de Delitos. Las personas jurídicas enfrentan problemas complejos que las exponen a altos riesgos de responsabilidad penal. ETICPRO llena este vacío ofreciendo una solución específica que permite implementar el Modelo de Prevención de Delitos en 24 horas. Para más información visitar www.eticpro.com`
    },
    {
      id: 2,
      title: "Entrevista sobre ACEC - Asociación Chilena de Ética y Compliance",
      description: "¿Qué es la ACEC - Asociación Chilena de Ética y Compliance?, ¿cómo surgió?, ¿está hoy el sector privado más consciente de la importancia de tener mejores mecanismos de prevención?, ¿se puede aplicar compliance en el sector público? Son algunas de las preguntas que surgieron en esta entrevista de nuestra directora Giovanna Gardella y Rodrigo Reyes Duarte en Información Privilegiada de Radio Duna.",
      date: "Junio 2025",
      url: "https://www.linkedin.com/posts/eticpro_qu%C3%A9-es-la-acec-asociaci%C3%B3n-chilena-de-%C3%A9tica-activity-7336921356330016768-VzT2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD8FekBcTgSf2M26uwM-7CgOFRPcIkGCo8",
      category: "Entrevistas",
      engagement: "9 reacciones",
      hashtags: "#ACEC #Compliance #Ética #RadioDuna"
    },
    {
      id: 3,
      title: "Conversatorio sobre FCPA y Compliance",
      description: "🗣️ Nuestra directora Giovanna Gardella participó este jueves en un conversatorio junto a otras destacadas especialistas, en el que se conversó sobre la decisión del Presidente Donald Trump de pausar la aplicación del Foreign Corrupt Practices Act (FCPA), lo que reafirma la necesidad de contar con programas de compliance sólidos y efectivos.",
      date: "Mayo 2025",
      url: "https://www.linkedin.com/posts/eticpro_compliance-fcpa-aezticaempresarial-activity-7329265281090928640-ua9c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD8FekBcTgSf2M26uwM-7CgOFRPcIkGCo8",
      category: "Eventos",
      engagement: "Varias reacciones",
      hashtags: "#Compliance #FCPA #ÉticaEmpresarial #GobiernoCorporativo #Regulación #Integridad #EmpresasGlobales #ChileEEUU"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % linkedinPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + linkedinPosts.length) % linkedinPosts.length);
  };

  const openModal = (post) => {
    setModalPost(post);
  };

  const closeModal = () => {
    setModalPost(null);
  };

    return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <FaNewspaper className="mr-2" />
            Posts Recientes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Últimas <span className="text-gradient">Noticias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Los posts más recientes de nuestro LinkedIn. Mantente al día con las últimas novedades 
            de Eticpro, entrevistas, eventos y casos de éxito en compliance.
          </p>
        </div>

        {/* LinkedIn Posts Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Post anterior"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          
                    <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Siguiente post"
          >
            <FaChevronRight className="text-blue-600" />
                    </button>
                
          {/* Posts Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {linkedinPosts.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-large p-8 max-w-4xl mx-auto">
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <FaLinkedin className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <FaCalendarAlt className="mr-1" />
                              {post.date}
                            </span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        aria-label="Ver post completo en LinkedIn"
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        Ver en LinkedIn
                      </a>
                    </div>

                    {/* Post Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    {/* LinkedIn Post Simulation */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-center text-gray-500 mb-4">
                        <FaLinkedin className="inline-block mr-2 text-blue-600" />
                        Post de LinkedIn
                      </div>
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        {/* LinkedIn Header */}
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">E</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">Eticpro</div>
                            <div className="text-sm text-gray-600">Plataforma de Compliance • {post.date}</div>
                          </div>
                        </div>
                        
                        {/* Post Content */}
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {post.description}
                        </p>
                        
                        {/* Hashtags */}
                        <p className="text-blue-600 text-sm mb-4">
                          {post.hashtags}
                        </p>
                        
                        {/* Engagement */}
                        <div className="text-sm text-gray-500 mb-4">
                          {post.engagement}
                        </div>
                        
                        {/* Read More Button for articles with full content */}
                        {post.content && (
                          <div className="pt-4 border-t border-gray-200">
                            <button
                              onClick={() => openModal(post)}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                            >
                              <span>Leer artículo completo</span>
                              <FaExternalLinkAlt className="ml-2 text-xs" />
                            </button>
                          </div>
                        )}
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {linkedinPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al post ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Quieres ver más contenido?
            </h3>
            <p className="text-gray-600 mb-6">
              Síguenos en LinkedIn para recibir las últimas noticias sobre compliance, 
              entrevistas, eventos y actualizaciones de Eticpro en tiempo real.
            </p>
            <a
              href="https://cl.linkedin.com/company/eticpro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <FaLinkedin className="mr-2" />
              Seguir en LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Modal for full article content */}
      {modalPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaNewspaper className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{modalPost.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {modalPost.date}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {modalPost.category}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {modalPost.content}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{modalPost.hashtags}</span>
              </div>
              <div className="flex space-x-3">
                <a
                  href={modalPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="mr-2 text-xs" />
                  Ver fuente original
                </a>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-200 text-sm font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </section>
    );
};

export default News;