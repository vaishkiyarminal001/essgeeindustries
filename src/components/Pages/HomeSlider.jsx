import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import gautam from '../assets/gautam.jpg';
import ratan from '../assets/ratan.jpg'
import './HomeSlider.css';
import bgVideo from '../../video/bgVideo.mp4';

export const HomeSlider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ width: '100%', height: 'auto' }}>

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vitae hic quam, quod suscipit excepturi culpa labore repellat magni esse sed mollitia nisi beatae pariatur molestias quibusdam. Rerum, molestiae sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est deserunt repellat esse quo quisquam laudantium ad atque, molestiae qui doloremque alias, distinctio doloribus, odio dicta eaque consectetur pariatur nam?
            </p>
          </div>
        </div>
        </div>

      </Carousel.Item>


      <Carousel.Item style={{ width: '100%', height: 'auto' }}>

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vitae hic quam, quod suscipit excepturi culpa labore repellat magni esse sed mollitia nisi beatae pariatur molestias quibusdam. Rerum, molestiae sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est deserunt repellat esse quo quisquam laudantium ad atque, molestiae qui doloremque alias, distinctio doloribus, odio dicta eaque consectetur pariatur nam?
            </p>
          </div>
        </div>
        </div>

      </Carousel.Item>

      <Carousel.Item style={{ width: '100%', height: 'auto' }}>

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vitae hic quam, quod suscipit excepturi culpa labore repellat magni esse sed mollitia nisi beatae pariatur molestias quibusdam. Rerum, molestiae sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est deserunt repellat esse quo quisquam laudantium ad atque, molestiae qui doloremque alias, distinctio doloribus, odio dicta eaque consectetur pariatur nam?
            </p>
          </div>
        </div>
        </div>

      </Carousel.Item>
    </Carousel>
  );
};
