// Archivo: src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Aquí luego agregaremos un Navbar compartido */}
      <div className="container mt-5">
        <Routes>
          {/* Ruta para el compañero de Catálogo / HU-2 */}
          <Route path="/" element={
            <div>
              <h1 className="text-primary">Catálogo de Espacios (HU-2)</h1>
              <p>El encargado de esta HU trabajará en la carpeta src/views/hu2/</p>
            </div>
          } />

          {/* Ruta para el compañero de Acceso / HU-1 */}
          <Route path="/login" element={
            <div>
              <h1>Iniciar Sesión (HU-1)</h1>
              <p>El encargado de esta HU trabajará en la carpeta src/views/hu1/</p>
            </div>
          } />

          {/* Ruta para tu historia / HU-5 */}
          <Route path="/operacion-diaria" element={
            <div>
              <h1>Bandeja del Día y Bloqueos (HU-5)</h1>
              <p>Tú trabajarás aquí, desde la carpeta src/views/hu5/</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;