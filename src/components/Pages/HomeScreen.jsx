import React, { useEffect, useRef } from 'react';
import video1 from "../../video/adhare1.mp4";
import { HomeSlider } from './HomeSlider';
import { Client } from './Client';
import "./HomeScreen.css";


export const HomeScreen = () => {

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
          <div>
           <div className="video-container">
        <video ref={videoRef} autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div style={{ width: '100%', paddingTop: '1%' }}>

            <HomeSlider/>
            <Client/>
            </div>


          </div>
      
      
      
        );
}
