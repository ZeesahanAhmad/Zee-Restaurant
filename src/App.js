import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

 class App extends Component{
   constructor(){
     super();
   }
   render(){
    return (
      <div className="App">
       <Navbar dark color="success">
        <div className="container">
          <NavbarBrand><b>Zee Restaurant</b></NavbarBrand>
        </div>
       </Navbar>
        
      </div>
        );
  
     }
   }
  

export default App;
