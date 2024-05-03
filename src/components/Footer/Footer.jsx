import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContextProvide';

export const Footer = () => {

  const { lang, setLang } = useContext(MyAuthContext);

  const navigate = useNavigate();

  const handleWhatsapp = () => {
    const message = "Welcome to ESS GEE Industries";

    // WhatsApp URL including the phone number and message
    const whatsappUrl = `https://wa.me/+919899804610git?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
};

// english mode
if(!lang){

  return (

    <div className="footer">

        
        <div className="footSeconf">
            <p onClick={() => {navigate("/home")}}>   Home</p>
            <p onClick={() => {navigate("/blog")}}>   Blog</p>
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
          <h3>Created By: KalyanTech 🚀</h3>

          <div className='lastCopy'>
          <p>© 2024 ESS GEE Industries. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy | Sitemap</p>
          </div>
            
        </div>
    </div>
  )

}

// japanese mode
  return (

    <div className="footer">

        
        <div className="footSeconf">
            <p onClick={() => {navigate("/home")}}>   家</p>
            <p onClick={() => {navigate("/blog")}}>   ブログ</p>
            <p onClick={() => {navigate("/about")}}>   について</p>
            <p onClick={() => {navigate("/contact")}}>   接触</p>
            <p onClick={() => {navigate("/product")}}>   製品</p>
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
          <h3>作成者:- KalyanTech ❤️</h3>

          <div className='lastCopy'>
          <p>© 2024 ESS GEE インダストリーズ。 無断転載を禁じます.</p>
          <p>利用規約 | プライバシーポリシー| サイトマップ</p>
          </div>
            
        </div>


        



    </div>
  )
}
