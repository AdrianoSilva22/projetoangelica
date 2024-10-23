import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import RegisterEvent from './pages/RegisterEvent';
import { ListagemEventos } from './pages/listagemEventos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/listagemEvents" element={<ListagemEventos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
