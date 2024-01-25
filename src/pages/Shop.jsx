import React from "react";
import ShopSwiper from "../components/ShopSwiper";

export default function Shop() {
  return (
    <>
      <div id="product" className=" flex flex-col pb-5 justify-between ">
        <div className="">
          <h1 className=" text-center text-2xl sm:text-4xl font-archivo">
            OUR PRODUCT
          </h1>
        </div>
        <div className=" flex flex-col h-screen ">
          <ShopSwiper />
          <div>
            <div className="sm:h-52 h-24 flex justify-center  items-center">
              <h1 className="text-center font-archivo text-md sm:text-xl  space-x-2 flex flex-col sm:flex-row justify-center">
                <span>SLIDE FOR MORE</span>
                <span>OR</span>
                <span className=" underline hover:text-gray-700 active:text-gray-600  rounded-lg px-2">
                  <a href="">SEE MORE PRODUCT</a>
                </span>
              </h1>
            </div>
          </div>
          <ShopSwiper/>
        </div>
      </div>
    </>
  );
}
