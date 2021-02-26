import React, { useReducer, useState } from 'react'
import reducer from './reducer';
import Modal from './Modal'



//initial state
const defaultState={
    people:[],
    modalShow:false,
    msg:'',
    msgColor:''
}
function Todolist() {
    const [text,setText]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState);

    const SubmitBtn=(e)=>{
        e.preventDefault();
    if(text){
        const newItem={id:new Date().getTime().toString(),text}
        dispatch({type:"ADD",payload:newItem});
        setText('');
    }
    if(!text){
        dispatch({type:"EMPTY"});
        return setText('');
    }

    }

    const closeModal=()=>{
        dispatch({type:"CLOSE_MODAL"})
    }
    const clearall=()=>{
       if(text){
        dispatch({type:"CLEAR"});
       } else{
dispatch({type:"EMPTY"});
       }
    }
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto shadow my-3  bg-body rounded">
        {state.modalShow && <Modal msg={state.msg} msgColor={state.msgColor} closeModal={closeModal}/>}
        <h2 className="fst-italic fw-bold text-danger text-center my-3">Todo List</h2>
        <form className="text-center" onSubmit={SubmitBtn}>
<input type="text" placeholder="write something...." className="form-control" value={text} onChange={(e)=>setText(e.target.value)}/>
<button className="btn btn-primary m-2" type="submit">Add to list</button>
<button className="btn btn-danger m-2" type="button" onClick={clearall}>clear all</button>

        </form>
        <ol className="my-3">
        {state.people.map((person)=>{
            const {id,text}=person;
            return (<li key={id} className="text-muted">
                <p className="mx-4">{text}</p>

            </li>) 
        })}

        </ol>

        </div>

        </div>
            
        </div>
    )
}

export default Todolist
