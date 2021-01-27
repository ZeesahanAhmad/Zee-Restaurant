import React,{Component} from "react";
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
</style>
import Main from './component/mainComponent';
import {BrowserRouter} from "react-router-dom";
import{configureStore} from "./redux/store";
import {Provider} from "react-redux";
   
  const store=configureStore();

  const App=()=>{
    return (
      <Provider store={store} >
      <BrowserRouter>
         <Main/>
      </BrowserRouter>
      </Provider> 
     );
  
     }
   
export default App;
