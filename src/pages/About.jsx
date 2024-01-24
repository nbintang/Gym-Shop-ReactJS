import React from "react";

export default function About() {
  return (
    <>
      <div className="flex h-[600px] "
      id="about">
        <div className="purpose flex w-full justify-center flex-wrap gap-x-4 ">
          <div className="wrapper  ">
            <p className="font-archivo sm:w-[400px] w-[300px] text-3xl md:text-7xl sm:text-5xl text-center sm:text-right">
              WHAT ARE WE BUILDING FOR?
            </p>
          </div>
          <div className="desc w-[320px] sm:w-[400px]">
            <p className="font-nova sm:text-xl md:text-lg text-lg leading-6 font-thin text-center sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae amet quisquam facere. Excepturi fugiat, soluta tempore
              vitae quasi libero veritatis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error ducimus ex doloribus eius
              numquam, tempora placeat voluptatibus temporibus soluta nesciunt
              in, dolor voluptates porro velit voluptatem, amet eos cumque vel
              autem dicta magnam architecto atque ea. Ab, earum corporis vitae,
              vel impedit minima atque cum saepe mollitia voluptatum deserunt
              rerum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
