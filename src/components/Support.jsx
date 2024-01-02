import React from "react";

export default function Support() {
  return (
    <>
      <div className="landing-page space-y-8 h-screen max-w-full">
        <div className="support-brand mt-5 w-full flex gap-4 flex-col p-12  ">
          <div className="text">
            <p className=" text-3xl font-archivo text-black">Supported By</p>
          </div>
          <div className="image flex flex-wrap w-full justify-between">
            <div className="w-96">
              <img src="assets/img/brand/Air_Jordan-Logo.wine.svg" alt="" />
            </div>
            <div className="w-96">
              <img src="assets/img/brand/Puma_(brand)-Logo.wine.svg" alt="" />
            </div>
            <div className="w-96">
              <img
                src="assets/img/brand/Hurley_International-Logo.wine.svg"
                alt=""
              />
            </div>
            <div  className="w-96">
              <img src="assets/img/brand/Nike,_Inc.-Logo.wine.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div/>
    </>
  );
}
