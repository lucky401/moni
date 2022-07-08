import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
function ChartSampahOlahan(): JSX.Element {
  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default ChartSampahOlahan;
