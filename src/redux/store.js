import {createStore,combineReducers,applyMiddleware} from "redux";
import {Dishes} from './dishesReducer';
import {Comments} from './commentsReducer';
import {Leaders} from './leadersReducer';
import {Promotions} from './promotionsReducer';
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            comments:Comments,
            promotions:Promotions
        }),
        applyMiddleware(thunk)
    );
    return store;
}