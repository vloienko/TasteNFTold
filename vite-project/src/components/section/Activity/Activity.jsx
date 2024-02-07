/* eslint-disable react/no-unescaped-entities */
import UserBlock from '../../items/UserBlock';
import Share from '../../items/Share';
import ActivitySlider from '../../ActivitySlider/ActivitySlider';


// Styles
import './activity.scss';


const Activity = () => {
   return (
      <section className="activity">
         <div className="activity__container">
            <div className="activity__body">
               <div className="activity__info">
                  <UserBlock />
                  <h1 className="activity__title">WFH - art name</h1>
                  <div className="activity__copy">
                     <span>Сopy:</span> 2 of 10
                  </div>
                  <p className="activity__text">
                     <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
                  </p>
                  <Share />
               </div>
               <div className="activity__content">
                  <span className='activity__naming'>Activity</span>

                  <ActivitySlider />
               </div>
            </div>
         </div>
      </section>
   );
}
 
export default Activity;