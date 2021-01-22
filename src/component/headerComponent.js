import React,{Component} from "react";
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse} from "reactstrap";
import {NavLink} from "react-router-dom";



class Header extends Component {
  constructor(props){
    super(props);
    this.toggleNav=this.toggleNav.bind(this);
    this.state={
      isNavOpen:false
    }
    
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render(){
    return(
      <Navbar dark className="navbar-color" expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} style={{color:"white"}} />
            <NavbarBrand className=" font-custom mr-4" ><b style={{fontSize:'30px'}}>Zee Restaurant</b></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar>
              <NavItem >
                <NavLink className="nav-link mr-4" style={{color:"white"}} to="/home"><b className="fa fa-home fa-lg">Home</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4" style={{color:"white"}} to="/aboutus"><b className="fa fa-info fa-lg">About Us</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4" style={{color:"white"}} to="/menu"><b className="fa fa-list fa-lg">Menu</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4" style={{color:"white"}} to="contactus"><b className="fa fa-address-card fa-lg">Contact Us</b></NavLink>
              </NavItem>
          </Nav>
          </Collapse>
        </div>
      </Navbar>

    )
  }
}
export default Header;