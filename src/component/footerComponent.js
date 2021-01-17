import React from 'react';
const Footer=(props)=>{
    return(
    <div className="footer">
    <div className="container">
    <div className="row justify-content-center">             
        <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              Pincode: 823001<br/>
              Katari Hill Road<br/>
              New Karimganj<br/>
              GAYA,BIHAR<br/>
              <i className="fa fa-phone fa-lg"></i>: +912 1534 5678<br />
              <i className="fa fa-envelope fa-lg"></i>: <a href="#">
                 zeerestaurant@food.net</a>
            </address>
        </div>
        <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
                <h5>Subscribe Us To</h5>
                <a className="btn btn-social-icon btn-google" href="#"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-facebook" href="#"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="#"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="#"><i className="fa fa-youtube"></i></a>
                
            </div>
        </div>
    </div>
    <div className="row justify-content-center">             
        <div className="col-auto">
            <p><b>© Copyright 2021 Zee Restaurant</b></p>
        </div>
    </div>
</div>
    </div>
    )
}

export default Footer;
  