import React,{Component} from "react";
import './App.css';
import Main from './component/mainComponent';
import {BrowserRouter} from "react-router-dom";


 
   
   
   const App=()=>{
    return (
      <BrowserRouter>
         <Main/>
      </BrowserRouter>
      
     );
  
     }
   
export default App;
