import OrderCard from "./OrderCard";
import OrderTag from "./OrderTag";
import { RiLoopRightLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { RiCaravanLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import SaleLineChart from "./SaleLineChart";
import BestSaleProduct from "./BestSaleProduct";

const Statistics = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-6">Dashboard Overview</h2>
      {/* order card */}
      <div className="flex gap-4 flex-wrap ">
        <OrderCard title="today orders" bg={"bg-[#0D9488]"} />
        <OrderCard title="yesterday orders" bg={"bg-[#81A3F2]"} />
        <OrderCard title="this month orders" bg={"bg-[#3B82F6]"} />
        <OrderCard title="last month orders" bg={"bg-[#0891B2]"} />
        <OrderCard title="All orders" bg={"bg-[#059669]"} />
      </div>
      {/* order card end */}
      {/* order tag */}
      <div className="flex gap-4 flex-wrap mt-4">
        <OrderTag
          icon={<FiShoppingCart color="white" size={18} />}
          iconBg={"bg-orange-400"}
          order={"105"}
          title="total order"
        />
        <OrderTag
          icon={<RiLoopRightLine color="#2563EB" size={18} />}
          iconBg={"bg-[#DBEAFE]"}
          order={"20"}
          title="order pending"
        />
        <OrderTag
          icon={<RiCaravanLine color="#1F9E92" size={18} />}
          iconBg={"bg-[#CCFBF1]"}
          order={"10"}
          title="order processing"
        />
        <OrderTag
          icon={<FaCheck color="#1F9E92" size={18} />}
          iconBg={"bg-[#CCFBF1]"}
          order={"85"}
          title="orders delivered"
        />
      </div>
      {/* order tag end */}
      {/* chart */}
      <div className="mt-8 flex gap-4">
        <SaleLineChart />
        <BestSaleProduct />
      </div>
      {/* chart end */}
    </div>
  );
};

export default Statistics;
