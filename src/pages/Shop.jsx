import React from "react";
import ShopCard from "../components/ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function Shop() {
  return (
    <>
      <div className="w-full flex h-[600px] gap-5 flex-col items-center justify-center">
        <div>
          <h1 className="font-archivo text-xl ">OUR BEST PRODUCT FOR MEN </h1>
        </div>
        <div className="max-w-full  flex">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
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
    </>
  );
}
