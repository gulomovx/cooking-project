import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-zinc-800 text-[26px] font-medium font">
            UI.desk
          </h1>
          <ul className="flex justify-between gap-16 py-8 text-gray-700 text-xl font-normal">
            {/* <Link >Home</Link> */}
                      <li>
                          <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>
          <div className="flex justify-between gap-4 items-center text-slate-700">
            <IoSearchOutline size={25} />
            <FiShoppingCart size={25} />
            <button className="py-3 text-xl px-8 rounded-3xl bg-slate-600 text-white">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
