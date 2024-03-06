import React from "react";
import "./About.css";
import Cards from "./Cards";
import FaQ from "../../assets/FaQ/FaQ";
function About() {
  return (
    <div>
      <div className="cont">
        <div className="left">
          <div>
            <div className="title">
              <h2>Communicate.</h2>
              <h2>Collaborate. Create.</h2>
            </div>
            <div className="txt">
              Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, repudiandae! sit amet consectetur 
              illo.
            </div>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="right">
          <div className="imgy">
            <img src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Fbuild1.png?alt=media&token=a9dad0ce-a781-4433-85fa-df89a65f2c1d" alt="" />
          </div>
        </div>
      </div>
      <Cards/>
      <FaQ/>
    </div>
  );
}

export default About;
