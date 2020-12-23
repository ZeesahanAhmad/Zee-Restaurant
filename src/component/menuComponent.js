import React,{Component} from "react";
import {Media} from "reactstrap";

class Menu extends Component{
    constructor(props){
        super();
        
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div  key={dish.id} className="col-md-12 mt-5">
                  <Media tag="li">
                    <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="ml-5">
                      <Media heading style={{fontSize:"30px",color:"black"}}> {dish.name} </Media>
                      <p style={{color:"blue"}}>{dish.description}</p>
                    </Media>
                 </Media>
              </div>
            );
        }
        );
        return(
            <div className="container">
             <div className="row">
              <Media list>
               {menu}
              </Media>
             </div>
            </div>
        );
    }
}
export default Menu;
