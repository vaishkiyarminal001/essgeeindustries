import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();

  const handleWhatsapp = () => {
    const message = "Welcome to ESS GEE Industries";

    // WhatsApp URL including the phone number and message
    const whatsappUrl = `https://wa.me/+919899804610git?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
};


  return (

    <div className="footer">
{/* 
<h3>
  <a href="https://www.essgeeindustries.com" style={{color:'white'}}>www.essgeeindustries.com</a>
</h3> */}

        
        <div className="footSeconf">
            <p onClick={() => {navigate("/home")}}>   Home</p>
            <p onClick={() => {navigate("/gallery")}}>   Gallery</p>
            <p onClick={() => {navigate("/about")}}>   About</p>
            <p onClick={() => {navigate("/contact")}}>   Contact</p>
            <p onClick={() => {navigate("/product")}}>   Product</p>
            {/* <p onClick={() => {navigate("/form")}}>   Enquiry</p> */}
        </div>

        <div className="footIcon">
            <div><FacebookIcon/></div>
            <div><LinkedInIcon/></div>
            <div><XIcon/></div>
            <div><AddLocationAltIcon/></div>
            <div onClick={handleWhatsapp}><WhatsAppIcon/></div>
            

        </div>

        <div className="CreatedBy">
          <h3>Created By :- KalyanTech</h3>

          <div className='lastCopy'>
          <p>© 2024 ESS GEE Industries. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy | Sitemap</p>
          </div>
            
        </div>


        



    </div>
  )
}
