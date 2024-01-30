import React from "react";

export default function Support() {
  const images = [
    {
      image: <img src="assets/img/brand/Air_Jordan-Logo.wine.svg" alt="" />,
    },
    {
      image: <img src="assets/img/brand/Puma_(brand)-Logo.wine.svg"/>
    },
    {
      image: <img src="assets/img/brand/Hurley_International-Logo.wine.svg"/>
    },
    {
      image: <img src= "assets/img/brand/Nike,_Inc.-Logo.wine.svg"/>,
    },
  ];
  return (
    <>
      <div className="landing-page  max-w-full ">
        <div className="support-brand mt-5 w-full items-center flex gap-4  flex-col p-12  ">
          <div className="text">
            <p className=" sm:text-3xl md:text-5xl text-xl font-archivo text-black">
              Supported By
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="image flex justify-center gap-x-20 flex-wrap h-[500px] [&>*]: [&>*]: items-center w-full"
          >
            {images.map(({ image }) => {
              return <div className="w-40 md:w-52">{image}</div> 
              
            })}
          </div>
        </div>
      </div>
      <div />
    </>
  );
}
