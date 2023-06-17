import { useContext } from "react";
import BarChartComponent from "../../components/pure/grafico";
import { DEPARTAMENTO } from "../../data/utils/departamento.enum";
import { EVENTO } from "../../data/utils/evento.enum";
import FilterDataContext from "../filter_data/context/filter_data_context";

const GraphOption = () => {
    const { setTypeDepto, setTypeEvent, typeDepto, typeEvent } = useContext(FilterDataContext);

    const handleTypeEventChange = (event) => {
        const value = event.target.value;
        let selected = isNaN(value) ? String(value) : Number(value);
        setTypeEvent(selected);
    };

    const handleTypeDeptoChange = (depto) => {
        const value = depto.target.value;
        let selected = value === '' ? value : isNaN(value) ? String(value) : Number(value);
        setTypeDepto(selected);
    };
    return (
        <div>
            <div className="bar-chart-container">
                <BarChartComponent />
            </div>
            <>
                <div className="dropdown-container">
                    <label className="label-select" htmlFor="typeEvent">
                        Selecciona un evento:
                    </label>
                    <select
                        className="select"
                        id="typeEvent"
                        value={typeEvent}
                        onChange={handleTypeEventChange}
                    >
                        <option value={EVENTO.DENGUE}>Dengue</option>
                        <option value={EVENTO.HEPATITIS_A}>Hepatitis A</option>
                        <option value={EVENTO.ACCIDENTE_OFIDICO}>Accidente Ofídico</option>
                        <option value={EVENTO.TODO}>Todas las opciones</option>
                    </select>
                    <label className="label-select" htmlFor="typeEvent">
                        Selecciona un departamento:
                    </label>
                    <select
                        className="select"
                        id="typeDepto"
                        value={typeDepto}
                        onChange={handleTypeDeptoChange}
                    >
                        <option value={DEPARTAMENTO.BOGOTA}>Bogota</option>
                        <option value={DEPARTAMENTO.ANTIOQUIA}>Antioquia</option>
                        <option value={DEPARTAMENTO.ATLANTICO}>Antlantico</option>
                        <option value={DEPARTAMENTO.DESCONOCIDO}>Desconocido</option>
                        <option value={DEPARTAMENTO.TODO}>Todas las opciones</option>
                    </select>
                </div>
            </>
        </div>
    );
};

export default GraphOption;
