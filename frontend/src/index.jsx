
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import Comeco from './pages/comeco/comeco.jsx'
=======

import Inicio from './pages/inicio/inicio';
import CriarConta from './pages/criarconta/criar';
import ComoFunciona from './pages/comofunciona/index';
import Doacoes from './pages/doacoes/index';
import Instituicoes from './pages/instituicoes/index';
import CadastroInstituicao from './pages/contaong/index';
import Estabelecimento from './pages/contaestabele/index';
import QueroDoar from './pages/querodoar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 17866595894d1baafca410e954ababe2617929c7

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Comeco />
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Criar" element={<CriarConta />} />
        <Route path="/ComoFunciona" element={<ComoFunciona />} />
        <Route path="/Doacoes" element={<Doacoes />} />
        <Route path="/Instituicoes" element={<Instituicoes />} />
        <Route path="/CadastroInstituicao" element={<CadastroInstituicao />} />
        <Route path="/Estabelecimento" element={<Estabelecimento />}/>
        <Route path='/QueroDoar' element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 17866595894d1baafca410e954ababe2617929c7
  </React.StrictMode>
);