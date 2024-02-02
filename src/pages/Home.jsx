import React from "react";
import Swiper from "../components/Swiper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="home" className="w-full">
        <Swiper />
        <div className="absolute md:top-80 lg:top-96 text-[#EDF7FA] top-60 z-30  space-y-3 w-full text-center">
          <h1 className="text-5xl sm:text-8xl gap-3 justify-center font-archivo flex flex-wrap">
            <span>BE</span> <span>THE</span>
            <span className="text-black underline decoration-black decoration-5">
              STRONGEST
            </span>
          </h1>
          <article className="text-lg sm:text-xl font-fira-sans p-1">
            <p>
              Sign up and Get 50% off to get our new product and best product.
            </p>
          </article>
          <div className=" flex justify-center gap-3 [&>button]:shadow transition-all">
            <div className="text-xl   font-archivo mt-2">
              <Link to="/login">
                <button className="bg-white text-black font-extralight px-4 py-2 rounded-full duration-150 hover:bg-gray-300 active:bg-gray-400 ">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
            <div className="text-lg   font-archivo mt-2">
              <Link to="/login">
                <button className="bg-black text-white font-extralight px-4 py-2 rounded-full  duration-150 hover:bg-gray-950  active:text-gray-200 active:bg-gray-950">
                  JOIN NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
