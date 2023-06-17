import FilterDataProvider from "../../feature/filter_data/context/filter_data_provider";
import GraphOption from "../../feature/graph_option/graph_option";
import Card from "../pure/card";
import Info from "../pure/info";



const Principal = () => {
    return (
        <>
            <FilterDataProvider>
                <Info />
                <GraphOption />
                <Card />
            </FilterDataProvider>

        </>
    );
}

export default Principal;
