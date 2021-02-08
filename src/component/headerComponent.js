import React,{Component} from "react";
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse,Button,Modal,ModalBody,ModalHeader, Form, FormGroup, Label, Input} from "reactstrap";
import {NavLink} from "react-router-dom";



class Header extends Component {
  constructor(props){
    super(props);

    this.state={
      isNavOpen:false,
      isModalOpen:false
    }
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    })
  }

  handleLogin(event){
    this.toggleModal();
    alert("username: " +this.username.value+ "    password : "+this.password.value);
    event.preventDefault();

  }

  render(){
    return(
      <React.Fragment>
      <Navbar dark className="navbar-color navbar-custom" expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className=" font-custom mr-4" ><b style={{color:"#DE1E24",fontSize:"30px"}}>Zee Restaurant</b></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar>
              <NavItem >
                <NavLink className="nav-link mr-4"  to="/home"><b className="fa fa-home fa-lg menu-custom">Home</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4"  to="/aboutus"><b className="fa fa-info fa-lg menu-custom">About Us</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4"  to="/menu"><b className="fa fa-list fa-lg menu-custom">Menu</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link mr-4"  to="contactus"><b className="fa fa-address-card fa-lg menu-custom">Contact Us</b></NavLink>
              </NavItem>
          </Nav>
            <Nav navbar className="ml-auto">
              <NavItem>
              <Button className="fa fa-sign-in fa-lg" onClick={this.toggleModal}><b>Login</b></Button>
              </NavItem>
            </Nav>

          </Collapse>
        </div>
      </Navbar>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}><b>Login</b></ModalHeader>
        <ModalBody>
         <Form onSubmit={this.handleLogin}>
          <FormGroup>
            <Label><b>Username</b></Label>
            <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}/>
          </FormGroup>

          <FormGroup>
            <Label><b>Password</b></Label>
            <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input}/>
          </FormGroup>
          <Button type="submit" value="submit" className="btn btn-success btn-lg"><b>Login</b></Button>
         </Form>
        
        </ModalBody>
      </Modal>

      </React.Fragment>


    )
  }
}
export default Header;