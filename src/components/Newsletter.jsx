import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const QuizResultsModal = ({ onClose, obtainedPoints, totalPoints, percentage }) => (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={onClose}>&times;</span>
      <h2>Hemos recibido sus datos y su resultados de la Encuesta</h2>
      <p>Su resultado es {obtainedPoints} puntos de un total de {totalPoints} puntos.</p>
      <p>Su porcentaje de avance es {percentage}%.</p>
      <button onClick={onClose} className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>Cerrar</button>
    </div>
  </div>
);

const ContactForm = ({ onSubmit, onInputChange, formData }) => {
  const { name, phone, company, email, comment, industria } = formData;
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col w-full'>
        <input
          className={`p-3 rounded-md text-black mb-4 ${name ? 'input-orange-border' : ''}`}
          type='text'
          placeholder='Nombre'
          value={name}
          onChange={onInputChange('name')}
          required
        />
        <input
          className={`p-3 rounded-md text-black mb-4 ${phone ? 'input-orange-border' : ''}`}
          type='text'
          placeholder='Teléfono'
          value={phone}
          onChange={onInputChange('phone')}
          required
        />
        <input
          className={`p-3 rounded-md text-black mb-4 ${industria ? 'input-orange-border' : ''}`}
          type='text'
          placeholder='Industria'
          value={industria}
          onChange={onInputChange('industria')}
        />
        <input
          className={`p-3 rounded-md text-black mb-4 ${company ? 'input-orange-border' : ''}`}
          type='text'
          placeholder='Empresa'
          value={company}
          onChange={onInputChange('company')}
        />
        <input
          className={`p-3 rounded-md text-black mb-4 ${email ? 'input-orange-border' : ''}`}
          type='email'
          placeholder='Email'
          value={email}
          onChange={onInputChange('email')}
          required
        />
        <input
          className={`p-3 rounded-md text-black mb-4 ${comment ? 'input-orange-border' : ''}`}
          type='text'
          placeholder='Mensaje'
          value={comment}
          onChange={onInputChange('comment')}
        />
        <button
          type='submit'
          className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'
        >
          Contactarme
        </button>
      </div>
    </form>
  );
};

