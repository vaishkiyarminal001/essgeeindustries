import React, { useEffect, useRef } from 'react'
import blogVid from "../../video/blog.mp4";
import "./Gallery.css";
import sc from "../assets/Screenshot 2024-04-29 021548.png";
import ms from "../assets/Screenshot 2024-04-29 022812.jpg"
import Marquee from 'react-fast-marquee';

export const Gallery = () => {

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

      {/* video */}
      <div className="videocont">
        <video ref={videoRef} autoPlay muted loop>
          <source src={blogVid} type="video/mp4" />
        </video>
      </div>

      <Marquee direction='left' speed={60} delay={10}>
  <h2 style={{
    fontSize: '27px',
    paddingTop: '1%',
    color: '#0694dd', // Change this to the neon blue color you desire
    textShadow: '0 0 5px #00FFFF', // Add a neon glow effect
  }}>Explore our blog for the latest ESS GEE industry insights and updates.</h2>
</Marquee>






      {/* image and text */}

      <div className='imagText'>

      <div className="imageContainer">
              <img
                src="https://japan.kantei.go.jp/hatoyama/actions/200912/__icsFiles/afieldfile/2010/01/13/28india1_1.jpg?w=496"
                alt=""
                className="myimg"
              />
            </div>


       <div className="textContainer">
              <p>
                Shyam Prakesh journeyed to Japan to engage with leading technologists and automotive experts, 
                fostering discussions pivotal for technological advancements in the automotive industry. 
                His visit aimed to tap into Japan's rich expertise, particularly in cutting-edge technologies 
                crucial for automotive innovation. By collaborating with Japanese professionals, ESS GEE sought 
                to explore avenues for enhancing technological capabilities within his company's automotive ventures. 
                This strategic interaction underscored ESS GEE's commitment to leveraging global expertise to propel 
                advancements in automobile technology, reflecting his visionary approach towards steering his 
                organization towards excellence in the dynamic automotive landscape.
              </p>

              <div className='DateTag'>
              <p>DATE: April 28, 2024</p>
              <p className='sym'>|</p>
              <p>TOPIC: People and Culture</p>
             

              </div>
              
            </div>
            

            

      </div>

      <hr style={{border:'2px solid #000000'}} />

      <div className='imagText'>

<div className="imageContainer">
        <img
          src={sc}
          alt=""
          className="myimg"
        />
      </div>


 <div className="textContainer">
        <p>
        Shyam Prakash recently met with senior BJP leader Murari Singh Chandravanshi 
        to discuss the prospects of establishing an industry in Bihar. 
        The meeting was aimed at exploring avenues for economic development 
        and job creation in the region. Prakash presented a comprehensive 
        plan outlining the potential benefits and feasibility of the proposed 
        industry. Chandravanshi, impressed by the initiative, pledged his support and 
        promised to facilitate the necessary approvals and resources. Both parties 
        expressed optimism about the project's potential to boost Bihar's economy and 
        enhance livelihood opportunities for its residents, marking a collaborative effort 
        towards sustainable growth and prosperity.
        </p>

        <div className='DateTag'>
        <p>DATE: APRIL 25, 2024</p>
        <p className='sym'>|</p>
        <p>TOPIC: Political View</p>
       

        </div>
        
      </div>
      

      

</div>

<hr style={{border:'2px solid #000000'}} />

<div className='imagText'>

<div className="imageContainer">
        <img
          src={ms}
          alt=""
          className="myimg"
        />
      </div>


 <div className="textContainer">
        <p>
        Exploring the rich landscape surrounding Aurangabad, Maharashtra, 
        we uncovered a promising site for our upcoming industry. 
        With its strategic location, abundant resources, 
        and supportive infrastructure, this region beckons as an ideal hub for growth and innovation. 
        Eager to share our findings with delegates, we anticipate fruitful collaboration and success ahead
        </p>

        <div className='DateTag'>
        <p>DATE: April 25, 2024</p>
        <p className='sym'>|</p>
        <p>TOPIC: Business Tour</p>
       

        </div>
        
      </div>
      

      

</div>

<hr style={{border:'2px solid #000000'}} />


<div className='imagText'>

<div className="imageContainer">
        <img
          src="https://www.sosparty.io/imgs/module-grids/138_138_12.jpg"
          alt=""
          className="myimg"
        />
      </div>


 <div className="textContainer">
        <p>
        ESS GEE Industries celebrated Republic Day in a spirit of unity and 
        patriotism, honoring the rich heritage and diversity of India. 
        The company organized a special event for employees, fostering 
        a sense of national pride and camaraderie. Activities included 
        flag hoisting, cultural performances showcasing India's vibrant 
        traditions, and motivational speeches highlighting the significance 
        of the occasion. Employees participated wholeheartedly, embodying 
        the values of democracy and solidarity. ESS GEE Industries reaffirmed 
        its commitment to promoting national integration and social harmony, 
        instilling a sense of pride in being part of a dynamic and progressive 
        nation on this auspicious day.
        </p>

        <div className='DateTag'>
        <p>DATE: Jan 26, 2024</p>
        <p className='sym'>|</p>
        <p>TOPIC: Republic Day Celebration</p>
       

        </div>
        
      </div>
      

      

</div>

<hr style={{border:'2px solid #000000'}} />
    
    </div>
  )
}
