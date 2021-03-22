import * as actionType from "./actionType";

export const Dishes=(state={
    isLoading:true,
    errMessage:null,
    dishes:[]
}, action)=>{
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return{...state, isLoading:true, errMessage:null, dishes:[]}

        case actionType.DISHES_FAILED:
            return{...state, isLoading:false, errMessage:action.payload, dishes:[]}

        case actionType.ADD_DISHES:
            return{...state, isLoading:false, errMessage:null, dishes:action.payload}
        
        default:
           return state;
    }

}