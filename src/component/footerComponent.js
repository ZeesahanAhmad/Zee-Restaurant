import React from 'react';
import {Link} from "react-router-dom";
const Footer=(props)=>{
    return(
    <div className="footer">
    <div className="container">
    <div className="row justify-content-center">             
        <div className="col-4 offset-1 col-sm-2">
            <h3 className="font-custom footer-header"><b>Links</b></h3>
            <ul className="list-unstyled font-custom">
                <li><Link className="footer-link-custom" to="/home">Home</Link></li>
                <li><Link className="footer-link-custom" to="/menu">Menu</Link></li>
                <li><Link className="footer-link-custom" to="/contactus">Contact</Link></li>
                <li><Link className="footer-link-custom" to="/aboutus">About</Link></li>
                
            </ul>
        </div>
        <div className="col-7 col-sm-5">
            <h3 className="font-custom footer-header"><b>Our Address</b></h3>
            <address className="font-custom address-custom">
              Pincode: 823001<br/>
              Katari Hill Road<br/>
              New Karimganj<br/>
              GAYA,BIHAR<br/>
              <i className="fa fa-phone fa-lg"></i>: +912 1534 5678<br />
              <i className="fa fa-envelope fa-lg"></i>: <a  style={{color:"#275070"}} href="#">
                 zeerestaurant@food.net</a>
            </address>
        </div>
        <div className="col-12 col-md-4 align-self-center">
            <div className="text-center">
                <h3 className="font-custom footer-header"><b>Subscribe Us To</b></h3>
                <a className="btn btn-social-icon btn-google" href="#"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-facebook" href="#"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="#"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="#"><i className="fa fa-youtube"></i></a>
                
            </div>
        </div>
    </div>
    <div className="row justify-content-center">             
        <div className="col-auto font-custom">
            <p><b className="copy-right-custom">© Copyright 2021 Zee Restaurant</b></p>
        </div>
    </div>
</div>
    </div>
    )
}

export default Footer;
  
  