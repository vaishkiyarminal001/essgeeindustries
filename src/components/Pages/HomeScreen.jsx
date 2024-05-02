import React, { useEffect, useRef } from 'react';
import video1 from "../../video/adhare1.mp4";
import { HomeSlider } from './HomeSlider';
import { Client } from './Client';
import "./HomeScreen.css";
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {

  const navigate = useNavigate();

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

      <div style={{ width: '100%' }}>

        {/* product */}

        <h2 style={{paddingTop:'1%'}}>Our Product</h2>
        <div className='productImageCont'>
          <div>
          <img src="https://m.media-amazon.com/images/I/613sIdHOSmL.jpg" alt="tape" />
          </div>

          <div>
          <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/02/14113934/Different-types-of-Air-filters-in-automobiles-B-11-02-1024x640.jpg" alt="cleaner" />
          </div>

          <div>
          <img src="https://m.media-amazon.com/images/I/91tapI7groL.jpg" alt="masking" />
          </div>

          <div>
          <img src="https://www.foamparts.com/wp-content/uploads/2018/08/reticulated1.jpg" alt="foam" />
          </div>
        </div>

        <div className='btnCont'>
        <button className="Btntext" onClick={() => navigate("/product")}>Explore More <span></span></button>
        </div>

        {/* NEWS UPDATE */}

        <div className='newsSection'>
          <h1>NEWS UPDATE</h1>
          <h5>We love to share every news with our eminent customers <br/>
          As we put forward another step in walking the journey of milestones of success.</h5>

          <div className='ImageNewText'>
            {/* text */}

            <div>
            <h4>EssGee is ISO 9001:2015 Certified</h4>
            <p>Quality is an integral part of EssGee's Corporate Business Principles. These principles guide our actions to deliver products and services that are safe, compliant and preferred. They are essential for the achievement of our ambition to be recognized and trusted to offer products and services that enhance the quality of life and contribute to a healthier future. At EssGee, our commitment is to never compromise on the safety, compliance and quality of our products and services. ISO 9001:2015 Certification helps to strengthen our commitment. This enhances our customers beliefs and trust in us.</p>
            </div>

            {/* image */}

            <div>
              <img src="https://img.freepik.com/premium-vector/quality-control-approved-seal-stamp-green-flat_78370-753.jpg" alt="quality" />
            </div>
          </div>

          <div className='ImageNewText'>
            {/* text */}

            <div>
            <h4>EssGee launches 'Masker'</h4>
            <p>"MASKER" is a Brand for masking tapes brought to you by ESSGEE Industries. Masking tape, also known as sticky tape, is a type of pressure-sensitive tape made of a thin and easy-to-tear paper, and an easily released pressure-sensitive adhesive. The adhesive is the key element to its usefulness, as it allows the tape to be easily removed without leaving residue or damaging the surface to which it is applied. "MASKER" Tapes are used by Wall Painting , Automotive Usage, etc.
              Visit our newly launched (Masker) Website: www.maskertape.com</p>
            </div>

             {/* image */}

             <div>
              <img src="https://m.media-amazon.com/images/I/71CbTD2WU3L.jpg" alt="quality" />
            </div>

          
          </div>
        </div>

        <div>
          <h1>Our Core Member</h1>
        </div>

            <HomeSlider/>

            {/* facilty and system */}

            <div className='blogCont' style={{width: '90%'}}>

              <h1 className="animated-text">Facility and Quality</h1>

              <h3 style={{
                fontSize: '20px',
                lineHeight:'35px'
                
              }}>In our advanced facility, we use a careful Quality System to 
                make sure everything we do is excellent and reliable. 
                We're totally committed to giving you the Best products 
                and services, which means we set the standard for quality 
                in our industry and make sure You're happy with what we provide.</h3>
                
               
                <img 
                style={{ 
                  width:'300px', 
                  height:'300px', 
                  margin: 'auto'}} 
                  
                  src="https://ugokawaii.com/wp-content/uploads/2022/08/increase.gif" alt="" /> 
                  

                  <div><button class="button-78" 
            onClick={() => navigate("/blog")}
            role="button">Know More</button></div>
            </div>



            <Client/>
            </div>

            {/* blog */}

            <div className='blogCont'>


              {/* button 2 */}

              <button class="button-92" 
              onClick={() => navigate("/blog")}
              role="button">
              <h3>Want to Read Some Exiting blog </h3></button>


            </div>

            



          </div>
      
      
      
        );
}
