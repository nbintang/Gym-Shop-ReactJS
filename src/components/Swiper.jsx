// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      simulateTouch={false}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="assets/img/imgwallpaper/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="assets/img/imgwallpaper/1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="assets/img/imgwallpaper/3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src="assets/img/imgwallpaper/4.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
