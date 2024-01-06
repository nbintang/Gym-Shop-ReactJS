import React from "react";
import ShopCard from "../components/ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function ShopSwiper() {
  return (
    <>
      <div className="text-center flex justify-evenly h-screen flex-col">
        <div className=" w-full flex justify-center">
          <div className="flex justify-center w-[80%] bg-gray-50 p-5 border rounded">
            <Swiper
              modules={[Navigation, Pagination]}
              breakpoints={{
                1536: {
                  slidesPerView: 6,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

                640: {
                  slidesPerView: 2,
                },
              }}
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
