import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./Loader.css";

function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    // GSAP animation
    gsap.to(loader, {
     
      
      duration: 1,
      delay:4,
      stagger:1,
      y:-700,
     
     
      
    });

    // Cleanup function
    return () => {
      // Ensure animation is cleared when component unmounts
      gsap.killTweensOf(loader);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='load' ref={loaderRef}>
      <span className="loading"></span>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
