// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';



// Import
import Creators from './Creators';

// Users
import userImg_1 from '../../img/users/user-1.png';
import userImg_2 from '../../img/users/user-2.png';
import userImg_3 from '../../img/users/user-3.png';
import userImg_4 from '../../img/users/user-4.png';
import userImg_5 from '../../img/users/user-5.png';
import userImg_6 from '../../img/users/user-6.png';
import userImg_7 from '../../img/users/user-7.png';
import userImg_8 from '../../img/users/user-8.png';


const name = 'User Name';
const user = '@username';
const text = '24 sales on 32ETH'



const CreatorsSlider = () => {
   return (
      <div className="creators-slider">
         <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={'auto'}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide>
               <Creators img={userImg_1} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_2} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_3} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_4} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_5} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_6} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_7} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_8} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default CreatorsSlider;