import * as actionType from "./actionType";


export const Leaders=(state={
    isLoading:true,
    errMessage:null,
    leaders:[]
},action)=>{
    switch (action.type) {
        case actionType.LEADERS_lOADING:
            return{...state, isLoading:true, errMessage:null, leaders:[]}
        
        case actionType.LEADERS_FAILED:
            return{...state, isLoading:false, errMessage:null, leaders:[]}

        case actionType.ADD_LEADERS:
            return{...state, isLoading:false, errMessage:null, leaders:action.payload}
        default:
           return state;
    }

}