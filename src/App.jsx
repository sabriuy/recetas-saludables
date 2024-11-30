import { useState } from 'react';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gridrecetas from './components/Gridrecetas';
import Recetas from './components/Recetas';

function App() {
  return (
    <Router> {/* El Router debe envolver toda la aplicación */}
      <div className='container-header'>
        <header className='header'>
          <p className='titulo'>Recetas saludables</p>
        </header>

        <Routes> {/* Definir las rutas aquí */}
          <Route path="/" element={<Gridrecetas />} />  {/* Ruta para la lista de recetas */}
          <Route path="/receta/:id" element={<Recetas />} />  {/* Ruta para una receta individual */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