const Quiz = ({ questions, currentQuestion, quizAnswers, onAnswerChange, onNext, onBack, onQuizSubmit }) => (
  <form onSubmit={currentQuestion === questions.length - 1 ? onQuizSubmit : undefined} className="mt-4 mr-4 ml-4">
    <h2 className="mt-4">{`Encuesta de Compliance - Pregunta ${currentQuestion + 1} / ${questions.length}`}</h2>
    <div className="mt-4">
      <h3>{questions[currentQuestion].question}</h3>
      <div className='mt-4 radio-container'>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className='mt-4'>
            <input
              type='radio'
              name={questions[currentQuestion].name}
              value={option.label}
              checked={quizAnswers[questions[currentQuestion].name] === option.label}
              onChange={onAnswerChange}
              required
              className='mr-2'
            />
            {option.label}
          </div>
        ))}
      </div>
    </div>
    <p className="mt-4"></p>
    <div className='navigation-buttons mt-4'>
      <button type="button" onClick={onBack} disabled={currentQuestion === 0} className="mt-4">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {currentQuestion < questions.length - 1 && (
        <button type="button" onClick={onNext} className="mt-4">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
      {currentQuestion === questions.length - 1 && (
        <button type="submit" className="mt-4">Enviar</button>
      )}
    </div>
  </form>
);




const Contacto = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [industria, setIndustria] = useState('');


  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showQuizResultsModal, setShowQuizResultsModal] = useState(false);
  const [obtainedPoints, setObtainedPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [percentage, setPercentage] = useState(0);



  const questions = [
    {
      question: '¿Cuáles son las principales prioridades de su empresa en términos de compliance y gobierno corporativo?',
      options: [
        { label: 'Inicial (sin implementación)', points: 0 },
        { label: 'Implementación de políticas y procedimientos', points: 1 },
        { label: 'Formación y concienciación de empleados', points: 2 },
        { label: 'Monitoreo y auditoría de actividades', points: 4 },
        { label: 'Establecimiento de un programa integral de compliance (compliance 360)', points: 5 }
      ],
      name: 'q1',
      points: 5 // Máximo 5 puntos
    },
    {
      question: '¿Qué tan implementados están los controles de lavado de activos, corrupción, cohecho y conflicto de intereses en su organización?',
      options: [
        { label: 'No implementados', points: 1 },
        { label: 'Parcialmente implementados', points: 2 },
        { label: 'Medianamente implementados', points: 3 },
        { label: 'Mayormente implementados', points: 4 },
        { label: 'Completamente implementados', points: 5 }
      ],
      name: 'q2',
      points: 5 // Máximo 5 puntos
    },
    {
      question: '¿Considera que su empresa es consciente de la importancia de tener controles contra el lavado de activos, corrupción, cohecho y conflicto de intereses?',
      options: [
        { label: 'Muy consciente y proactiva en la implementación de controles', points: 4 },
        { label: 'Consciente y activamente trabajando en la implementación de controles', points: 3 },
        { label: 'Conciencia moderada con planes en desarrollo para implementar controles', points: 2 },
        { label: 'Conciencia limitada y sin acciones concretas para implementar controles', points: 1 }
      ],
      name: 'q3',
      points: 4 // Máximo 4 puntos
    },
    {
      question: '¿Cuántas personas dentro de su organización, incluyendo gerentes, directores, proveedores y clientes, cree usted que están expuestas a riesgos de lavado de activos, corrupción, cohecho y conflicto de intereses?',
      options: [
        { label: 'Menos de 10', points: 4 },
        { label: 'Entre 10 y 50', points: 4 },
        { label: 'Entre 50 y 100', points: 4 },
        { label: 'Más de 100', points: 4 }
      ],
      name: 'q4',
      points: 4 // Máximo 4 puntos
    },
    {
      question: '¿Qué controles y medidas ha implementado su empresa para mitigar los riesgos de lavado de activos, corrupción, cohecho y conflicto de intereses? (Seleccione todas las que apliquen)',
      options: [
        { label: 'Políticas y procedimientos escritos', points: 2 },
        { label: 'Programas de formación y concienciación', points: 2 },
        { label: 'Sistemas de monitoreo y auditoría', points: 2 },
        { label: 'Evaluaciones de riesgo periódicas', points: 2 },
        { label: 'Canal de denuncias y protección de denunciantes', points: 2 },
        { label: 'Ninguna de las anteriores', points: 0 }
      ],
      name: 'q5',
      points: 12 // 6 opciones * 2 puntos cada una
    },
    {
      question: '¿Ha designado su empresa a una persona responsable con autonomía para supervisar el cumplimiento del modelo de prevención de delitos?',
      options: [
        { label: 'Sí', points: 3 },
        { label: 'No', points: 0 },
        { label: 'En proceso', points: 2 }
      ],
      name: 'q6',
      points: 3 // Máximo 3 puntos
    }, 
       {
        question: '¿Ha realizado su empresa una identificación de los riesgos asociados a los delitos de lavado de activos, financiamiento del terrorismo y cohecho dentro de sus actividades y procesos?',
        options: [
          { label: 'Sí, hemos identificado todos los riesgos relevantes', points: 3 },
          { label: 'Hemos identificado algunos riesgos, pero falta profundizar', points: 2 },
          { label: 'No hemos realizado una identificación formal de riesgos', points: 1 }
        ],
        name: 'q7',
        points: 1 // Máximo 1 punto
      },  
      {
        question: '¿Cuenta su empresa con protocolos, políticas y procedimientos específicos para prevenir y detectar delitos de lavado de activos, financiamiento del terrorismo y cohecho?',
        options: [
          { label: 'Sí, tenemos protocolos bien definidos y documentados', points: 3 },
          { label: 'Tenemos algunos protocolos, pero necesitan mejoras', points: 2 },
          { label: 'No contamos con protocolos específicos', points: 1 }
        ],
        name: 'q8',
        points: 3 // Máximo 3 puntos
      },
      {
        question: '¿Implementa su empresa auditorías y revisiones periódicas para asegurar la efectividad del modelo de prevención de delitos?',
        options: [
          { label: 'Sí, realizamos auditorías periódicas y revisiones regulares', points: 3 },
          { label: 'Hacemos auditorías ocasionales, pero no de manera regular', points: 2 },
          { label: 'No realizamos auditorías ni revisiones específicas', points: 1 }
        ],
        name: 'q9',
        points: 3 // Máximo 3 puntos
      },
      {
        question: '¿Ofrece su empresa formación continua a sus empleados sobre la importancia y aplicación del modelo de prevención de delitos?',
        options: [
          { label: 'Sí, ofrecemos capacitación continua y actualizada', points: 3 },
          { label: 'Ofrecemos capacitación, pero no de manera continua', points: 2 },
          { label: 'No ofrecemos formación específica sobre el modelo de prevención', points: 1 }
        ],
        name: 'q10',
        points: 3 // Máximo 3 puntos
      },
      {
        question: '¿Ha establecido su empresa mecanismos confidenciales para que los empleados y terceros puedan reportar posibles infracciones del modelo de prevención de delitos?',
        options: [
          { label: 'Sí, tenemos canales de denuncia confidenciales y accesibles', points: 3 },
          { label: 'Tenemos canales de denuncia, pero no son completamente confidenciales', points: 2 },
          { label: 'No contamos con canales de denuncia establecidos', points: 1 }
        ],
        name: 'q11',
        points: 3 // Máximo 3 puntos
      },
      {
        question: '¿Revisa y actualiza su empresa regularmente el modelo de prevención de delitos para mejorar su efectividad y adaptarse a nuevos riesgos?',
        options: [
          { label: 'Sí, revisamos y actualizamos el modelo de manera regular', points: 3 },
          { label: 'Hacemos revisiones ocasionales, pero no de manera regular', points: 2 },
          { label: 'No revisamos ni actualizamos el modelo de prevención', points: 1 }
        ],
        name: 'q12',
        points: 3 // Máximo 3 puntos
      }
  ];
  
   

  

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleContestarEncuestaClick = () => {
    setShowQuiz(true);
    setIsQuizStarted(false); // Reset the quiz started state
    setName(''); // Reset input values
    setEmail('');
    setPhone('');
    setCompany('');
    setIndustria('');
    setComment('');
  };

 

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
  
    let emailTemplate = `Hola, llegaron las siguientes respuestas de la encuesta junto con los detalles de contacto:\n\n`;
    emailTemplate += `<p><strong>Nombre:</strong> ${name}</p>`;
    emailTemplate += `<p><strong>Teléfono:</strong> ${phone}</p>`;
    emailTemplate += `<p><strong>Empresa:</strong> ${company}</p>`;
    emailTemplate += `<p><strong>Industria:</strong> ${industria}</p>`;
    emailTemplate += `<p><strong>Email:</strong> ${email}</p>`;
    emailTemplate += `<p><strong>Mensaje:</strong> ${comment}</p>`;
    emailTemplate += `<br/>Respuestas de la Encuesta:\n\n`;
  
    let totalPossiblePoints = 0; // Declaration
  
    totalPossiblePoints = questions.reduce((acc, question) => acc + question.points, 0); // Assignment
  
    let obtainedPoints = 0;
  
    questions.forEach((question, index) => {
      const answer = quizAnswers[question.name];
      emailTemplate += `
        <li>
          <p><strong>${index + 1}. ${question.question}</strong></p>
          <p>Respuesta: ${answer}</p>
        </li>
      `;
      const selectedOption = question.options.find(option => option.label === answer);
      if (selectedOption) {
        obtainedPoints += selectedOption.points;
      }
    });
  
    const percentage = ((obtainedPoints / totalPossiblePoints) * 100).toFixed(2);
  
    emailTemplate += `<p>Su resultado es ${obtainedPoints} puntos, de un total de ${totalPossiblePoints}. El % de avance es de ${percentage}%.</p>`;
  
    setShowQuizResultsModal(true);
    setObtainedPoints(obtainedPoints);
    setTotalPoints(totalPossiblePoints);
    setPercentage(percentage);
    setShowQuizResultsModal(true);
  
    try {
      const response = await fetch('https://unbiax-main-server.onrender.com/email2/send2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: ['hello@eticpro.com'],
          
          emailTemplate,
          subject: 'Respuestas de la Encuesta recibida',
        }),
      });
  
      if (response.ok) {
        setShowQuiz(false);
        setName('');
        setPhone('');
        setCompany('');
        setEmail('');
        setComment('');
        setIndustria('');
        setQuizAnswers({});
      } else {
        alert('Falló el envío de la encuesta.');
      }
    } catch (error) {
      console.error(error);
      alert('Falló el envío de la encuesta.');
    }
  };
  


  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (e) => {
    setQuizAnswers({ ...quizAnswers, [questions[currentQuestion].name]: e.target.value });
  };

  const handleStartQuiz = (e) => {
    e.preventDefault();
    setIsQuizStarted(true);
    setShowQuiz(true); // Show the quiz section
    setCurrentQuestion(0);
  };

  const handleCloseQuizResultsModal = () => {
    setShowQuizResultsModal(false);
  };
  return (
    <div id="contacto" className="newsletter-container animate__animated animate__fadeIn" style={{ backgroundColor: '#033D84', color: 'white' }}>
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='hidden sm:block md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Contactenos Aqui
            </h1>
            <p className='hidden md:block md:text-2xl sm:text-2xl text-1xl  py-2'>Porfavor complete sus  datos de contacto y 12 preguntas para conocer que tan preparado esta para cumplir con la ley.</p>
          </div>
         <div className='my-4'>

            <button
              onClick={handleContestarEncuestaClick}
              className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'
            >
              Comenzar
            </button>
          </div>
 
        </div>
      </div>
      {showQuiz && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowQuiz(false)}>&times;</span>
            {!isQuizStarted ? (
              <form onSubmit={handleStartQuiz}>
                <h2>Bienvenido, por favor complete aquí sus datos:</h2>
                <p></p>
                <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4 ${name ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Nombre'
                  value={name}
                  onChange={handleInputChange(setName)}
                  required

                />
                <p></p>
                <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4 ${email ? 'input-orange-border' : ''}`}
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  required
                />
                <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4 ${phone ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Teléfono'
                  value={phone}
                  onChange={handleInputChange(setPhone)}
                  required
                />
                <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4 ${company ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Empresa'
                  value={company}
                  onChange={handleInputChange(setCompany)}
                />
                <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4${industria ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Industria'
                  value={industria}
                  onChange={handleInputChange(setIndustria)}
                />
                  <input
                  className={`p-3 rounded-md text-black mt-4  mb-4 mr-4${comment ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Mensaje'
                  value={comment}
                  onChange={handleInputChange(setComment)}
                />
                <p></p>
                <button type='submit' className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                  Seguir
                </button>
              </form>
            ) : (
              <Quiz
              questions={questions}
              currentQuestion={currentQuestion}
              quizAnswers={quizAnswers}
              onAnswerChange={handleAnswerChange}
              onNext={handleNext}
              onBack={handleBack}
              onQuizSubmit={handleQuizSubmit}
            />
          )}
        </div>
      </div>
    )}
    {showQuizResultsModal && (
      <QuizResultsModal
        onClose={handleCloseQuizResultsModal}
        obtainedPoints={obtainedPoints}
        totalPoints={totalPoints}
        percentage={percentage}
      />
    )}
  </div>
);
};

export default Contacto;