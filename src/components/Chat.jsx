import React, { useState } from 'react';
import wsIcon from '../assets/social-whatsapp@2x.png';

const WHATSAPP_NUMBER = '56968484088';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, quiero hablar con el asistente IA de Eticpro');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingWhatsAppButton = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chatea con nosotros por WhatsApp"
    style={{
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '50%',
      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s',
    }}
    className="hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
  >
    <img src={wsIcon} alt="WhatsApp" style={{ width: '36px', height: '36px' }} />
  </a>
);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Crear un nuevo mensaje con la entrada del usuario
    const newMessage = {
      text: input,
      sender: 'user', // Puedes distinguir entre mensajes de usuario y respuestas del bot
    };

    // Actualizar el estado de mensajes
    setMessages([...messages, newMessage]);

    // Lógica para respuesta del chatbot (simulado)
    simulateChatbotResponse(input);

    // Limpiar el campo de entrada
    setInput('');
  };

  const simulateChatbotResponse = (userInput) => {
    // Aquí puedes implementar la lógica para generar una respuesta del chatbot
    // Por ejemplo, puedes tener respuestas predefinidas o usar inteligencia artificial para respuestas más avanzadas
    const botResponse = {
      text: `Gracias por tu mensaje: "${userInput}". Estamos revisando tu consulta.`,
      sender: 'bot',
    };

    // Simular una respuesta después de un tiempo de espera
    setTimeout(() => {
      setMessages([...messages, botResponse]);
    }, 500);
  };

  return (
    <>
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h2>Chat de Ventas</h2>
      <div style={{ minHeight: '300px', maxHeight: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{message.sender === 'user' ? 'Tú' : 'Bot'}</strong>: {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{ width: 'calc(100% - 80px)', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
    </div>
      <FloatingWhatsAppButton />
    </>
  );
};

export default Chat;
