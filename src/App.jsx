import { useEffect, useState } from 'react';
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
      //let depto = dato.codDptoO === typeDepto;
      let filtro = event;

      return filtro;
    }
    );
    setDatosFiltrados(filtrarDatos);
  }, [rutina, typeEvent, typeDepto]);

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
        <div style={{ width: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
            Análisis de datos de casos totales y eventos por departamento
          </h1>

          <p style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'justify', marginBottom: '20px' }}>
            El análisis de los datos presentados muestra información sobre los casos totales y eventos relacionados con enfermedades en diferentes departamentos. Los datos se organizan en una tabla que incluye el nombre del departamento, el número de casos totales registrados y el tipo de evento asociado a esos casos.
            {/* ... */}
          </p>
        </div>
        <div style={{ width: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'justify', marginBottom: '20px' }}>
            El análisis de los datos presentados muestra información sobre los casos totales y eventos relacionados con enfermedades en diferentes departamentos. Los datos se organizan en una tabla que incluye el nombre del departamento, el número de casos totales registrados y el tipo de evento asociado a esos casos.
            <br />
            <br />
            Este análisis permite visualizar y comparar la incidencia de diferentes eventos en distintos departamentos. Al seleccionar un evento específico y un departamento en los dropdowns proporcionados, la tabla se filtra para mostrar únicamente los datos correspondientes a la combinación seleccionada.
            <br />
            <br />
            Estos datos son valiosos para comprender la propagación de enfermedades en diferentes regiones y evaluar la efectividad de las medidas de prevención y control implementadas. Además, al observar las variaciones en los casos totales entre los departamentos, es posible identificar áreas de mayor riesgo y dirigir recursos y esfuerzos adicionales para abordar esas situaciones.
            <br />
            <br />
            El análisis de estos datos contribuye a la toma de decisiones informadas en la gestión de la salud pública, permitiendo una mejor comprensión de los patrones y tendencias de enfermedades específicas en diferentes áreas geográficas.
          </p>
        </div>

        <div className="bar-chart-container">
          <BarChartComponent data={datosFiltrados} />
        </div>

        <>
          <div className="dropdown-container">
            <label className="label-select" htmlFor="typeEvent">Selecciona un evento:</label>
            <select className="select" id="typeEvent" value={typeEvent} onChange={handleTypeEventChange}>
              <option value={EVENTO.DENGUE}>Dengue</option>
              <option value={EVENTO.HEPATITIS_A}>Hepatitis A</option>
            </select>
            <label className="label-select" htmlFor="typeEvent">Selecciona un departamento:</label>
            <select className="select" id="typeDepto" value={typeDepto} onChange={handleTypeDeptoChange}>
              <option value={DEPARTAMENTO.BOGOTA}>Bogota</option>
              <option value={DEPARTAMENTO.ANTIOQUIA}>Antioquia</option>
              <option value={DEPARTAMENTO.ATLANTICO}>Antlantico</option>
              <option value={DEPARTAMENTO.DESCONOCIDO}>Desconocido</option>
            </select>
          </div>
        </>
        <article id="contenedor_producto">
          <ul id="productos">
            {datosFiltrados.map((dato) => (
              <li key={dato.id}>
                <h2>{"nombre de evento: " + dato.nomEve}</h2>
                <h2>{"casos totales: " + dato.grandTotal}</h2>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default App;
