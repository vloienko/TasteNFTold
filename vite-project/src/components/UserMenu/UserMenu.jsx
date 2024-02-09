// Style
import './user-menu.scss';


// Import


// Image
import userImg from './../../img/users/user-1.jpg';



const UserMenu = () => {
   return (
      <div className="user-menu">
         <div className="user-menu__main">
            <div className="user-menu__avatar">
               <img src={userImg} alt="User photo" />
            </div>
            <div className="user-menu__box">
               <span className="user-menu__name">User Name</span>
               <div className="user-menu__info">
                  <span className="user-menu__nick">@username</span>
                  <div className="user-menu__balance">
                     <span className="user-menu__text-balance">Balance:</span>
                     <div className="user-menu__quantity">1,5M</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="user-menu__burger">
            <div className="user-menu__score">
               <span className="user-menu__text-address">Address:</span>
               <div className="user-menu__bill">0c0xcx1cx606g4516x51g1...</div>
            </div>
            <ul className="user-menu__list">
               <li className="user-menu__item">
                  <button className="user-menu__button" type="button">My profile</button>
               </li>
               <li className="user-menu__item">
                  <button className="user-menu__button" type="button">Balance settings</button>
               </li>
               <li className="user-menu__item">
                  <button className="user-menu__button log-out" type="button">Log out</button>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default UserMenu;