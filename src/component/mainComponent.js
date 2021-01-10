import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from "./dishDetails";
import {DISHES} from'../dataCollection/dishes';
import {COMMENTS} from '../dataCollection/comments';



 class Main extends Component{
   constructor(){
     super();
     this.state={
       dishes:DISHES,
       comments:COMMENTS,
       selectedDish:null
       }
   }

   onDishSelect(dish){
    this.setState({
      selectedDish:dish
    });
    
  }
   render(){
    return (
      <div className="App">
        <Navbar dark color="success">
          <div className="container">
            <NavbarBrand><b style={{fontSize:'30px'}}>Zee Restaurant</b></NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} comments={this.state.comments} onClick={(dish)=>this.onDishSelect(dish)}/>

        <div className="container">
          <DishDetail selectedDish={this.state.selectedDish} comments={this.state.comments}/>
        </div>
        
      </div>
  );
  
     }
   }
  

 export default Main;