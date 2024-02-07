import shareImg_1 from './../../img/icon/share-1.svg';
import shareImg_2 from './../../img/icon/share-2.svg';
import shareImg_3 from './../../img/icon/share-3.svg';


// Styles
import './share.scss';


const Share = () => {
   return (
      <div className="share">
         <button className="share__button" type="button">
            <img src={shareImg_1} alt="Share icon" />
         </button>
         <button className="share__button" type="button">
            <img src={shareImg_2} alt="Share icon" />
         </button>
         <button className="share__button" type="button">
            <img src={shareImg_3} alt="Share icon" />
         </button>
      </div>
   );
}
 
export default Share;