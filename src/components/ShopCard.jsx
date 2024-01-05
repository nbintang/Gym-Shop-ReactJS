import React from "react";

export default function ShopCard() {
  return (
    <>
      <div className="men1 w-52 border hover:bg-gray-100 hover:opacity-80 rounded active:bg-gray-200 shadow pb-5 cursor-pointer">
        <div className="image ">
          <img src="assets/img/clothes/3men.jpg" alt="" />
        </div>
        <div className="details flex flex-col space-y-3  p-2">
          <div className="rating flex justify-between">
            <div className="flex gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#99999"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <p className="text-xl font-bold font-fira-sans"> 4.5</p>
            </div>
            <p className="text-lg hover:underline font-archivo">Nike</p>
          </div>
          <div className="desc leading-7 font-fira-sans flex text-wrap">
            <p>Weight Lifting Shirt</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}
