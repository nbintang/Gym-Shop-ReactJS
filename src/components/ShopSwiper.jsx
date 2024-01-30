import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect } from "react";
import ShopCard from "./ShopCard";import Skeleton from "./Skeleton";

export default function ShopSwiper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1700);
    }, [])

    const skeleton = () =>{
      return loading ? <Skeleton/> : <ShopCard/>;
    }
    
  return (
    <>
      <div className="text-center flex justify-evenly flex-col">
        <div className=" w-full flex justify-center">
          <div className="flex items-center w-[90%] shadow-lg bg-gray-950 overflow-visible overflow-x-auto  border border-black rounded h-80  ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              freeMode={true}
              mousewheel={{
                releaseOnEdges: true,
              }}
              scrollbar={{
                draggable: true,
                dragSize: 24,
                hide: false,
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
              className=" [&>*]:left-16"
            >
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>
              <SwiperSlide>
                {skeleton}
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
