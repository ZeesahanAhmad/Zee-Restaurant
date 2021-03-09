import {COMMENTS} from '../dataCollection/comments';
import * as actionType from './actionType';

export const Comments=(state=COMMENTS,action)=>{
    switch (action.type) {
        case actionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date=new Date().toISOString();
            return state.concat(comment);
            console.log(comment);
        
        default:
           return state;
    }

}