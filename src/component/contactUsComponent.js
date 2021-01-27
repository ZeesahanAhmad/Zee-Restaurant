import React from "react";

function ContactUs(props) {
    return(
        <div className="contact-custom">
        <div className="container">
            <div className="row row-content">
                <div className="col-12 offset-sm-1 font-custom">
                <h2><b style={{color:"#33d9b2"}}> Location Information</b></h2>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h3 className="font-custom"><b style={{color:"#34ace0"}}>Our Address</b></h3>
                        <address className="font-custom address-custom" style={{color:"whitesmoke"}}>
                         Pincode: 823001<br/>
                         Katari Hill Road<br/>
                         New Karimganj<br/>
                         GAYA,BIHAR<br/>
                         <i className="fa fa-phone"></i>: +9162554391<br />
                         <i className="fa fa-envelope"></i>: <a href="#">zeerestaurant@food.net</a>
                        </address>
                </div>
                
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="#"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ContactUs;