import React from "react";

const Loading=(props)=>{
    return(
        <React.Fragment>
         <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-success"></span>
         <p style={{color:"whitesmoke"}}>Loading...</p>
        </React.Fragment>
         
        
    )
}

export default Loading;