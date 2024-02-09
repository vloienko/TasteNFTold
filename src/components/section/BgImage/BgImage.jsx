import mainBG from './../../../img/main-bg.jpg';


// Styles
import './bg-image.scss';


const BgImage = () => {
   return (
      <div className="bg-image margin-top">
         <div className="bg-image__container">
            <div className="bg-image__body">
               <div className="bg-image__image">
                  <img src={mainBG} alt="Image background" />
               </div>
               <div className="bg-image__block">
                  <div className="bg-image__box">
                     <span className="bg-image__descr">Current Bid:</span>
                     <div className="bg-image__holder">
                        <div className="bg-image__content image">
                           1,5M<span>(1308.54$)</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-image__box">
                     <span className="bg-image__descr">Auction ending in:</span>
                     <div className="bg-image__holder">
                        <div className="bg-image__content">
                           1h 28m 32s
                        </div>
                     </div>
                  </div>
                  <div className="bg-image__box">
                     <a className="bg-image__link" href="#">Place a bid</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
   );
}
 
export default BgImage;