import React,{Component} from "react";
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay, CardText} from "reactstrap";
import DishDetail from "./dishDetails";




class Menu extends Component{
    constructor(props){
        super();
        
    }

    
   render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
              <div  className="col-sm-12 col-md-4 mt-4">
                <Card  key={dish.id} onClick={()=>this.props.onClick(dish)}>
                 <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
                 <CardImgOverlay>
                  <CardBody>
                    <CardTitle style={{fontSize:"25px",color:"red"}}><b>{dish.name}</b></CardTitle>
                  </CardBody>
                 </CardImgOverlay>
                </Card>
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
