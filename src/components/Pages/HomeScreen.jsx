import React, { useEffect, useRef } from 'react';
import video1 from "../../video/adhare1.mp4";
import { HomeSlider } from './HomeSlider';

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
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            
            <video style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} ref={videoRef} autoPlay muted loop>
              <source src={video1} type="video/mp4" />
            </video>
            </div>
      
            <div style={{width: '100%', paddingTop: '1%' }}>
            <HomeSlider/>
            </div>


          </div>
      
      
      
        );
}