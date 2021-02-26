import React  from 'react';
const reducer=(state,action)=>{
    if(action.type==="ADD"){
        const newPeople=[...state.people,action.payload]
        return{
            ...state,
            people:newPeople,
            modalShow:true,
            msg:'your data is added',
            msgColor:"alert-primary"
        }
    }
    if(action.type==="EMPTY"){
        return{
            ...state,
            modalShow:true,
            msg:'pls fill the box',
            msgColor:"alert-danger"
        }
    }
    if(action.type==="CLOSE_MODAL"){
        return{
            ...state,
            modalShow:false
        }
    }
    if(action.type==="CLEAR"){
        return{
            people:[],
            msg:'you clear the data',
            msgColor:"alert-warning",
            modalShow:true
        }
    }
    throw new Error("you have undefined data");
}
export default reducer;