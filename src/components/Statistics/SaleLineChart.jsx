import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Day 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Day 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Day 3",
    uv: 2000,
    pv: 2200,
    amt: 2290,
  },
  {
    name: "Day 4",
    uv: 2780,
    pv: 2508,
    amt: 2000,
  },
  {
    name: "Day 5",
    uv: 1890,
    pv: 2700,
    amt: 2181,
  },
  {
    name: "Day 6",
    uv: 2390,
    pv: 2945,
    amt: 2500,
  },
  {
    name: "Day 7",
    uv: 3490,
    pv: 2410,
    amt: 2100,
  },
];
// const data = [
//   { name: "2024-06-06", pv: 200 },
//   { name: "2024-06-07", pv: 400 },
//   { name: "2024-06-08", pv: 350 },
//   { name: "2024-06-09", pv: 380 },
//   { name: "2024-06-10", pv: 450 },
//   { name: "2024-06-11", pv: 412 },
//   { name: "2024-06-12", pv: 410 },
// ];

const SaleLineChart = () => {
  return (
    <div className="bg-blue-900 bg-opacity-10 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
      <div>
        <LineChart
          width={650}
          height={300}
          data={data}
          margin={{ top: 15, right: 0, left: -18, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="green" />
          {/* <Line type="monotone" dataKey="uv" stroke="#000000" /> */}
        </LineChart>
      </div>
    </div>
  );
};

export default SaleLineChart;
