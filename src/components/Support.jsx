import React from "react";

export default function Support() {
  const images = [
    {
      image: <img src="assets/img/brand/Air_Jordan-Logo.wine.svg" alt="" />,
      duration : "200"
    },
    {
      image: <img src="assets/img/brand/Puma_(brand)-Logo.wine.svg" alt="" />,
      duration : "300"
    },
    {
      image: <img src="assets/img/brand/Hurley_International-Logo.wine.svg" alt="" />,
      duration : "500"
    },
    {
      image: <img src="assets/img/brand/Nike,_Inc.-Logo.wine.svg" alt="" />,
      duration : "700"
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
            className="image flex justify-center gap-x-20 flex-wrap h-[500px] [&>*]: [&>*]: items-center w-full"
         
          >
            {images.map(({ image, duration }) => {
              return <div className="w-40 md:w-52"
              data-aos="fade-zoom-in"
         
              data-aos-delay={duration}
>{image}</div>;
            })}
          </div>
        </div>
      </div>
      <div />
    </>
  );
}
