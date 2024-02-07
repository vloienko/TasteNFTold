// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';

import slideImg_1 from './../../../img/slider/slide-1.jpg';
import slideImg_2 from './../../../img/slider/slide-2.jpg';
import slideImg_3 from './../../../img/slider/slide-3.jpg';
import slideImg_4 from './../../../img/slider/slide-4.jpg';


const SwiperSlider = () => {
   return (
      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={false}
         slidesPerView={"auto"}
         coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 100,
            modifier: 3.5,
            slideShadows: false,
         }}
         pagination={true}
         modules={[EffectCoverflow, Pagination]}
      >
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg_1} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg_2} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg_3} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg_4} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg_1} alt="Image art" />
            </div>
         </SwiperSlide>
      </Swiper>
   );
}

export default SwiperSlider;