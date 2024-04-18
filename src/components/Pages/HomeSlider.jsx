import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import gautam from '../assets/gautam.jpg';
import ratan from '../assets/ratan.jpg';

function Fade() {
  return (
    <Carousel>
      <Carousel.Item 
      style={{ width: '100%', height: 'auto', border: "1px solid red", backgroundColor:'aqua'}} // Adjust image size      
      >
        <div style={{display:'flex'}}>
        <img
          className="d-block mx-auto"
          src={ratan}
          alt="ratan"
          style={{ width: '20%', height: 'auto', border: "1px solid red" }} // Adjust image size
        />
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Qui vitae hic quam, quod suscipit excepturi culpa labore 
        repellat magni esse sed mollitia nisi beatae pariatur molestias 
        quibusdam. Rerum, molestiae sunt.</p>
       </div>
      </Carousel.Item>

      <Carousel.Item 
      style={{ width: '100%', height: 'auto', border: "1px solid red", backgroundColor:'aqua'}} // Adjust image size      
      >
        <div style={{display:'flex'}}>
        <img
          className="d-block mx-auto"
          src={gautam}
          alt="gautam"
          style={{ width: '20%', height: 'auto', border: "1px solid red" }} // Adjust image size
        />
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Qui vitae hic quam, quod suscipit excepturi culpa labore 
        repellat magni esse sed mollitia nisi beatae pariatur molestias 
        quibusdam. Rerum, molestiae sunt.</p>
       </div>
      </Carousel.Item>

      <Carousel.Item 
      style={{ width: '100%', height: 'auto', border: "1px solid red", backgroundColor:'aqua'}} // Adjust image size      
      >
        <div style={{display:'flex'}}>
        <img
          className="d-block mx-auto"
          src={ratan}
          alt="ratan"
          style={{ width: '20%', height: 'auto', border: "1px solid red" }} // Adjust image size
        />
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Qui vitae hic quam, quod suscipit excepturi culpa labore 
        repellat magni esse sed mollitia nisi beatae pariatur molestias 
        quibusdam. Rerum, molestiae sunt.</p>
       </div>
      </Carousel.Item>
      
     
    </Carousel>
  );
}

export default Fade;
