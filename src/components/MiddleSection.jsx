import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./middlesectionStyle.css";

const image1 = "/img/Mask Group (1).png";
const image2 = "/img/Image-living room.png";
const image3 = "/img//Mask Group (4).png";

import { EffectCoverflow, Pagination } from "swiper/modules";

const MiddleSection = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" text-center">
            <img
              src={image1}
              alt="image slide 1"
              className="mb-4 w-full"
              width={100}
              height={300}
            />
            <span className=" font-medium text-2xl">Dining</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-center">
            <img
              src={image2}
              alt="image slide 2"
              className="mb-4 w-full"
              width={100}
              height={300}
            />
            <span className=" font-medium text-2xl">Living</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-center">
            <img
              src={image3}
               alt="image slide 3"
              className="mb-4 w-full"
              width={100}
              height={300}
            />
            <span className=" font-medium text-2xl">Bedroom</span>{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MiddleSection;
