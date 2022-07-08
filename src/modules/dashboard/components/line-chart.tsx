import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1 Jun 2022',
    total: 4000,
  },
  {
    name: '2 Jun 2022',
    total: 3000,
  },
  {
    name: '3 Jun 2022',
    total: 2000,
  },
  {
    name: '4 Jun 2022',
    total: 2780,
  },
  {
    name: '5 Jun 2022',
    total: 1890,
  },
  {
    name: '6 Jun 2022',
    total: 2390,
  },
  {
    name: '7 Jun 2022',
    total: 3490,
  },
];

function ChartTotalSampah(): JSX.Element {
  return (
    <ResponsiveContainer height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartTotalSampah;
