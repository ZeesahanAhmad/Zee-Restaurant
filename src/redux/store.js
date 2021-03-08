import {createStore,combineReducers} from "redux";
import {Dishes} from './dishesReducer';
import {Comments} from './commentsReducer';
import {Leaders} from './leadersReducer';
import {Promotions} from './promotionsReducer';

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            comments:Comments,
            promotions:Promotions
        })
    );
    return store;
}