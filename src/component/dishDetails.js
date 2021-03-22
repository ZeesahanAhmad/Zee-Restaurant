import React,{useState} from 'react';
import {Card,CardBody,CardTitle,CardImg, CardText,Button,Modal,ModalBody,ModalHeader, Label,Row,Col} from "reactstrap";
import {LocalForm,Control,Errors} from'react-redux-form';
import Loading from "./loadingComponent";

const RenderDish=({dish,isLoading,errMessage})=>{
  if(isLoading){
    return(
      <div className= "col-12 col-md-4 m-1 mt-5 font-custom">
      <Loading/>
      </div>
    )
  }

  else if(errMessage){
    return(
      <div className="container">
       <P>errMessage</P>
      </div>
    )
  }

  else{
    if(dish!=null){
      return(
        <div className= "col-12 col-md-4 m-1 mt-5 font-custom">
         <Card>
          <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody className="card-body-custom">
            <CardTitle style={{fontSize:"25px",color:"red"}}><b>{dish.name}</b></CardTitle>
            <CardText>{dish.description}<br></br><b>{`Price: $${dish.price}`}</b> 
            </CardText>
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
  
}
// {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}

const RenderComment=({com})=>{
  return(
    <div className="font-custom comment-custom">
    <h5>{com.comment}</h5>
    <b>{com.author}</b><b>{",  "}</b>
    <b>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</b>
    </div>
    
  )
}


const DishDetail=(props)=>{
  const [Open,setOpen]=useState(false);

         const comments=props.comments.map((com)=>{

          if(props.comments!=null){
           return(
            <RenderComment com={com}/>
            );
           }
         else{
           return null;
         }
        });

        const handleSubmit=(values)=>{
          props.addComment(props.dish.id, values.rating, values.author, values.comment);
        }
      

        return(
          
          <div className="container">
            <div className="row">
              <RenderDish dish={props.dish} isLoading={props.isLoading} errMessage={props.errMessage}/>
              <div className="col-12 col-md-6 m-1 mt-5">
               <p className="font-custom comment-header-custom" ><b>Your comments are valueble to Us</b></p>
                {comments}
                <Button className="add-comment mt-4 btn btn-info" onClick={()=>setOpen(!Open)}>Add Comment</Button>
              </div>
             </div>



           <Modal isOpen={Open} toggle={()=>setOpen(!Open)}>
            <ModalHeader  toggle={()=>setOpen(!Open)}><b>ADD COMMENT HERE!</b></ModalHeader>
            <ModalBody >
             <LocalForm onSubmit={(values)=>handleSubmit(values)}>
             
              <Row className="form-group">
               <Label htmlFor="raring" md={2}><b>Rating</b></Label>
               <Col md={10}>
               <Control.select model=".rating" id="rating" name="rating" width="200px" className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
               </Control.select>
               </Col>
              </Row>

            <Row className="form-group">
             <Label htmlFor="author" md={2}><b>Name</b></Label>
             <Col md={10}>
             <Control.text model=".author" id="author" name="author"placeholder="Enter your name" width="200px" className="form-control"/>
             </Col>
            </Row>

            <Row className="form-group">
             <Label htmlFor="comment" md={2}><b>Comment</b></Label>
             <Col md={10}>
              <Control.textarea model=".comment" id="comment" name="comment" rows="6" width="200px" className="form-control"f/>
             </Col>
            </Row>

            <Button type="submit" value="submit" className="btn btn-success btn-lg"><b>comment</b></Button>
         </LocalForm>
        
        </ModalBody>
      </Modal>
  </div>

          );
    } 


export default DishDetail;