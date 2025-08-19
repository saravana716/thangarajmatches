import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import './Mypro.css';

import img1 from '../../Assets/mockup 2.jpg';
import img2 from '../../Assets/mockup 1.jpg';
import img3 from '../../Assets/mockup 3.jpg';
import img4 from '../../Assets/g20.jpg';
import img5 from '../../Assets/g15.jpg';
import img6 from '../../Assets/g16.jpg';
import img7 from '../../Assets/g17.jpg';
import img8 from '../../Assets/g18.jpg';
import img9 from '../../Assets/g19.jpg';
import img10 from '../../Assets/DSC04043.JPG';
import img11 from '../../Assets/DSC04051.JPG';
import img12 from '../../Assets/DSC04070.JPG';
import img13 from '../../Assets/DSC04072.JPG';
import img14 from '../../Assets/DSC04095.JPG';
import img15 from '../../Assets/DSC04098.JPG';
import img16 from '../../Assets/DSC04100.JPG';

const allImages = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16,
];

const brandsImages = allImages.slice(0, 3);
const packing10Images = allImages.slice(3, 6);
const packing100Images = allImages.slice(6, 9);

const renderSwiper = (title, images) => (
  <div className='mypro1'>
    <h1>{title}</h1>
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`Slide ${idx + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Mypro = () => {
  return (
    <div className='mypro'>
      {renderSwiper("Brands", brandsImages)}
      {renderSwiper("Packing 10's", packing10Images)}
      {renderSwiper("Packing 100's", packing100Images)}
    </div>
  );
};

export default Mypro;
