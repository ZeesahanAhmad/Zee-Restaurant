import React from 'react';
import {Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './loadingComponent';

const ReanderLeaders=({leader})=>{
    return(
        <Media>
          <Media left>
           <Media object className="leader-media-img" src={leader.image} alt={leader.name} />
          </Media>
          <Media body className="font-custom ml-4">
            <Media heading style={{color:"#33d9b2"}}><h3><b>{leader.name}</b></h3></Media>
            <h4 style={{color:"#34ace0"}}>{leader.designation}</h4>
            <p style={{color:"whitesmoke"}}>{leader.description}</p>
        </Media>
         </Media>
    )
}

const AboutUS=(props)=> {

    const leaders = props.leaders.map((leader) => {

            return (
                <ReanderLeaders leader={leader}/>
               );
        }
 );

    return(
        <div className="container">
            <div className="row">
                
                              
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2 className="font-custom" style={{color:"#b33939"}}><b>Our History</b></h2>
                    <p className="font-custom" style={{color:"whitesmoke"}}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p className="font-custom" style={{color:"whitesmoke"}}>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card style={{backgroundColor:"#84817a"}}>
                        <CardHeader className="bg-primary text-white font-custom">Facts At a Glance</CardHeader>
                        <CardBody >
                            <dl className="row p-1 font-custom ">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card style={{backgroundColor:"#84817a"}}>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0 font-custom"><b>You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</b></p>
                                <footer className="blockquote-footer font-custom" style={{color:"whitesmoke"}}>Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h1 className="font-custom" style={{color:"#b33939"}}><b>Corporate Leadership</b></h1>
                </div>
                <div className="col-12">
                    <Media list className="mt-4">
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default AboutUS;    