import {DISHES} from'../dataCollection/dishes';
import {COMMENTS} from '../dataCollection/comments';
import {LEADERS} from "../dataCollection/leaders";
import {PROMOTIONS} from "../dataCollection/promotions";

export const initialState={
    dishes:DISHES,
    comments:COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS
}

export const reducer=(state=initialState,action)=>{
    return state;
}