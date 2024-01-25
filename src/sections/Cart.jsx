import React from "react";
import img1 from "../assets/test.svg";
const Cart = ({ img, title, job, text }) => {
  return (
    <div className="px-16 py-8 bg-white rounded-xl shadow-md w-[600px] mt-8">
      <div className="flex flex-col ">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            {/* img and name */}
            <img src={img} alt="" />
            <div className="flex flex-col ">
              <h1 className="">{title}</h1>
              <span className="">{job}</span>
            </div>
          </div>
          <img src={img1} alt="" />
        </div>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};

export default Cart;
