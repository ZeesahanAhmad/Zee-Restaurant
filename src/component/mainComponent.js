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
       promotions:PROMOTIONS
       }
   }
   
  render(){
    const LandingPage=()=>{
      return(
        <Home/>
      )
    }
    const MenuPage=()=>{
      return(
        <Menu dishes={this.state.dishes} comments={this.state.comments}/>
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
    const DishDetailPage=({match})=>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
         comments={this.state.comments.filter((comment)=>comment.dishId==parseInt(match.params.dishId,10))} />
      )
    }
    


    return (
      <div className="App">
        <Header/>
        <Jumbotron/>
         <Switch>
            <Route path="/home" component={LandingPage} />
            <Route exact path="/menu" component={MenuPage}/>
            <Route path="/menu/:dishId" component={DishDetailPage}/>
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
