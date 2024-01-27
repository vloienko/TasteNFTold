/* eslint-disable react/no-unescaped-entities */
import UserBlock from '../../items/UserBlock';
import Share from '../../items/Share';
import SwiperSlider from './SwiperSlider';


import soldImg from './../../../img/icon/sold-1.svg';



const ArtName = () => {
   return (
      <section className="art-name margin-top">
         <div className="art-name__container">
            <div className="art-name__body">
               <div className="art-name__info">
                  <UserBlock></UserBlock>
                  <div className="art-name__block">
                     <h1 className="art-name__title">WFH - art name</h1>
                     <p className="art-name__text">
                        <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                     </p>
                     <div className="art-name__box">
                        <div className="art-name__sold">
                           <span className="art-name__sold-text">Sold for:</span>
                           <div className="art-name__sold-wrap">
                              <img src={soldImg} alt="Icon" />
                              <span>1,5M</span>
                           </div>
                        </div>
                        <div className="art-name__holder">
                           <button className="art-name__button" type="button">View</button>
                           <Share></Share>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="art-name__slider">
                  <SwiperSlider></SwiperSlider>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ArtName;



{/* <div className="art-name__slider swiper">
<div className="art-name__wrapper swiper-wrapper">
   <div className="art-name__slide swiper-slide">
      <img src={slideImg_1} alt="Image art" />
   </div>
   <div className="art-name__slide swiper-slide">
      <img src={slideImg_2} alt="Image art" />
   </div>
   <div className="art-name__slide swiper-slide">
      <img src={slideImg_3} alt="Image art" />
   </div>
   <div className="art-name__slide swiper-slide">
      <img src={slideImg_4} alt="Image art" />
   </div>
   <div className="art-name__slide swiper-slide">
      <img src={slideImg_1} alt="Image art" />
   </div>
</div>
<div className="swiper-pagination"></div>
</div> */}