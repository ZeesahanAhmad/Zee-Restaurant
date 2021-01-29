import React, { PureComponent } from "react";
import {Card,CardImg,CardImgOverlay,CardBody,CardText,CardHeader,CardTitle} from 'reactstrap';

const FituredDishInfo=({promo})=>{
    return(
       <div className="col-12 col-md-5 m-1 mt-4">
        <Card style={{paddingBottom:"43px"}}>
         <CardBody className="card-body-custom">
          <CardText className="font-custom mt-2" style={{textAlign:"center",color:"#5eaaa8"}}><b>Foot Test Better When You Eat With Your Family</b></CardText>
          <CardHeader className="font-custom mt-4" style={{fontSize:"25px",color:"red",textAlign:"center"}}><b>{promo.name}</b></CardHeader>
          <CardText  className="font-custom" style={{marginTop:"30px"}}>{promo.description}<br/><br/><b>{`Price: $${promo.price}`}</b></CardText>
          <CardText><b className="btn btn-primary mt-3">Reservation</b> <b className="btn btn-success mt-3">Reservation</b></CardText>
         </CardBody>
        </Card>
       </div> 
    );
}

const FeaturedDish=({promo})=>{
    return(
        <div className="col-12 col-md-5 m-1 mt-4">
         <Card>
         <CardImg  width="100%" src={promo.image} alt={promo.name}></CardImg>
         <CardImgOverlay style={{color:"#5eaaa8",fontSize:"25px"}}><b>{promo.name}</b></CardImgOverlay>
        </Card>
        </div>
    );
}


const Home=(props)=>{
    return(
       <div className="container home-custom">
        <div className="row">
         <FeaturedDish promo={props.featuredDish}/>
         <FituredDishInfo promo={props.featuredDish}/>
        </div>
       
       </div>
    );

}

export default Home;