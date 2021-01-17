import React from "react";
import {Navbar,NavbarBrand,Nav,NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";



const Header=(props)=>{
    return(
      <Navbar dark className="navbar-color" expand="md">
        <div className="container">
            <NavbarBrand className="mr-auto"><b style={{fontSize:'30px'}}>Zee Restaurant</b></NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" style={{color:"white"}} to="/home"><b className="fa fa-home fa-lg">Home</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" style={{color:"white"}} to="/aboutus"><b className="fa fa-info fa-lg">About Us</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" style={{color:"white"}} to="/menu"><b className="fa fa-list fa-lg">Menu</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" style={{color:"white"}} to="contactus"><b className="fa fa-address-card fa-lg">Contact Us</b></NavLink>
              </NavItem>
          </Nav>
        </div>
      </Navbar>

    )
}
export default Header;