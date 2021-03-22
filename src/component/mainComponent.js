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
import Loading from "./loadingComponent";
import {connect} from "react-redux";
import {addComment,fetchDishes,fetchComments,fetchLeaders,fetchPromotions} from "../redux/actionCreator";


 const mapStateToProps=(state)=>{
 return{
   dishes:state.dishes,
   comments:state.comments,
   leaders:state.leaders,
   promotions:state.promotions
 }
 }

 const mapDispachToProps=(dispatch)=>({
   addComment:(dishId,rating,author,comment)=>{dispatch(addComment(dishId,rating,author,comment))},
   fetchDishes:()=>dispatch(fetchDishes()),
   fetchComments:()=>dispatch(fetchComments()),
   fetchLeaders:()=>dispatch(fetchLeaders()),
   fetchPromotions:()=>dispatch(fetchPromotions())

 });

 


 class Main extends Component{
   constructor(props){
     super(props);
   }

   componentDidMount(){
     this.props.fetchDishes();
     this.props.fetchComments();
     this.props.fetchLeaders();
     this.props.fetchPromotions();
   }
   
  render(){
    const LandingPage=()=>{
      return(
        <Home featuredDish={this.props.promotions.promotions.filter((promo)=>promo.featured==true)[0]}
        isLoading={this.props.promotions.isLoading} errMessage={this.props.promotions.errMessage}/>
      )
    }
    const MenuPage=()=>{
      return(
        <Menu dishes={this.props.dishes.dishes}
         isLoading={this.props.dishes.dishesLoading}
         errMessage={this.props.dishes.errMessage}
         comments={this.props.comments.comments}/>
      )
    }
    const ContactUsPage=()=>{
      return(
        <ContactUs/>
      )
    }
    const AboutUsPage=()=>{
      return(
        <AboutUs leaders={this.props.leaders.leaders} isLoading={this.props.leaders.isLoading} errMessage={this.props.leaders.errMessage}/>
      )
    }
    const DishDetailPage=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id==parseInt(match.params.dishId,10))[0]}
         isLoading={this.props.dishes.isLoading}
         errMessage={this.props.dishes.errMessage}
         comments={this.props.comments.comments.filter((comment)=>comment.dishId==parseInt(match.params.dishId,10))} 
         isLoading={this.props.comments.isLoading}
         errMessage={this.props.comments.errMessage}
         addComment={this.props.addComment} />
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
  

 export default withRouter(connect(mapStateToProps,mapDispachToProps)(Main));
