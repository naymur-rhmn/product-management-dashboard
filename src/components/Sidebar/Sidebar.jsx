import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiProductHuntLine } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const [sidebarOpen, setSitebarOpen] = useState(false);

  return (
    <div className="bg-white w-[300px] absolute lg:static z-50 top-0 left-0 h-screen flex  flex-col overflow-y-hidden shadow lg:translate-x-0 ">
      {/* logo */}
      <div className="h-[80px] flex items-center gap-1 ml-10">
        <svg
          className="h-7 w-7"
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="800px"
          height="800px"
          viewBox="0 0 902.86 902.86"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
              />
              <path
                d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
S619.162,694.432,619.162,716.897z"
              />
            </g>
          </g>
        </svg>
        <p className="text-2xl font-bold">
          Prod<span className="text">Path</span>
        </p>
      </div>
      {/* logo end */}

      {/* Menus */}
      <div className="flex flex-col justify-between h-full mx-8 mt-12">
        <nav className="">
          <ul className="flex flex-col gap-6">
            {/* single item */}
            <NavLink
              to="/"
              className="flex gap-3 items-center py-2 px-3 rounded hover:bg-gray-200 transition"
            >
              <RxDashboard className="mt-[0.4px]" size={20} />
              <span className="font-semibold text-xl">Dashboard</span>
            </NavLink>
            {/* single item */}
            <NavLink
              to="allProduct"
              className="flex gap-3 items-center py-2 px-3 rounded hover:bg-gray-200 transition"
            >
              <GrProductHunt size={20} />
              <span className="font-semibold text-xl">All Product</span>
            </NavLink>
            <NavLink
              to="myProduct"
              className="flex gap-3 items-center py-2 px-3 rounded hover:bg-gray-200 transition"
            >
              <RiProductHuntLine size={22} />
              <span className="font-semibold text-xl">My Product</span>
            </NavLink>
            {/* single item */}
            <NavLink
              to="addProduct"
              className="flex gap-3 items-center py-2 px-3 rounded hover:bg-gray-200 transition"
            >
              <IoAddCircle size={22} />
              <span className="font-semibold text-xl">Add Product</span>
            </NavLink>
            {/* single item */}
            <NavLink
              to="buyProduct"
              className="flex gap-3 items-center py-2 px-3 rounded hover:bg-gray-200 transition"
            >
              <BiSolidPurchaseTag className="mt-[0.4px]" size={22} />
              <span className="font-semibold text-xl">Buy Product</span>
            </NavLink>
          </ul>
        </nav>
        <div className="mb-5">
          <button className="flex gap-2 items-center font-bold text-xs hover:bg-gray-200 w-full py-2 rounded px-2">
            <IoIosLogOut className="mt-[0.9px]" size={15} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
