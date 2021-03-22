import * as actionType from './actionType';
import {DISHES} from'../dataCollection/dishes';
import {LEADERS} from "../dataCollection/leaders";
import {COMMENTS} from '../dataCollection/comments';
import {PROMOTIONS} from "../dataCollection/promotions";

// thunk for DISHES
export const fetchDishes=()=>(dispatch)=>{
     dispatch(dishesLoading());
     
     setTimeout(()=>{
         dispatch(addDishes(DISHES));
     },2000);

}

export const dishesLoading=()=>({
    type:actionType.DISHES_LOADING
})

export const dishesFailed=(errMessage)=>({
    type:actionType.DISHES_FAILED,
    payload:errMessage
})

export const addDishes=(dishes)=>({
    type:actionType.ADD_DISHES,
    payload:dishes
})


// thunk for COMMENTS
export const fetchComments=()=>(dispatch)=>{
    dispatch(commentsLoading());

    setTimeout(()=>{
        dispatch(addComments(COMMENTS));
    },2000);
}

export const commentsLoading=()=>(
    {
        type:actionType.COMMENTS_lOADING
    }
)

export const commentsFailed=()=>(
    {
        type:actionType.COMMENTS_FAILED,
        payload:errMessage
    }
)

export const addComments=(comments)=>(
    {
        type:actionType.ADD_COMMENTS,
        payload:comments
    }
)

export const addComment=(dishId,rating,name,comment)=>({
    type:actionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:name,
        comment:comment
    }
});

// thunk for LEADERS
export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading());

    setTimeout(()=>{
        dispatch(addLeaders(LEADERS));
    },2000);
}

export const leadersLoading=()=>(
    {
        type:actionType.LEADERS_lOADING
    }
)

export const leadersFailed=()=>(
    {
        type:actionType.LEADERS_FAILED,
        payload:errMessage
    }
)

export const addLeaders=(leaders)=>(
    {
        type:actionType.ADD_LEADERS,
        payload:leaders
    }
)

// thunk for PROMOTIONS
export const fetchPromotions=()=>(dispatch)=>{
    dispatch(promotionsLoading());

    setTimeout(()=>{
        dispatch(addPromotions(PROMOTIONS));
    },2000);
}

export const promotionsLoading=()=>(
    {
        type:actionType.PROMOTIONS_lOADING
    }
)

export const promotionsFailed=()=>(
    {
        type:actionType.PROMOTIONS_FAILED,
        payload:errMessage
    }
)

export const addPromotions=(promotions)=>(
    {
        type:actionType.ADD_PROMOTIONS,
        payload:promotions
    }
)



