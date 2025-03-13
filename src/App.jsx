import { useState } from 'react'
import './App.css';
import Autor from './components/Autor';
import Mensaje from './components/Mensaje';

const App = () => {
  return(
    <>
      <Autor 
        nombre="Luis David Oporta Reyes"
        correo="luisdavidoporta777@gmail.com"
      />

      <Mensaje
        titulo="Programación con JavaScript"
        contenido="Soy el más perron aqui."
      />
    </>
  );
}

export default App;
