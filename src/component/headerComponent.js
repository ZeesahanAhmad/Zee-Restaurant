import React from "react";
import {Navbar,NavbarBrand,Nav,NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


const Header=()=>{
    return(
        <Navbar dark className="navbar-color" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto"><b style={{fontSize:'30px'}}>Zee Restaurant</b></NavbarBrand>
            <Nav navbar>
              <NavItem className="nav-link" style={{color:"white"}}><b className="fa fa-home fa-lg">Home</b></NavItem>
              <NavItem className="nav-link" style={{color:"white"}}><b className="fa fa-info fa-lg">About Us</b></NavItem>
              <NavItem className="nav-link" style={{color:"white"}}><b className="fa fa-list fa-lg">Menu</b></NavItem>
              <NavItem className="nav-link" style={{color:"white"}}><b className="fa fa-address-card fa-lg">Contact Us</b></NavItem>
            </Nav>
            
          </div>
        </Navbar>

    )
}
export default Header;