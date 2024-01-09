import React from "react";
import ShopSwiper from "../components/ShopSwiper";

export default function Shop() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-between">
        <h1 className=" text-center text-4xl font-archivo mb-16">OUR PRODUCT</h1>
        <div className=" flex flex-col justify-between h-[850px]">
          <ShopSwiper />
          <ShopSwiper />
        </div>
      </div>
    </>
  );
}
