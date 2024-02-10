import React from "react";
import Heroes from "./Heroes";
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from "./HeroData";
const HeroSection = () => {
  return (
    <div className="main">
      <div className="container _shapeAnimation">
        <Heroes {...homeObjOne} />
        <Heroes {...homeObjTwo} />
        <Heroes {...homeObjThree} />
        <Heroes {...homeObjFour} />
      </div>
      <div />
    </div>
  );
};

export default HeroSection;
