import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './MySwipers.css';

// import back2 from '../../Assets/b234.jpg';
import back3 from '../../Assets/banner3.jpg';
import back4 from '../../Assets/banner2.jpg';
import back1 from '../../Assets/banner1.jpg';
import { Link } from 'react-router-dom';

const MySwipers = () => {
  return (
    <div className="myswiper12">
      <Swiper
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}a
        className="mySwiper"
      >
        <SwiperSlide><div className="slide"><img src={back1} alt="" /></div></SwiperSlide>
        {/* <SwiperSlide><div className="slide"><img src={back2} alt="" /></div></SwiperSlide> */}
        <SwiperSlide><div className="slide"><img src={back3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={back4} alt="" /></div></SwiperSlide>

      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-navigation">
        <div className="custom-prev"><FaArrowLeft /></div>
        <div className="custom-next"><FaArrowRight /></div>
      </div>

      <div className="btn">
       
        <Link to="/contact">
        <button>
        QUICK ENQUIRY</button></Link>
      </div>
    </div>
  );
};

export default MySwipers;
