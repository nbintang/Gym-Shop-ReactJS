// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const images = [
    {
      image: {
        title: "assets/gif/home.jpg",
      },
    },
    {
      image: {
        title: "assets/gif/run.gif",
      },
    },
    {
      image: {
        title: "assets/gif/swim.gif",
      },
    },
    {
      image: {
        title: "assets/gif/basket.gif",
      },
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
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
      className="relative block"
      noSwipingClass="swiper-no-swiping"
    >
      {images.map(({ image, title, index }) => {
        return (
          <>
            <SwiperSlide key={index}>
              {loading ? (
                <SkeletonImg />
              ) : (
                <img
                  src={image.title}
                  alt=""
                  className="w-full  h-screen object-cover"
                />
              )}
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

function SkeletonImg() {
  return (
    <>
      <div className="bg-gray-400 animate-pulse w-full h-screen"></div>
    </>
  );
}

