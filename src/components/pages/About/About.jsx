import React from "react";
import "./About.css";
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
          <div className="img">
            <img src="img/build.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
