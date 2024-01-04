import React from "react";
import ShopCard from "../components/ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function Shop() {
  return (
    <>
    <div className="text-center h-screen flex justify-evenly flex-col">
      <h1 className="font-archivo text-2xl">OUR PRODUCT</h1>
      <div className=" w-full flex justify-center">
        <div className="flex justify-center w-[50%]">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={4}
          >
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>

            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>

            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </div>          
    </>
  );
}
