import { HiSquare3Stack3D } from "react-icons/hi2";

const OrderCard = ({ bg, title }) => {
  return (
    <div
      className={`py-6 rounded-md flex flex-1 flex-col gap-3 items-center text-white ${bg}`}
    >
      <HiSquare3Stack3D size={30} />
      <h4 className="capitalize text-xl font-semibold">{title}</h4>
      <p className="text-lg font-semibold">$0.00</p>
    </div>
  );
};

export default OrderCard;
