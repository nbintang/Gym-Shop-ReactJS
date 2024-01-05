import React from "react";
import ShopSwiper from "../components/ShopSwiper";

export default function Shop() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-between mt-4">
        <h1 className=" text-center text-4xl font-archivo">OUR PRODUCT</h1>
        <div className=" flex flex-col justify-between h-[850px]">
          <ShopSwiper />
          <ShopSwiper />
        </div>
      </div>
    </>
  );
}
