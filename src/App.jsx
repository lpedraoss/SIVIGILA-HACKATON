/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from 'react';
import './App.css'
import UseDiccionario from './data/diccionarios/rutina'

function App() {
  const { rutina } = UseDiccionario();
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate(rutina);
  }, [rutina]);

  // Filtrar los datos por ciertas cantidades
  const datosFiltrados = rutina.filter((dato) => {
    let codeDpto = dato.codDptoO === 5
    let id = dato.id  === 67
    return  codeDpto;
  });

  return (
    <>
      <article id="contenedor_producto">
        <ul id="productos">
          {datosFiltrados.map((dato) => (
            <li key={dato.id}>
              <h2>{"nombre de evento: " + dato.ndepProce}</h2>
              <h2>{"nombre de evento: " + dato.nomEve}</h2>
              <h2>{"grandTotal: " + dato.grandTotal}</h2>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default App