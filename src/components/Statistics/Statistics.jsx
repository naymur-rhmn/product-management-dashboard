import OrderCard from "./OrderCard";

const Statistics = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-6">Dashboard Overview</h2>
      <div className="flex gap-4 flex-wrap ">
        <OrderCard title="today orders" bg={"bg-[#0D9488]"} />
        <OrderCard title="yesterday orders" bg={"bg-[#81A3F2]"} />
        <OrderCard title="this month orders" bg={"bg-[#3B82F6]"} />
        <OrderCard title="last month orders" bg={"bg-[#0891B2]"} />
        <OrderCard title="All orders" bg={"bg-[#059669]"} />
      </div>
    </div>
  );
};

export default Statistics;
