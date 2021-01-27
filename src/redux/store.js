import {createStore} from "redux";
import{reducer, initialState} from "./reducers";

export const configureStore=()=>{
    const store=createStore(reducer,initialState);
    return store;
}