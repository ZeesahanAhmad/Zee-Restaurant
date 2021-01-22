import React from "react";
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import DishDetail from "./dishDetails";

const RenderMenu=({dish,onClick})=>{
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

export default Menu;
