import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();

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
            

        </div>

        <div className="CreatedBy">
          <h3>Created By :- KalyanTech</h3>
        </div>


        



    </div>
  )
}
