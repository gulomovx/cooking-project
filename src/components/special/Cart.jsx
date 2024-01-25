import React from "react";

const Cart = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center border rounded-3xl py-12 px-8 shadow-lg hover:scale-105 duration-300">
      <img src={img} alt="" />
      <h1 className="text-[30px] font-medium">{title}</h1>
      <p className="text-xl">
        A salad combined witha delicious cut of bacon and mixed with tasty and
        fresh sesome oil.
      </p>
    </div>
  );
};

export default Cart;
