import React from "react";

export default function Skeleton() {
  return (
    <>
      <div className="men1 w-52 border bg-white animate-pulse h-64 hover:bg-gray-100 hover:opacity-80 rounded active:bg-gray-200 shadow cursor-pointer">
        <div className="image flex justify-center p-2">
          <div className="border">
            <img
              alt=""
              className={`h-36 w-36 object-cover bg-gray-200 rounded`}
            />
          </div>
        </div>
        <div className="details flex flex-col space-y-3  px-4">
          <div className="rating flex justify-between ">

          <div className="bg-gray-200 h-6 w-9 rounded-md"></div>
          <div className="bg-gray-200 h-6 rounded-md w-9"></div>
          </div>
          
          <div className="bg-gray-200 h-5 rounded-md"></div>
          <div className="bg-gray-200 h-5 rounded-md w-10"></div>
        </div>
      </div>
    </>
  );
}
