import React from 'react'
import Marquee from 'react-fast-marquee';
import "./Client.css";
import tata from "../assets/tata.png";
import ashok from "../assets/Ashokleyland.png";
import hero from "../assets/Hero.png";
import mahindra from "../assets/Mahindra.png";
import tvs from "../assets/TVS.png";
import yamaha from "../assets/Yamaha.png";
import badve from "../assets/badve.png";
import fiat from "../assets/fiat.png";
import honda from "../assets/honda.png";
import lumax from "../assets/lumax.png";
import maruti from "../assets/maruti.png";
import sandhar from "../assets/sandhar.png";
import studds from "../assets/studds.png";
import varrox from "../assets/varrox.png";
import voltas from "../assets/voltas.png";
import { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContextProvide';


export const Client = () => {

  const { lang, setLang } = useContext(MyAuthContext);


  //english mode
  if(!lang){

  return (
    <div className='mainCon'>
        <h2>With Great Outcomes.</h2>
        <h3>Our Customer have gotten offers from awsome companies.</h3>

        {/* <div className='marqueediv'> */}
         {/* Marquee from the right */}
         
         <Marquee direction='right' speed={40} delay={10}>
          <div className='image_wrapper'>
            <img src={tata} alt="tata" />
          </div>

          <div className='image_wrapper'>
            <img src={ashok} alt="ashok" />
          </div>

          <div className='image_wrapper'>
            <img src={hero} alt="hero" />
          </div>

          <div className='image_wrapper'>
            <img src={mahindra} alt="mahindra" />
          </div>

          <div className='image_wrapper'>
            <img src={tvs} alt="tvs" />
          </div>

          <div className='image_wrapper'>
            <img src={yamaha} alt="yamaha" />
          </div>

          <div className='image_wrapper'>
            <img src={badve} alt="badve" />
          </div>
          
        </Marquee>

        {/* Marquee from the left */}
        <Marquee direction='left' speed={40} delay={10}>
          <div className='image_wrapper'>
            <img src={fiat} alt="fiat" />
          </div>

          <div className='image_wrapper'>
            <img src={honda} alt="honda" />
          </div>

          <div className='image_wrapper'>
            <img src={lumax} alt="lumax" />
          </div>

          <div className='image_wrapper'>
            <img src={maruti} alt="maruti" />
          </div>

          <div className='image_wrapper'>
            <img src={sandhar} alt="sandhar" />
          </div>

          <div className='image_wrapper'>
            <img src={studds} alt="studds" />
          </div>

          <div className='image_wrapper'>
            <img src={varrox} alt="varrox" />
          </div>

          <div className='image_wrapper'>
            <img src={voltas} alt="voltas" />
          </div>
         
        </Marquee>
        {/* </div> */}

    </div>
  ) 

}
//japanese mode

return (
  <div className='mainCon'>
      <h2>素晴らしい結果が得られます。</h2>
      <h3>私たちの顧客は素晴らしい企業からオファーを受けています。</h3>

      {/* <div className='marqueediv'> */}
       {/* Marquee from the right */}
       
       <Marquee direction='right' speed={40} delay={10}>
        <div className='image_wrapper'>
          <img src={tata} alt="tata" />
        </div>

        <div className='image_wrapper'>
          <img src={ashok} alt="ashok" />
        </div>

        <div className='image_wrapper'>
          <img src={hero} alt="hero" />
        </div>

        <div className='image_wrapper'>
          <img src={mahindra} alt="mahindra" />
        </div>

        <div className='image_wrapper'>
          <img src={tvs} alt="tvs" />
        </div>

        <div className='image_wrapper'>
          <img src={yamaha} alt="yamaha" />
        </div>

        <div className='image_wrapper'>
          <img src={badve} alt="badve" />
        </div>
        
      </Marquee>

      {/* Marquee from the left */}
      <Marquee direction='left' speed={40} delay={10}>
        <div className='image_wrapper'>
          <img src={fiat} alt="fiat" />
        </div>

        <div className='image_wrapper'>
          <img src={honda} alt="honda" />
        </div>

        <div className='image_wrapper'>
          <img src={lumax} alt="lumax" />
        </div>

        <div className='image_wrapper'>
          <img src={maruti} alt="maruti" />
        </div>

        <div className='image_wrapper'>
          <img src={sandhar} alt="sandhar" />
        </div>

        <div className='image_wrapper'>
          <img src={studds} alt="studds" />
        </div>

        <div className='image_wrapper'>
          <img src={varrox} alt="varrox" />
        </div>

        <div className='image_wrapper'>
          <img src={voltas} alt="voltas" />
        </div>
       
      </Marquee>
      {/* </div> */}

  </div>
)
}
