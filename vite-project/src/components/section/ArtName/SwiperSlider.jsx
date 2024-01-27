// // import Swiper core and required modules
// import { Pagination, EffectCards, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/scss';
// import 'swiper/scss/pagination';
// import 'swiper/scss/effect-cards';

// import slideImg from './../../../img/slider/slide-last.jpg';
// // import slideImg_1 from './../../../img/slider/slide-1.png';
// // import slideImg_2 from './../../../img/slider/slide-2.png';
// // import slideImg_3 from './../../../img/slider/slide-3.png';
// // import slideImg_4 from './../../../img/slider/slide-4.png';


// const SwiperSlider = () => {
//    return (
//       <Swiper
//          modules={[Pagination, EffectCards, A11y]}
//          slidesPerView={1}
//          pagination={{ clickable: true }}
//          onSwiper={(swiper) => console.log(swiper)}
//          onSlideChange={() => console.log('slide change')}
//          effect={'cards'}
//          grabCursor={true}
//       >
//          <SwiperSlide>
//             <div className="art-name__image">
//                <img src={slideImg} alt="Image art" />
//             </div>
//          </SwiperSlide>
//          <SwiperSlide>
//             <div className="art-name__image">
//                <img src={slideImg} alt="Image art" />
//             </div>
//          </SwiperSlide>
//          <SwiperSlide>
//             <div className="art-name__image">
//                <img src={slideImg} alt="Image art" />
//             </div>
//          </SwiperSlide>
//          <SwiperSlide>
//             <div className="art-name__image">
//                <img src={slideImg} alt="Image art" />
//             </div>
//          </SwiperSlide>
//          <SwiperSlide>
//             <div className="art-name__image">
//                <img src={slideImg} alt="Image art" />
//             </div>
//          </SwiperSlide>
//       </Swiper>
//    );
// }

// export default SwiperSlider;



// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';

import slideImg from './../../../img/slider/slide-last.jpg';
// import slideImg_1 from './../../../img/slider/slide-1.png';
// import slideImg_2 from './../../../img/slider/slide-2.png';
// import slideImg_3 from './../../../img/slider/slide-3.png';
// import slideImg_4 from './../../../img/slider/slide-4.png';


const SwiperSlider = () => {
   return (
      <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={false}
         slidesPerView={'auto'}
         coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
         }}
         pagination={true}
         modules={[EffectCoverflow, Pagination, A11y]}
      >
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg} alt="Image art" />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="art-name__image">
               <img src={slideImg} alt="Image art" />
            </div>
         </SwiperSlide>
      </Swiper>
   );
}

export default SwiperSlider;