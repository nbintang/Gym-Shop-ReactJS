import React from "react";
import ShopSwiper from "../components/ShopSwiper";

export default function Shop() {
  return (
    <>
      <div className=" flex flex-col justify-between">
        <h1 className=" text-center text-4xl font-archivo">OUR PRODUCT</h1>
        <div className=" flex flex-col justify-between h-screen">
          <ShopSwiper />
          <ShopSwiper />
        </div>
      </div>
    </>
  );
}
