import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import gautam from '../assets/gautam.jpg';
import ratan from '../assets/ratan.jpg'
import './HomeSlider.css';
import bgVideo from '../../video/bgVideo.mp4';

export const HomeSlider = () => {
  return (
    <Carousel interval={5000} pause={false} style={{ width: '100%', height: 'auto' }}>
      <Carousel.Item>
        <div className='mainContainer'>
          {/* Video Background */}
          <video autoPlay loop muted className='video-background'>
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className='coroslImgtxt'>
            {/* Image */}
            <div className="image-container">
              <img
                src={gautam}
                alt="gautam"
                className="myimage"
              />
            </div>

            {/* Text */}
            <div className="text-container">
              <p>
                <h3>Gautam Singh</h3>
                Freedom without the strength to support it and, if need be, defend it, 
                would be a cruel delusion. And the strength to defend freedom can itself
                only come from widespread industrialisation and the infusion of modern 
                science and technology into the country's economic life.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mainContainer'>
          {/* Video Background */}
          <video autoPlay loop muted className='video-background'>
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className='coroslImgtxt'>
            {/* Image */}
            <div className="image-container">
              <img
                src={gautam}
                alt="gautam"
                className="myimage"
              />
            </div>

            {/* Text */}
            <div className="text-container">
              <p>
                <h3>Gautam Singh</h3>
                With honest and straightforward business principles, close and careful 
                attention to details, and the ability to take advantage of favourable 
                opportunities and circumstances, there is a scope for success.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mainContainer'>
          {/* Video Background */}
          <video autoPlay loop muted className='video-background'>
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className='coroslImgtxt'>
            {/* Image */}
            <div className="image-container">
              <img
                src={ratan}
                alt="ratan"
                className="myimage"
              />
            </div>

            {/* Text */}
            <div className="text-container">
              <p>
                <h3>Ratan Tata</h3>
                Progress for me has never been a dream. It has always been a distant reality and 
                once one milestone is achieved, there is always another one waiting to be crossed. 
                It is with this belief that I started Ess Gee Industries. As one of the leading 
                company in the field of wide range of adhesive and non adhesive tapes, we have 
                achieved continuous growth and reached a result of globalisation in a very short time.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );

};
