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
      <div className={`mt-4 radio-container ${questions[currentQuestion].name === 'q3' ? 'question-3-radio-container' : ''}`}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className='mt-2'>
            <input
              type={questions[currentQuestion].name === 'q3' ? 'checkbox' : 'radio'} 
              name={questions[currentQuestion].name}
              value={option.label}
              checked={quizAnswers[questions[currentQuestion].name]?.includes(option.label)} 
              onChange={onAnswerChange}
              required={!quizAnswers[questions[currentQuestion].name]?.length && questions[currentQuestion].name !== 'q3'}
              className='mr-2'
            />
            <label className="ml-2">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
    <p className="mt-4"></p>
    <div className='navigation-buttons mt-4'>
      <button type="button" onClick={onBack} disabled={currentQuestion === 0} className='bg-[#00df9a] text-black rounded-md font-medium w-[100px] mx-auto my-6 px-6 py-3'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {currentQuestion < questions.length - 1 && (
        <button type="button" onClick={onNext} className='bg-[#00df9a] text-black rounded-md font-medium w-[100px] mx-auto my-6 px-6 py-3'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
      {currentQuestion === questions.length - 1 && (
        <button type="submit" className='bg-[#00df9a] text-black rounded-md font-medium w-[100px] mx-auto my-6 px-6 py-3'>
          Enviar</button>
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
      question: '¿Cuáles son las principales prioridades de su empresa en términos de compliance?',
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
      question: '¿Qué procedimientos cuentan con controles reales, escritos y efectivos, que cuentan con evidencia demostrable en todo momento y trazable para hacer seguimiento? Seleccione todas las que apliquen:',
      options: [
        { label: 'Registros de reuniones', points: 2 },
        { label: 'Declaraciones de conflictos de interés', points: 2 },
        { label: 'Declaraciones de transferencias de valor', points: 2 },
        { label: 'Control de lectura de documentos', points: 2 },
        { label: 'Canal de denuncia anónima', points: 2 },
        { label: 'Campaña comunicacional', points: 2 },
        { label: 'Diligencia debida de contrapartes', points: 2 },
        { label: 'Diligencia debida de postulantes de empleo', points: 2 }
      ],
      name: 'q2',
      points: 16 // 8 opciones * 2 puntos cada una
    },
    {
      question: '¿Ha realizado su empresa una identificación de los riesgos asociados a los delitos de lavado de activos, financiamiento del terrorismo y cohecho dentro de sus actividades y procesos?',
      options: [
        { label: 'Sí, hemos identificado todos los riesgos relevantes', points: 3 },
        { label: 'Hemos identificado algunos riesgos, pero falta profundizar', points: 2 },
        { label: 'No hemos realizado una identificación formal de riesgos', points: 1 }
      ],
      name: 'q3',
      points: 3 // Máximo 3 puntos
    },
    {
      question: '¿Ha designado su empresa a una persona responsable con autonomía para supervisar el cumplimiento del modelo de prevención de delitos?',
      options: [
        { label: 'Sí', points: 3 },
        { label: 'No', points: 0 },
        { label: 'En proceso', points: 2 }
      ],
      name: 'q4',
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
      const response = await fetch('https://unbiax-main-server.onrender.com/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: ['chaquin@gmail.com'],
          
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
    const { name, value, checked } = e.target;
    if (questions[currentQuestion].name === 'q3') {
      // Si es la pregunta 3 y permite selección múltiple
      let updatedAnswers = [...quizAnswers[questions[currentQuestion].name] || []]; // Obtener respuestas anteriores o un array vacío
      if (checked) {
        updatedAnswers.push(value); // Agregar la opción seleccionada
      } else {
        updatedAnswers = updatedAnswers.filter(answer => answer !== value); // Quitar la opción deseleccionada
      }
      setQuizAnswers({ ...quizAnswers, [name]: updatedAnswers }); // Actualizar las respuestas
    } else {
      // Si es una pregunta de opción única
      setQuizAnswers({ ...quizAnswers, [name]: value });
    }
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
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 my-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Contáctenos Aquí
            </h1>
            <p className="text-base sm:text-lg md:text-xl py-2">
              Porfavor complete sus datos y unas breves preguntas para ayudarle mejor.
            </p>
          </div>
          <div className="my-4">

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
        <div className='modal fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50'>
          <div className='modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative'>
            <span className='close text-black text-2xl cursor-pointer absolute top-4 right-4' onClick={() => setShowQuiz(false)}>&times;</span>
            {!isQuizStarted ? (
              <form onSubmit={handleStartQuiz} className='flex flex-col items-center'>
                <p></p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-2 text-center">
                  Bienvenido, por favor complete sus datos:
                </h2>
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${name ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Nombre'
                  value={name}
                  onChange={handleInputChange(setName)}
                  required
                />
                <p></p>
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${email ? 'input-orange-border' : ''}`}
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  required
                />
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${phone ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Teléfono'
                  value={phone}
                  onChange={handleInputChange(setPhone)}
                  required
                />
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${company ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Empresa'
                  value={company}
                  onChange={handleInputChange(setCompany)}
                />
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${industria ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Industria'
                  value={industria}
                  onChange={handleInputChange(setIndustria)}
                />
                <input
                  className={`p-3 rounded-md text-black mt-4 mb-4 mr-4 w-full sm:w-auto ${comment ? 'input-orange-border' : ''}`}
                  type='text'
                  placeholder='Mensaje'
                  value={comment}
                  onChange={handleInputChange(setComment)}
                />
                <p></p>
                <button type='submit' className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                  Continuar
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