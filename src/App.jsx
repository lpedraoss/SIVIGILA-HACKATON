import { useEffect, useState } from 'react';
import './App.css';
import UseDiccionario from './data/diccionarios/rutina';
import Header from './components/pure/header';
import BarChartComponent from './components/pure/grafico';

function App() {
  const { rutina } = UseDiccionario();
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);

  useEffect(() => {
    const filtrarDatos = rutina.filter((dato) => dato.codDptoO === 0);
    setDatosFiltrados(filtrarDatos);
  }, [rutina]);

  return (
    <>
      <Header />
      <main>
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
        <button onClick={() => setMostrarGrafico(!mostrarGrafico)}>
          Mostrar/ocultar gráfico
        </button>
        {mostrarGrafico && <BarChartComponent data={datosFiltrados} />}
      </main>
    </>
  );
}

export default App;