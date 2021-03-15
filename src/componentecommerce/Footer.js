import React from 'react'
import  Footercss from '../componentecommerce/Footer.css';
import {BsArrowRight} from 'react-icons/bs'
import{AiFillFacebook} from 'react-icons/ai'
import{AiFillTwitterSquare}from 'react-icons/ai'
import {FaInstagramSquare}from 'react-icons/fa'

import {FaTelegram}from 'react-icons/fa'
function Footer(){
    return(<div >
       
       <div className="footer">
      <div className="container">
          <div className="color">
              <div className="row">
                  <div className="col-md-8">
    <h1  className="color">sign up& get 10% off </h1>
    <p className="color ">Molla present as best interior design</p>
    </div>
 <div className="col-md-4">
    <a href="" ><button  className="signup"> Sign up<BsArrowRight/></button></a>
    </div>
    </div>
    </div>
    </div>
</div>

 <div className="footerarea">
 
      <div className="container">
<div className="row">


<div className="col-md-3">
<img className="footerimg" src="https://d-themes.com/react/molla/demo-2/assets/images/logo-footer.png"/>
<p className="footermollapara">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>

<AiFillFacebook className="footerfac"/>
<AiFillTwitterSquare  className="footerfac"/>
<FaInstagramSquare  className="footerfac"/>
<FaTelegram  className="footerfac"/>

</div>
<div className="col-md-3">
 <h5 className="footername">Use links</h5>

    <ul >
            
    <a href=""><li className="footerlist">About </li></a>
    <a href=""><li className="footerlist">Molla</li></a>
    <a href=""><li className="footerlist">How to shop on Molla</li></a>
    <a href=""><li className="footerlist">FAQ</li></a>
    <a href=""><li className="footerlist">Contact us</li></a>
    <a href=""><li className="footerlist">Log in</li></a>
    </ul>

</div>

<div className="col-md-3 ">
<h5 className="footername">Customer Service</h5>

<ul >
            
            <a href=""><li className="footerlist">Payment Methods </li></a>
            <a href=""><li className="footerlist">Money-back guarantee!</li></a>
            <a href=""><li className="footerlist">Returns</li></a>
            <a href=""><li className="footerlist">Shipping</li></a>
            <a href=""><li className="footerlist">Terms and conditions</li></a>
            <a href=""><li className="footerlist">Privacy Policy</li></a>
            </ul>
</div>

<div className="col-md-3 ">
<h5 className="footername">My Account</h5>

<ul >
            
            <a href=""><li className="footerlist">Sign in </li></a>
            <a href=""><li className="footerlist">View cart</li></a>
            <a href=""><li className="footerlist">My wishlist</li></a>
            <a href=""><li className="footerlist">Track My order</li></a>
            <a href=""><li className="footerlist">Contact</li></a>
            <a href=""><li className="footerlist">Help</li></a>
            
            </ul>
</div>
</div>

<hr className="footerhr"/>
<p className="footername">Copyright © 2021 Molla Store. All Rights Reserved.
 
</p>
  </div>
 
  </div>

   
   
    </div>);
}
export default Footer;