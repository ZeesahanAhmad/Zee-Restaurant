import React,{Component} from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from "./dishDetails";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Jumbotron from "./jumbotronComponent";
import Home from "./homeComponent";
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import ContactUs from "./contactUsComponent";
import AboutUs from "./aboutUsComponent";
import {connect} from "react-redux";


 const mapStateToProps=(state)=>{
 return{
   dishes:state.dishes,
   comments:state.comments,
   leaders:state.leaders,
   promotions:state.promotions
 }
 }



 class Main extends Component{
   constructor(props){
     super(props);
   }
   
  render(){
    const LandingPage=()=>{
      return(
        <Home/>
      )
    }
    const MenuPage=()=>{
      return(
        <Menu dishes={this.props.dishes} comments={this.props.comments}/>
      )
    }
    const ContactUsPage=()=>{
      return(
        <ContactUs/>
      )
    }
    const AboutUsPage=()=>{
      return(
        <AboutUs leaders={this.props.leaders}/>
      )
    }
    const DishDetailPage=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
         comments={this.props.comments.filter((comment)=>comment.dishId==parseInt(match.params.dishId,10))} />
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
  

 export default withRouter(connect(mapStateToProps)(Main));
