import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import FilterDataContext from '../../feature/filter_data/context/filter_data_context';

// eslint-disable-next-line react/prop-types
const BarChartComponent = () => {
  const { datosFiltrados } = useContext(FilterDataContext);
  return (
    <BarChart width={500} height={300} data={datosFiltrados}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nomEve" label={{ value: 'Evento', position: 'insideBottom' }} />
      <YAxis domain={[0, 'auto']} label={{ value: 'Casos', angle: -90, position: 'insideLeft' }} labelOffset={20} />
      <Tooltip />
      <Legend />
      <Bar dataKey="grandTotal" fill="#8884d8" name='casos' />
    </BarChart>
  );
};

export default BarChartComponent;