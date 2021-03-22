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
      <Navbar dark className="navbar-color navbar-custom" expand="md" style={{paddingBottom:"18px",paddingTop:"18px"}}>
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className=" font-custom mr-4" ><b style={{color:"#B7AC44",fontSize:"50px"}}>Zee Restaurant</b></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar>
              <NavItem >
                <NavLink className="ml-4"  to="/home"><b className="fa fa-home fa-lg menu-custom font-custom" style={{fontSize:"25px"}}>Home</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="ml-4"  to="/aboutus"><b className="fa fa-info fa-lg menu-custom font-custom" style={{fontSize:"25px"}}>About Us</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="ml-4"  to="/menu"><b className="fa fa-list fa-lg menu-custom font-custom" style={{fontSize:"25px"}}>Menu</b></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="ml-4"  to="contactus"><b className="fa fa-address-card fa-lg menu-custom font-custom" style={{fontSize:"25px"}}>Contact Us</b></NavLink>
              </NavItem>
          </Nav>
            <Nav navbar className="ml-auto">
              <NavItem>
              <Button className="fa fa-sign-in fa-lg" style={{color:"#275070",backgroundColor:"whitesmoke",border:"4px solid grey"}} onClick={this.toggleModal}><b className="font-custom" style={{fontSize:"25px",color:"#275070"}}>Login</b></Button>
              </NavItem>
            </Nav>

          </Collapse>
        </div>
      </Navbar>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}><b style={{marginLeft:"160px",fontSize:"30px"}}>Login Here</b></ModalHeader>
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

          <FormGroup>
          <button type="submit" class="btn btn-primary btn-lg btn-block"><b>Login</b></button>
          </FormGroup>
          
          <FormGroup>
           Forget Password? <a href="#">click here</a>
          </FormGroup>


         </Form>
        
        </ModalBody>
      </Modal>

      </React.Fragment>


    )
  }
}
export default Header;