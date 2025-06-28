import React, { useState } from "react";
import { FaLinkedin, FaNewspaper, FaCalendarAlt, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array con los 3 posts más recientes de LinkedIn de Eticpro (URLs reales)
  const linkedinPosts = [
    {
      id: 1,
      title: "Columna de Giovanna Gardella en Diario La Segunda",
      description: "Los invitamos a leer la columna de nuestra directora Giovanna Gardella sobre compliance en el sector público, que fue publicada hoy miércoles 11 de junio en Diario La Segunda.",
      date: "11 Junio 2025",
      url: "https://www.linkedin.com/posts/eticpro_aeztica-compliance-momentodeactuar-activity-7338693567416004608-Sge-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD8FekBcTgSf2M26uwM-7CgOFRPcIkGCo8",
      category: "Medios",
      engagement: "2 reacciones • 1 comentario",
      hashtags: "#Ética #Compliance #Momentodeactuar"
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
                        
                        {/* LinkedIn Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <FaThumbsUp className="mr-2" />
                            Me gusta
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <FaComment className="mr-2" />
                            Comentar
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <FaShare className="mr-2" />
                            Compartir
                          </button>
                        </div>
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
        </section>
    );
};

export default News;