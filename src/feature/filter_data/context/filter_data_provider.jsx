/* eslint-disable react/prop-types */

import UseFilterData from "../hook/use_filter_data";
import FilterDataContext from "./filter_data_context";

const FilterDataProvider = ({ children }) => {
    const { datosFiltrados, setTypeDepto, setTypeEvent, typeDepto, typeEvent } = UseFilterData();
    return (
        <FilterDataContext.Provider value={{ datosFiltrados, setTypeDepto, setTypeEvent, typeDepto, typeEvent }}>
            {children}
        </FilterDataContext.Provider>
    );
}

export default FilterDataProvider;
