import React from "react";
import { DiAndroid } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import "./Timeline.css";
// import FaQ from "../FaQ/FaQ";
import TitleCenter from "../TitleCenter/TitleCenter";
import { TitleCenter4 } from "../TitleCenter/Title";
// import Form from "../Form/Form";
const Timeline = () => {
  return (
    <div>
      
          <div style={{margin:'auto', textAlign:'center'}}>
          <TitleCenter {...TitleCenter4}/>
          </div>
      <div className=" timeline">
          
        <div className="roadmap_main left-roadmap">
          <DiAndroid className="img" />
          <div className="text-box">
            <h2>TItle.</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </div>
        <div className="roadmap_main right-roadmap">
          <DiCodeigniter className="img" />
          <div className="text-box">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </div>
        <div className="roadmap_main left-roadmap">
          <DiCodeigniter className="img" />
          <div className="text-box">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </div>
        <div className="roadmap_main right-roadmap">
          <DiCodeigniter className="img" />
          <div className="text-box">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </div>
      </div>
   
      {/* <Form/> */}
   
    </div>
  );
};

export default Timeline;
