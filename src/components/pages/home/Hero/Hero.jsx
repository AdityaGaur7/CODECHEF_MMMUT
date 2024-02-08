import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Back from './Back';
import Mission from '../Mission/Mission';
import Layer from '../Layer/Layer';
import "./Hero.css";

function Hero() {
  const h1Ref = useRef(null);

  useEffect(() => {
    // Ensure ScrollTrigger is used with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with ScrollTrigger
    gsap.to(".hero h1", {
      transform: "translateX(-100%)",
      fontWeight:'100',
      duration: 2,
      scrollTrigger: {
        trigger: ".hero",
        scroller:'body',
        markers:true,
        start: "top 0", // Animation starts when the top of the element hits the center of the viewport
        end: "top -200", // Animation ends when the bottom of the element hits the center of the viewport
        scrub: 5, // Smoothly animates the element during scrolling
        pin:true
      },
    });
  }, []);

  return (
    <>
      <div className="hero">
        <Back/>
        <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
         <h1> CODERS AND
          DEVELOPERS CLUBS</h1>
        </div>
      </div>
      <hr />
      <Mission/>
      <Layer/>
    </>
  );
}

export default Hero;
