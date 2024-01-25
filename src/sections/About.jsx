import React from "react";
import Stats from "../components/stats/Stats";
import stat1 from "../assets/stat1.svg";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import Special from "../components/special/Special";
function About() {
  return (
    <div id="about" className="w-full mt-36">
      <div className="container ">
        <div className="flex items-center justify-between gap-8">
          {/* text content */}
          <div className="w-[50%]">
            <h1 className="text-[50px] font-medium">About Us</h1>
            <p className="my-4 text-xl">
              Organic food is grown without the use of synthetic chemicals, such
              as human-made pesticides and fertilizers, and does not contain
              genetically modified organisms (GMOs). Organic foods include fresh
              produce, meats, and dairy products as well as processed foods such
              as crackers, drinks, and frozen meals.
            </p>
            <button className="py-3 text-xl px-8 rounded-3xl bg-green-600 text-white">
              Learn More
            </button>
          </div>
          {/* img content */}
          <div className="flex items-center gap-4 ">
            {/* first */}
            <div className="flex flex-col gap-4">
              {/* two images */}
              <img src={about1} alt="" />
              <img src={about2} alt="" />
            </div>
            <div className="relative top-6">
              <img src={about3} alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-between gap-52 mt-36">
          <img src={about4} alt="" />
          <div className="">
            <h1 className="text-[45px] font-semibold">
              Fresh Vegetables Every Day
            </h1>
            <p className="text-xl my-4">
              Healthy life as informed declared we enjoy the margaret. Joy
              horrible moreover man feelings own shy. Request norland neither
              mistake for yet. Between the for morning assured country believe.
            </p>
            <button className="py-3 text-xl px-8 rounded-3xl bg-green-600 text-white">
              Learn More
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-between gap-52 mt-44">
          <div className="">
            <h1 className="text-[54px]">Cooked by the Best Chefs</h1>
            <p className="">
              Believing neglected so so allowance existence departure in. In
              design active temper be uneasy. Thirty for remove plenty regard
              you summer though. He preference connection astonished on of ye.
                      </p>

                      <div className="flex items-center gap-6 mt-8">
                          <input className="bg-green-400" type="checkbox" name="" id="" />
                          <p className="">A guaranteed delicious meal</p>
                      </div>
                      <div className="flex items-center gap-6 mt-8">
                          <input className="bg-green-400" type="checkbox" name="" id="" />
                          <p className="">A guaranteed delicious meal</p>
                      </div>
                      <div className="flex items-center gap-6 mt-8">
                          <input className="bg-green-400" type="checkbox" name="" id="" />
                          <p className="">A guaranteed delicious meal</p>
                      </div>
          </div>
          <img src={about5} alt="" />
              </div>
              {/*  */}
              <Special/>
      </div>
    </div>
  );
}

export default About;
