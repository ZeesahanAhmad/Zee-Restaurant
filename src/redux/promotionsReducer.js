import { actions } from 'react-redux-form';
import * as actionType from './actionType';


export const Promotions=(state={
    isLoading:true,
    errMessage:null,
    promotions:[]
},action)=>{
    switch (action.type) {
        case actionType.PROMOTIONS_lOADING:
            return{...state, isLoading:true, errMessage:null, promotions:[]}
        
        case actionType.PROMOTIONS_FAILED:
            return{...state, isLoading:false, errMessage:actions.payload, promotions:[]}

        case actionType.ADD_PROMOTIONS:
            return{...state, isLoading:false, errMessage:null, promotions:action.payload}
        
        default:
           return state;
    }

}