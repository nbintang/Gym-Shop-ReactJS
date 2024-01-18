import React from "react";
import ShopCard from "../components/ShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";


export default function ShopSwiper() {
  return (
    <>
      <div className="text-center flex justify-evenly h-[] flex-col">
        <div className=" w-full flex justify-center">
          <div className="flex items-center w-[90%] overflow-visible overflow-x-auto bg-gray-50  border rounded h-72  ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              freeMode={true}
              mousewheel= {
                {
                  releaseOnEdges: true
                }
              }
              scrollbar={{ 
                draggable: true,
                dragSize: 24,
                hide: false
               }}
              breakpoints={{
                1536: {
                  slidesPerView: 5,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
            className="sm:[&>*]:block [&>*]:left-16 ">
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
