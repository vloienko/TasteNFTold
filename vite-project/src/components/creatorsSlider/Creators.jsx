/* eslint-disable react/prop-types */

// Styles
import './creators.scss';


const Creators = (props) => {
   return (
      <div className="creators">
         <div className="creators__image">
            <img src={props.img} alt="Creators image" />
         </div>
         <div className="creators__info">
            <span className="creators__name">{props.name}</span>
            <span className="creators__user">{props.user}</span>
            <p className="creators__text">{props.text}</p>
         </div>
      </div>
   );
}
 
export default Creators;