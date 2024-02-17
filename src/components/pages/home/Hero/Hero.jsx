import React, { useEffect, useRef } from 'react';

import Layer from '../Layer/Layer';
import Herocard from '../../../assets/Herocard/Herocard';
import "./Hero.css";
import HeroSection from '../../../assets/HeroSection/HeroSection';
function Hero() {
  // useEffect(() => {
  //   // Ensure ScrollTrigger is used with GSAP
   
  //   gsap.registerPlugin(ScrollTrigger);

  //   // GSAP animation with ScrollTrigger
  //   gsap.to(".hero h1", {
  //     transform: "translateX(-100%)",
  //     fontWeight: '100',
  //     scrollTrigger: {
  //       trigger: ".hero",
  //       scroller: 'body',
  //       start: "top 0",
  //       end: "top -200",
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });

   
  // }, []);
  
  return (
    <div>
     
      <Herocard/>
     <HeroSection/>
     
      <Layer />
    </div>
  );
}

export default Hero;
