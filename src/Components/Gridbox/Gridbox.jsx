import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Gridbox.css";

import logo from "../../Assets/DSC04004.JPG";
import logo1 from "../../Assets/uu1.jpg";
import logo2 from "../../Assets/g11.jpg";
import logo3 from "../../Assets/g12.jpg";
import logo4 from "../../Assets/DSC04027.JPG";
import logo5 from "../../Assets/g14.jpg";

const images = [logo, logo1, logo2, logo3, logo4, logo5,];

const Gridbox = () => {
  return (
    <div className="gridbox1">
      <Swiper
        slidesPerView={2}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Grid, Pagination, Autoplay]}
        breakpoints={{
          // When window width is <= 768px
          0: {
            slidesPerView: 2,
            grid: { rows: 2 },
            spaceBetween: 20,
          },
          // Default for desktop
          769: {
            slidesPerView: 3,
            grid: { rows: 2 },
            spaceBetween: 30,
            height:200
          },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gridbox;
