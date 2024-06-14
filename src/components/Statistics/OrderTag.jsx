const OrderTag = ({ title, order, icon, iconBg }) => {
  return (
    <div className="border rounded-md flex gap-4 flex-1 p-4 bg-white items-center">
      <div
        className={`${iconBg} p-4 rounded-full flex justify-center items-center`}
      >
        {icon}
      </div>
      <div>
        <p className="capitalize text-gray-600 font-semibold">{title}</p>
        <p className="text-2xl font-semibold text-gray-800 ">{order}</p>
      </div>
    </div>
  );
};

export default OrderTag;
