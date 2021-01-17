import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from "./dishDetails";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Jumbotron from "./jumbotronComponent";
import Home from "./HomeComponent";
import {Switch,Route,Redirect} from "react-router-dom";
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
   
  //<DishDetail selectedDish={this.state.selectedDish} comments={this.state.comments}/>

   onDishSelect(dish){
    this.setState({
      selectedDish:dish
    });

    
    
  }
   render(){
    const LandingPage=()=>{
      return(
        <Home/>
      )
    }
    const MenuPage=()=>{
      return(
        <Menu dishes={this.state.dishes} comments={this.state.comments} onClick={(dish)=>this.onDishSelect(dish)}/>
      )
    }
    


    return (
      <div className="App">
        <Header/>
        <Jumbotron/>
         <Switch>
            <Route path="/home" component={LandingPage} />
            <Route exact path="/menu" component={MenuPage}/>
            <Redirect path="/home" />
         </Switch>
         <Footer/>
      </div>
  );
  
     }
   }
  

 export default Main;
