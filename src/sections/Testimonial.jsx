import React from "react";
import Cart from "./Cart";
import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
const Testimonial = () => {
  return (
    <div>
      <div className="mt-16 p-16 bg-slate-100">
        <h1 className="text-[40px] text-center font-semibold">
          Happy Clients Says
        </h1>
        <div className="flex justify-center items-center gap-8 ">
          <Cart
            img={test1}
            title="Happy Clients Says"
            job={"CEO of UI.Desk"}
            text="Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we."
          />
          <Cart
            img={test2}
            title="ZEESHAN ANWER"
            job={"CEO of UI Box"}
            text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                      "
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
