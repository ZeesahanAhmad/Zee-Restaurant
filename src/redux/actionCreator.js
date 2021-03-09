import * as actionType from './actionType';

export const addComment=(dishId,rating,name,comment)=>({
    type:actionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:name,
        comment:comment
    }
})