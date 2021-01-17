import React,{Component} from 'react';
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay, CardText} from "reactstrap";

const RenderDish=({dish})=>{
   
    if(dish!=null){
      return(
        <div className= "col-12 col-md-5 m-1 mt-5">
        <Card>
          <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle style={{fontSize:"25px",color:"red"}}><b>{dish.name}</b></CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
       </Card>
       </div>
      
      )
    }
   else{
     return(
      <div></div>
     )
  }
   
}


const DishDetail=(props)=>{

         const comments=props.comments.map((com)=>{
          if(props.selectedDish!=null && com.dishId===props.selectedDish.id ){
          return(
             <div>
             <p>{com.comment}</p>
             <b>{com.author}</b><b>{"      "}</b>
             <b>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
             .format(new Date(Date.parse(com.date)))}</b>
             </div>
             
             
           );
         }
         else{
           return null;
         }
        });
      

        return(
          <div className="container">
            <div className="row">
              <RenderDish dish={props.selectedDish}/>
              <div className="col-12 col-md-5 m-1 mt-5">
                {props.selectedDish == null ? null:comments}
              </div>
            </div>
          </div>
         
          );
    } 


export default DishDetail;