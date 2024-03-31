import React from 'react'
import "./Hero.css"

const Herocard = () => {
  return (
    <div>
         <div className="home">
     
     <span className="top_shadow"></span>
     <div className="main">
       <div className="main_left">
         Coders & Developers
         <br />
         <span className="club_text" >Club</span>
       </div>
       <div className="main_right">
        <img src="img/laptop2.png" alt="" />
         {/* <div className="circle_outer">
            <span className="rotation">
              <img src="img/icon_rotation1.svg" className="goal" alt="img" />
            </span>
            <span className="rotation">
              <img src="img/icon_rotation2.svg" alt="img" className="plane" />
            </span>
           <span className="rotation">
             <img src="img/icon_rotation3.svg" className="rocket" alt="img" />
           </span>
         </div>
         <div className="icon_shadow">
           <img src="img/box1.svg" alt="img" />
         </div>
         <div className="icon_shadow1">
           <img src="img/box1.svg" alt="img" />
         </div>
         <div className="circle_inner border-gradient"></div>
         <img src="img/main_boy.svg" alt="img" /> */}
       </div>
       <div className="circle_shadow">
         <span className="left_shadow shadow_common"></span>
         <span className="right_shadow shadow_common"></span>
       </div>
     </div>

    
   </div>
    </div>
  )
}

export default Herocard