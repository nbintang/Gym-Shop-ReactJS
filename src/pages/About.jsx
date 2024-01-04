import React from "react";

export default function About() {
  return (
    <>
      <div className="flex ">
        <div class="purpose flex w-full justify-center flex-wrap gap-5 ">
          <div class="wrapper ">
            <p class="font-archivo w-[320px] text-4xl sm:text-7xl text-left sm:text-right">
              WHAT ARE WE BUILDING FOR?
            </p>
          </div>
          <div class="desc w-[320px] sm:w-[400px]">
            <p class="font-nova sm:text-xl text-lg leading-8 font-thin text-right sm:text-left">
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
