import React from "react";
import Swiper from "../components/Swiper";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Swiper />
        <div className="absolute top-48 md:top-80 lg:top-96 text-[#EDF7FA] sm:top-60  z-50 w-full text-center">
          <h1 className="md:text-8xl text-4xl sm:text-7xl font-archivo">BE THE STRONGEST</h1>
          <button className="text-3xl underline hover:text-black font-archivo transition-all duration-100 mt-5">JOIN NOW</button>
        </div>
      </div>
    </>
  );
}
