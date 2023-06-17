import { useContext } from "react";
import FilterDataContext from "../../feature/filter_data/context/filter_data_context";

const Card = () => {
    const { datosFiltrados } = useContext(FilterDataContext);
    return (
        <>
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
        </>
    );
}

export default Card;
