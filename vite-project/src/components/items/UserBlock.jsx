import userImg from './../../img/users/user-1.png';


const UserBlock = () => {
   return (
      <div className="user-block">
         <div className="user-block__avatar">
            <img src={userImg} alt="User photo" />
         </div>
         <div className="user-block__box">
            <span className="user-block__name">User Name</span>
            <span className="user-block__nick">@username</span>
         </div>
      </div>
   );
}
 
export default UserBlock;