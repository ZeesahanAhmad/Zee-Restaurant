import * as actionType from './actionType';

export const Comments=(state={
    isLoading:true,
    errMessage:null,
    comments:[]
},action)=>{
    switch (action.type) {
        case actionType.COMMENTS_lOADING:
            return{...state,isLoading:true, errMessage:null, comments:[] }

        case actionType.COMMENTS_FAILED:
            return{...state,isLoading:false, errMessage:action.payload, comments:[] }  
            
        case actionType.ADD_COMMENTS:
            return{...state,isLoading:false, errMessage:null, comments:action.payload } 

        case actionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString();
            return state.concat(comment);
            
        
        default:
           return state;
    }

}