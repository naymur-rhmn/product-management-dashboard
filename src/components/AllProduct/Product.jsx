import React from "react";

const Product = ({ product }) => {
  const { description, price, image, category, name } = product;
  return (
    <tbody className=" ">
      <tr className="hover:bg-gray-100">
        <td></td>
        <td className="text-lg">{name}</td>
        <td className="h-[40px] w-[50px]">
          <img className="h-[40px] w-[50px]" src={image} alt="" />
        </td>
        <td className="text-lg">{category}</td>
        <td className="text-lg">{price}</td>
        <td className="text-lg">500</td>
        <td className="text-lg flex justify-center items-center">
          <div className="flex items-center gap-1">
            <button className="bg-green-400 text-sm font-medium p-2 rounded hover:bg-opacity-70 transition">
              Add Cart
            </button>
            <button className="bg-blue-400 text-sm font-medium p-2 rounded hover:bg-opacity-70 transition">
              Purchase
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Product;
