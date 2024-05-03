import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import gautam from '../assets/gautam.jpg';
import ratan from '../assets/ratan.jpg'
import './HomeSlider.css';
import bgVideo from '../../video/bgVideo.mp4';
import { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContextProvide';

export const HomeSlider = () => {

  const { lang, setLang } = useContext(MyAuthContext);


  //english mode
  if(!lang){
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
                  src="https://rilstaticasset.akamaized.net/sites/default/files/2022-09/mukesh-ambani.png"
                  alt="ambani"
                  className="myimage"
                />
              </div>
  
              {/* Text */}
              <div className="text-container">
                <p>
                  <h3>Mukesh Ambani</h3>
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
                  <h3>Shyam Prakash (Founder)</h3>
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
  }

  //japanese mode

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
                自由に対する支持や必要ならばそれを守る力がなければ、それは残酷な幻想に過ぎません。そして、自由を守る力は、広範な産業化と近代科学技術の国の経済生活への浸透からしか得られません。
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
                src="https://rilstaticasset.akamaized.net/sites/default/files/2022-09/mukesh-ambani.png"
                alt="ambani"
                className="myimage"
              />
            </div>

            {/* Text */}
            <div className="text-container">
              <p>
                <h3>Mukesh Ambani</h3>
                正直で真摯なビジネス原則、細部への注意深い注意、および有利な機会や状況を活用する能力があれば、成功の余地があります
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
                <h3>Shyam Prakash (創設者)</h3>
                「進歩は私にとって夢ではありませんでした。それは常に遠い現実であり、
1つのマイルストーンが達成されると、次に越えるためのものが常に待っています。
この信念を持って、私はEss Gee Industriesを立ち上げました。接着剤および非接着性テープの幅広い分野での
有数の企業の1つとして、私たちは持続的な成長を達成し、非常に短い時間でグローバル化の結果を達成しました。」
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
  

};
