import UserImg from './../../img/users/user-tc.jpg';
import Share from './../../img/icon/share-1.svg';


// Styles
import './bid-placed.scss';


const BidPlaced = () => {
   return (
      <div className="bid-placed">
         <div className="bid-placed__left">
            <div className="bid-placed__image">
               <img src={UserImg} alt="User image" />
            </div>
            <div className="bid-placed__text">
               <span className="bid-placed__number">Bid placed by 0x6FC0...14A4</span>
               <span className="bid-placed__date">May 19, 2021 at 2:27pm</span>
            </div>
         </div>
         <div className="bid-placed__right">
            <div className="bid-placed__price">
               1,5M <span>(1308.54$)</span>
            </div>
            <a className="bid-placed__link" href="#">
               <img src={Share} alt="Icon link" />
            </a>
         </div>
      </div>
   );
}
 
export default BidPlaced;