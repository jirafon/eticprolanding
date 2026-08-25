import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './index.css';
import App from './App';
import './i18n';

function LangRoute() {
  const { lang } = useParams();
  if (lang === 'en' || lang === 'pt') return <App />;
  return <Navigate to="/" replace />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:lang" element={<LangRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
