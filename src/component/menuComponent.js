import React from "react";
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import DishDetail from "./dishDetails";
import Loading from "./loadingComponent";

const RenderMenu=({dish})=>{
  return(
      <Card  key={dish.id}>
        <Link to={`/menu/${dish.id}`}>
         <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
         <CardImgOverlay>
          <CardBody>
              <CardTitle style={{fontSize:"25px",color:"red"}}><b>{dish.name}</b></CardTitle>
          </CardBody>
         </CardImgOverlay>
        </Link>
      </Card>
  )
}


const Menu=(props)=>{

  if(props.isLoading){
     return(
       <div className="container row">
       <Loading/>
       </div>
     )
  }

  else if(props.errMessage){
    return(
      <div className="container">
       <P>errMessage</P>
      </div>
    )
  }

  else {
     const menu=props.dishes.map((dish)=>{
      return(
        <div  className="col-sm-12 col-md-4 mt-4">
          <RenderMenu dish={dish}/> 
        </div> 
      );
  }
  );
  return(
      <div className="container">
        <div className="row">
         {menu}
        </div>
      </div>
     );
   } 
    
}

export default Menu;
