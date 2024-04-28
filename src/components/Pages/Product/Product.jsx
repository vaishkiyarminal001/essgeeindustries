import React, { useEffect, useRef } from 'react';
import "./Product.css";
import Sidebar from './Sidebar';
import proVd from "../../../video/productvideo.mp4"


export const Product = () => {

  const videoRef = useRef(null);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 3000); // Change video every 3 seconds
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='productMain'>
      {/* Side bar */}
      <Sidebar/>

      {/* product Container */}
      <div className='productContainer'>
        <h3>
            Ess Gee Industries
        </h3>
        <p style={{textAlign:'justify'}}>
            Established in 2005, Ess Gee Industries stands as a pioneering entity, 
            dedicated to crafting, distributing, and delivering an impeccable array 
            of Adhesive and Non-Adhesive Tapes, Air Cleaners and Filters, 
            PU Foam Tapes, Masking Die Cut Tapes, Non Woven Felt Tapes, and Rubber Tapes. 
            Our commitment to excellence drives every facet of our operations, 
            ensuring unparalleled quality and customer satisfaction.
        </p>
        
       
        <div className="video-container">
        <video ref={videoRef} autoPlay muted loop>
          <source src={proVd} type="video/mp4" />
        </video>
      </div>

      
      </div>
    </div>
  )
}
