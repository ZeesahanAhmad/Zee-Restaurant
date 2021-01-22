import React,{Component} from "react";
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
</style>
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
