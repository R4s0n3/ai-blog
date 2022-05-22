import React from "react";
import logo from '../../../logo.svg';
import {Icon} from '@iconify/react';
import "./Footer.css";
const Footer = () => {

    const YEAR = new Date().getFullYear();
    const footerStyle= {
        "color": "#FF2E4C",
        "textDecoration": "none"
    }
    return(<div>
  <footer className="main-footer">
  <div>  
  <div className="social-links">
            
            <a href="https://www.instagram.com/miomideal" rel="noreferrer" target="_blank"><Icon icon="akar-icons:instagram-fill" height="35px" color="#fff" /></a>
            <a href="https://vcard.miomideal.com" rel="noreferrer" target="_blank"><img src={logo} alt="logo" height={40}/></a>
            <a href="https://www.twitter.com/nfdealers" rel="noreferrer" target="_blank"><Icon icon="akar-icons:twitter-fill" height="35px" color="#fff" /></a>
            </div>

  <p><a style={footerStyle} href="https://vcard.miomideal.com" rel="noreferrer" target="_blank">© {YEAR} Mio Mideal </a></p>

  </div>
        </footer>
    </div>
      
    )
}
export default Footer;