import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function TastyNew() {
  return (
    <>
    
    <Swiper
       modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
       mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={true}
      
        keyboard={true}
        loop={true}
         autoplay={{
   "delay": 3000,
  "disableOnInteraction": false
 }}


        className="mySwiper"
      >
      <div className='tasty-box'>
    <div   className='person-box'> 
        <SwiperSlide>
        <div data-aos="fade-up"
            data-aos-duration="1000" className='person'>
        <div className='person-img rakesh'>
          <img src='brk.jpeg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt'>
         <h2>Testimonals</h2>
          <p>We had a fantastic experience working with Rudra throughout the whole UI process. He communicates clearly and with expedience.</p>
          <h4>RAKESH KARMAKAR
          <br/><span> Full-stack dev</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='person'>
        <div className='person-img mukesh'>
          <img src='mukesh.jpg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt'>
         <h2>Testimonals</h2>
          <p>Rudra is a skilled front-end developer.His designs showcase expertise in delivering visually appealing user experiences with a flawless touch.</p>
          <h4>MUKESH SINHA
          <br/>
          <span> Front-end dev</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='person'>
        <div className='person-img somo'>
          <img src='somo.jpeg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt somo-txt'>
         <h2>Testimonals</h2>
          <p>Rudra's communication skills and efficiency played a pivotal role in our positive experience throughout the UI process.</p>
          <h4>SOMOSREE ROYCHOWDHURY
          <br/><span> Video editor</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='person'>
        <div className='person-img'>
          <img src='ad.jpg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt'>
         <h2>Testimonals</h2>
          <p>Rudra's dedication to front-end development is undeniable. His designs are seamless, delivering visually stunning user experiences.</p>
          <h4>ADRITA DAS
          <br/>
          <span> Photographer</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='person'>
        <div className='person-img debo'>
          <img src='dc.jpeg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt'>
         <h2>Testimonals</h2>
          <p> Rudra's work consistently resulted in visually stunning and user-friendly interfaces, contributing to enhanced user experiences. </p>
          <h4>DEBAPRIYA CHANDRA
          <br/>
          <span>Back-end dev</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='person'>
        <div className='person-img shm'>
          <img src='shm.jpeg' alt='_blank'/>
        </div>
        <span className='svg-box'>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 32 32" space="preserve">
<g>
	<g id="right_x5F_quote">
		<g>
			<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
		</g>
	</g>
</g>
</svg>
          </span>
         <div className='person-txt '>
         <h2>Testimonals</h2>
          <p> Rudra's UI/UX and frontend mastery is commendable. Their creation of appealing, user-friendly interfaces is remarkable, a valuable asset for any project. </p>
        <h4>SOHAM CHOWDHURY
          <br/>
          <span>Full-stack dev</span></h4>
         
         </div>

        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </div>
        </div> 
      </Swiper>
     
    
 
    </>
    
  );
}
export default TastyNew;
