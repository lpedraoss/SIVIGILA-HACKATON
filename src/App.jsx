import  { useEffect, useState } from 'react';
import './App.css';
import UseDiccionario from './data/diccionarios/rutina';
import Header from './components/pure/header';
import BarChartComponent from './components/pure/grafico';
import { EVENTO } from './data/utils/evento.enum';
import { DEPARTAMENTO } from './data/utils/departamento.enum';

const App = () => {
  const { rutina } = UseDiccionario();
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const [typeEvent, setTypeEvent] = useState(EVENTO.DENGUE); // Estado para almacenar el typeEvent seleccionado
  const [typeDepto, setTypeDepto] = useState(DEPARTAMENTO.BOGOTA)
  useEffect(() => {
    const filtrarDatos = rutina.filter((dato) => {
      let event = dato.codEve === typeEvent;
      let filtro = event;

      return filtro;
    }
    

    );
    setDatosFiltrados(filtrarDatos);
  }, [rutina, typeEvent]);

  const handleTypeEventChange = (event) => {
    setTypeEvent(Number(event.target.value));
  };
  const handleTypeDeptoChange = (depto) => {
    setTypeDepto(Number(depto.target.value));
  }
  return (
    <>
      <Header />
      <main>
      <BarChartComponent data={datosFiltrados} />
        <article id="contenedor_producto">
          <ul id="productos">
            {datosFiltrados.map((dato) => (
              <li key={dato.id}>
                <h2>{"nombre de evento: " + dato.nomEve}</h2>
                <h2>{"casos totales: " + dato.grandTotal}</h2>
              </li>
            ))}
          </ul>
          <> 
             
          <div  >
             <label  htmlFor="typeEvent">Selecciona un evento:</label>
             <select id="typeEvent" value={typeEvent} onChange={handleTypeEventChange}>
               <option value={EVENTO.DENGUE}>Dengue</option>
               <option value={EVENTO.HEPATITIS_A}>Hepatitis A</option>
             </select>
             <label htmlFor="typeEvent">Selecciona un departamento:</label>
             <select id="typeDepto" value={typeDepto} onChange={handleTypeDeptoChange}>
               <option value={DEPARTAMENTO.BOGOTA}>Bogota</option>
               <option value={DEPARTAMENTO.ANTIOQUIA}>Antioquia</option>
               <option value={DEPARTAMENTO.ATLANTICO}>Antlantico</option>
             </select>
           </div> 
         </>
        </article>

         

      </main>
    </>
  );
};

export default App;
