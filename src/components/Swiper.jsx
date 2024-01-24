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
      onTouchStart={function () {
        return false;
      }}
      scrollbar={{
        hide: false,
        draggable: true,
        snapOnRelease: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative block"
      noSwipingClass="swiper-no-swiping"
    >
      <SwiperSlide>
        <div
          className="bg-cover w-full h-screen bg-center"
          style={{ backgroundImage: "url('assets/gif/gym.gif')" }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-cover w-full h-screen bg-center"
          style={{ backgroundImage: "url('assets/gif/run.gif')" }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-cover w-full h-screen bg-center"
          style={{ backgroundImage: "url('assets/gif/swim.gif')" }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg-cover w-full h-screen bg-center"
          style={{ backgroundImage: "url('assets/gif/basket.gif')" }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};
