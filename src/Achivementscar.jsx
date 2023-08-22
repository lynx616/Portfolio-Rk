import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Zoom, Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
  "delay": 3000,
  "disableOnInteraction": false
}}
        className="mySwiper"
      >
     
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className='btm-car'>
            <div className='btm-car-img'>
                <img src='hackforbengal.jpg' alt='_blank'/>
            </div>
            <div className='btm-car-txt'>
                <p> Hack4bengal 2023 </p>
            </div>

        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className='btm-car'>
            <div className='btm-car-img'>
                <img src='jwoc.jpg' alt='_blank'/>
            </div>
            <div className='btm-car-txt'>
                <p> jwoc 2022 </p>
            </div>

        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className='btm-car'>
            <div className='btm-car-img'>
                <img src='P-cor.png' alt='_blank'/>
            </div>
            <div className='btm-car-txt'>
                <p> Photomathon 2021 </p>
            </div>

        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className='btm-car'>
            <div className='btm-car-img'>
                <img src='video.jpg' alt='_blank'/>
            </div>
            <div className='btm-car-txt'>
                <p> EDiquest 2021 </p>
            </div>

        </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
