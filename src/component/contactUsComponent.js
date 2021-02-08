import React,{Component} from "react";
import {Form,FormFeedback,FormGroup,Label,Input,Col,Button,Row} from "reactstrap";

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"tel",
            message:"",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }
    


    render(){
     const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
     
     return(
        <div className="contact-custom">
        <div className="container">
            <div className="row ">
                <div className="col-12 offset-sm-1 font-custom">
                <h2><b style={{color:"#33d9b2"}}> Location Information</b></h2>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h3 className="font-custom"><b style={{color:"#34ace0"}}>Our Address</b></h3>
                        <address className="font-custom address-custom" style={{color:"whitesmoke"}}>
                         Pincode: 823001<br/>
                         Katari Hill Road<br/>
                         New Karimganj<br/>
                         GAYA,BIHAR<br/>
                         <i className="fa fa-phone"></i>: +9162554391<br />
                         <i className="fa fa-envelope"></i>: <a href="#">zeerestaurant@food.net</a>
                        </address>
                        <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="#"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            
            </div>
                <hr/>
            

                <div className="row">
                   <div className="col-12">
                      <h3 style={{textAlign:"center",color:"#33d9b2"}}><b>Send Us Your Feedback</b></h3>
                   </div>
                    <div className="col-12 col-md-9 mt-4">
                        <Form onSubmit={this.handleSubmit} style={{color:"#34ace0"}}>
                        <FormGroup row>
                        <Label htmlFor="firstname" md={2}><b>First Name</b></Label>
                        <Col md={10}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !== ''}
                                onBlur={this.handleBlur('firstname')}
                                />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastname" md={2}><b>Last Name</b></Label>
                        <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !== ''}
                                onBlur={this.handleBlur('lastname')}
                                onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                        </Col>                        
                    </FormGroup>
                    <FormGroup row>
                    <Label htmlFor="telnum" md={2}><b>Contact Tel.</b></Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"
                                value={this.state.telnum}
                                onChange={this.handleInputChange}
                                value={this.state.telnum}
                                valid={errors.telnum === ''}
                                invalid={errors.telnum !== ''}
                                onBlur={this.handleBlur('telnum')}
                                />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}><b>Email</b></Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}><b>Your Feedback</b></Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>


              
              
              </div>
            </div>




        
    );
    }
}

export default ContactUs;