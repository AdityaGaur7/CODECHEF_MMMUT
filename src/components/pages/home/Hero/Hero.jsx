import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Mission from '../Mission/Mission';
import Layer from '../Layer/Layer';
import "./Hero.css";

function Hero() {
  useEffect(() => {
    // Ensure ScrollTrigger is used with GSAP
   
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with ScrollTrigger
    gsap.to(".hero h1", {
      transform: "translateX(-100%)",
      fontWeight: '100',
      scrollTrigger: {
        trigger: ".hero",
        scroller: 'body',
        start: "top 0",
        end: "top -300vh",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

   
  }, []);
  
  return (
    <div>
      <div className="hero">
        <h1> CODERS AND DEVELOPERS CLUBS</h1>
      </div>
      <hr />
      <Mission />
      <Layer />
    </div>
  );
}

export default Hero;
