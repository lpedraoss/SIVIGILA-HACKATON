import { useEffect, useState } from "react";
import UseRutina from "../../../data/rutina/rutina";
import { DEPARTAMENTO } from "../../../data/utils/departamento.enum";
import { EVENTO } from "../../../data/utils/evento.enum";

const UseFilterData = () => {
    const { rutina } = UseRutina();
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const [typeEvent, setTypeEvent] = useState(EVENTO.DENGUE); // Estado para almacenar el typeEvent seleccionado
    const [typeDepto, setTypeDepto] = useState(DEPARTAMENTO.BOGOTA);

    useEffect(() => {
        const filtrarDatos = rutina.filter((dato) => {

            let event = typeEvent === EVENTO.TODO ? true : dato.codEve === typeEvent;
            let depto = typeDepto === DEPARTAMENTO.TODO ? true : dato.codDptoO === typeDepto;
            let filtro = event && depto;
            return filtro;
        });
        setDatosFiltrados(filtrarDatos);
    }, [rutina, typeEvent, typeDepto]);

    return { datosFiltrados, setTypeDepto, setTypeEvent, typeDepto, typeEvent }
}

export default UseFilterData;
