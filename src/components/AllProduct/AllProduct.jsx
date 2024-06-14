import React, { useEffect, useState } from "react";
import Product from "./Product";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-xl mb-6">Products</h2>
      {/* find product */}
      <div className="bg-white px-4 py-5 rounded-md">
        <form className="flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="Find Products"
            className="input input-bordered w-full max-w-xs focus:outline-none bg-[#F3F4F6]"
          />
          <button type="submit" className="btn ">
            Search
          </button>
        </form>
      </div>

      {/* product table */}
      <div className="overflow-x-auto border rounded-md mt-4 bg-white mb-5">
        <table className="table table-md">
          <thead className="bg-[#d0d5d5] h-10 ">
            <tr className="text-sm uppercase">
              <th></th>
              <th>PRODUCT NAME</th>
              <th className="min-w-60">image</th>
              <th>category</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
          <tfoot className="bg-[#d0d5d5] h-10">
            <tr className="text-sm uppercase">
              <th></th>
              <th>PRODUCT NAME</th>
              <th>image</th>
              <th>category</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>ACTIONS</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
