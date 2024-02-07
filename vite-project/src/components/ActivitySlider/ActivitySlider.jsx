// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Scrollbar } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// Import
import BidPlaced from '../items/BidPlaced';


const ActivitySlider = () => {
   return (
      <Swiper
         direction={'vertical'}
         scrollbar={{ draggable: true }}
         spaceBetween={8}
         slidesPerView={'auto'}
         modules={[Scrollbar]}
      >
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
         <SwiperSlide><BidPlaced /></SwiperSlide>
      </Swiper>
   );
}

export default ActivitySlider;