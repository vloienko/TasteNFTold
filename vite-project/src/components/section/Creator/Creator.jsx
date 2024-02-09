/* eslint-disable react/no-unescaped-entities */

// Style
import './creator.scss';

// Image
import twitch from '../../../img/icon/social/social-1.svg';
import instagram from '../../../img/icon/social/social-2.svg';
import twitter from '../../../img/icon/social/social-3.svg';
import onlyfans from '../../../img/icon/social/social-4.svg';

// Import
import UserBlock from '../../items/UserBlock';
import Followers from '../../items/Followers';
import Button from '../../trifle/button/Button';
import Share from '../../items/Share';


const Creator = () => {
   return (
      <div className="creator margin-top">
         <div className="creator__container">
            <div className="creator__body">
               <div className="creator__main">
                  <UserBlock />
                  <div className="creator__functional">
                     <Followers />
                     <Button />
                     <Share />
                  </div>
               </div>
               <div className="creator__info">
                  <ul className="creator__social">
                     <li className="creator__item">
                        <a className="creator__link" href="#">
                           <img src={twitch} alt="Social icon" />
                           <span>Twitch</span>
                        </a>
                     </li>
                     <li className="creator__item">
                        <a className="creator__link" href="#">
                           <img src={instagram} alt="Social icon" />
                           <span>Instagram</span>
                        </a>
                     </li>
                     <li className="creator__item">
                        <a className="creator__link" href="#">
                           <img src={twitter} alt="Social icon" />
                           <span>Twitter</span>
                        </a>
                     </li>
                     <li className="creator__item">
                        <a className="creator__link" href="#">
                           <img src={onlyfans} alt="Social icon" />
                           <span>Onlyfans</span>
                        </a>
                     </li>
                  </ul>
                  <p className="creator__text">
                     <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Creator;