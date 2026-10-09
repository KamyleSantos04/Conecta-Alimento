import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio/inicio';
import CriarConta from './pages/criarconta/criar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Criar' element={<CriarConta/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);