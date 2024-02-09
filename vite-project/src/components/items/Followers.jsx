// Style
import './followers.scss';


const Followers = () => {
   return (
      <div className="followers">
         <div className="followers__box">
            <div className="followers__quantity">234</div>
            <span className="followers__text">Followers</span>
         </div>
         <div className="followers__box">
            <div className="followers__quantity">15</div>
            <span className="followers__text">Following</span>
         </div>
      </div>
   );
}
 
export default Followers;