import React from "react";

export default function Support() {
  return (
    <>
      <div className="landing-page space-y-8 max-w-full">
        <div className="support-brand mt-5 w-full items-center flex gap-4  flex-col p-12  ">
          <div className="text">
            <p className=" sm:text-3xl text-xl font-archivo text-black">Supported By</p>
          </div>
          <div className="flex justify-center">
            <div className="image flex flex-wrap max-w-[900px] justify-center gap-x-28">
              <div className="sm:w-96 w-40">
                <img src="assets/img/brand/Air_Jordan-Logo.wine.svg" alt="" />
              </div>
              <div className="sm:w-96 w-40">
                <img src="assets/img/brand/Puma_(brand)-Logo.wine.svg" alt="" />
              </div>
              <div className="sm:w-96 w-40">
                <img
                  src="assets/img/brand/Hurley_International-Logo.wine.svg"
                  alt=""
                />
              </div>
              <div className="sm:w-96 w-40">
                <img src="assets/img/brand/Nike,_Inc.-Logo.wine.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
}
