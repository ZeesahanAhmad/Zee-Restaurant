import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from "./dishDetails";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Jumbotron from "./jumbotronComponent";
import Home from "./homeComponent";
import {Switch,Route,Redirect} from "react-router-dom";
import ContactUs from "./contactUsComponent";
import AboutUs from "./aboutUsComponent";
import {DISHES} from'../dataCollection/dishes';
import {COMMENTS} from '../dataCollection/comments';
import {LEADERS} from "../dataCollection/leaders";
import {PROMOTIONS} from "../dataCollection/promotions";





 class Main extends Component{
   constructor(){
     super();
     this.state={
       dishes:DISHES,
       comments:COMMENTS,
       leaders:LEADERS,
       promotions:PROMOTIONS,
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
    const ContactUsPage=()=>{
      return(
        <ContactUs/>
      )
    }
    const AboutUsPage=()=>{
      return(
        <AboutUs leaders={this.state.leaders}/>
      )
    }
    


    return (
      <div className="App">
        <Header/>
        <Jumbotron/>
         <Switch>
            <Route path="/home" component={LandingPage} />
            <Route exact path="/menu" component={MenuPage}/>
            <Route exact path="/contactus" component={ContactUsPage}/>
            <Route exact path="/aboutus" component={AboutUsPage}/>
            <Redirect to="/home" />
         </Switch>
         <Footer/>
      </div>
  );
  
     }
   }
  

 export default Main;
