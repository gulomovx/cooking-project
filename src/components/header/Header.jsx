import React from "react";
import headerimg from "../../assets/header Image.svg";
import leave1 from "../../assets/leave1.png";
import leave2 from "../../assets/leave2.png";
import leave3 from "../../assets/leave3.png";
import Stats from "../stats/Stats";
import stat1 from '../../assets/stat1.svg'
import stat2 from '../../assets/stat2.svg'
import stat3 from '../../assets/stat3.svg'
const Header = () => {
  return (
    <div className="w-full">
      <div className="container mt-16">
        <div className="flex justify-between items-center">
          {/* text content */}
          <div className="">
            <h1 className="text-[76px] font-medium leading-[80px]">
              Just <span className="text-green-500">Eat healthy</span> food to
              live a healthier life
            </h1>
            <p className="leading-[34px] mt-4 text-xl">
              Enjoy a healthy life by eating healthy foods that have
              extraordinary flavors that make your life healthier for today and
              in the future
            </p>
            <button className="py-3 text-xl mt-8 px-8 rounded-3xl bg-green-600 text-white">
              Order now
            </button>
          </div>
          {/* img content */}
          <div className="relative mx-16">
            <img
              className="absolute top-2 left-[180px] z-0"
              src={leave1}
              alt=""
            />
            <img className="absolute left-[430px]" src={leave2} alt="" />
            <img
              className="  w-[1350px] h-[560px] z-40 object-cover "
              src={headerimg}
              alt=""
            />
            <img
              className="absolute bottom-7 z-0 left-[130px]"
              src={leave3}
              alt=""
            />
          </div>
        </div>
              {/* Why Choose US? */}
              <div className="w-full text-center mt-16">
        <h1 className="text-[54px] text-slate-700 font-medium">
          Why Choose US?
        </h1>
        <p className="text-xl">
          Organic food is grown without the use of synthetic chemicals
        </p>
        <div className="flex justify-between items-center gap-[100px] mt-12">
          <Stats
            img={stat1}
            title="Easy to order"
            text={"foods include fresh produce, meats as well as processed"}
          />
          <Stats
            img={stat2}
            title="Live Order"
            text={"Place your online Order easily and get the food instantly"}
          />
          <Stats
            img={stat3}
            title="100% Organic"
            text={"Organic food is grown without the use of synthetic chemicals"}
          />
                  </div>
                  <div className="flex w-[700px] mx-auto mt-12 justify-between items-center">
                      <div className="">
                          <h1 className="font-semibold text-[40px]">40+</h1>
                          <p className="text-xl tracking-wider text-slate-700">Food Partners</p>
                      </div>
                      <div className="">
                          <h1 className="font-semibold text-[40px]">459+</h1>
                          <p className="text-xl tracking-wider text-slate-700">Trusted Clients</p>
                      </div>
                      <div className="">
                          <h1 className="font-semibold text-[40px]">12k+</h1>
                          <p className="text-xl tracking-wider text-slate-700">Order Online</p>
                      </div>
                  </div>
      </div>
        
      </div>
    </div>
  );
};

export default Header;
