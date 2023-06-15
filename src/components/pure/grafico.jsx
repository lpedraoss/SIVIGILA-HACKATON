import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// eslint-disable-next-line react/prop-types
const BarChartComponent = ({ data }) => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nomEve" />
      <YAxis domain={[0, 'auto']} />
      <Tooltip />
      <Legend />
      <Bar dataKey="grandTotal" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;