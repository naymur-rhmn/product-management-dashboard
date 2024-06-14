import { Pie, PieChart } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
];

const BestSaleProduct = () => {
  return (
    <div className="bg-blue-900 bg-opacity-20 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Best Selling Products</h2>
      <div>
        <PieChart width={650} height={350}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="#8884d8"
          />
        </PieChart>
      </div>
    </div>
  );
};

export default BestSaleProduct;
