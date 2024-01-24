import React from "react";
import ShopSwiper from "../components/ShopSwiper";

export default function Shop() {
  return (
    <>
      <div id="product" className=" flex flex-col pb-5 justify-between ">
        <div className="h-28">
          <h1 className=" text-center text-2xl sm:text-4xl font-archivo">OUR PRODUCT</h1>
        </div>
        <div className=" flex flex-col h-screen ">
          <ShopSwiper />
          <div>
            <div className="sm:h-52 h-24 flex justify-center  items-center">
              <h1 className="text-center font-archivo text-xl sm:text-2xl">
                SCROLL FOR MORE {">>>"}
              </h1>
            </div>
          </div>
          <ShopSwiper />
        </div>
      </div>
    </>
  );
}
