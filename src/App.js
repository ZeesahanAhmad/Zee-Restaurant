import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './component/menuComponent';
import {DISHES} from'./dataCollection/dishes';


 class App extends Component{
   constructor(){
     super();
     this.state={
       dishes:DISHES,
       }
   }
   render(){
    return (
      <div className="App">
       <Navbar dark color="success">
        <div className="container">
          <NavbarBrand><b style={{fontSize:'30px'}}>Zee Restaurant</b></NavbarBrand>
        </div>
       </Navbar>
       <Menu dishes={this.state.dishes}/>
        
      </div>
        );
  
     }
   }
  

export default App;
