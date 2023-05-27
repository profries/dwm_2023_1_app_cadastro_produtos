import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormProdutos from './componentes/FormProdutos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProdutos from './componentes/ListProdutos';
import Sobre from './componentes/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ListProdutos />} />
        <Route path="cadastro" element={<FormProdutos />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
