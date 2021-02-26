import React, { useState } from 'react'
import people from '../data';
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai';
import "./home.css"
function Home() {
    const [index,setIndex]=useState(0);
    const[data,setdata]=useState(people);
    const {image,title,name,quote}=data[index];
const [readmore,setReadmore]=useState(false);
const checkNumber=(number)=>{
    if(number<0){
        return data.length-1; 
    }
    if(number>data.length-1){
        return 0;
    }
    return number;
}
    const Leftbtn=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
            return checkNumber(newIndex);
        })
    }
    const Rightbtn=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
            return checkNumber(newIndex);
        });
    }
    return (
        <div className="container-fluid my-2">
<div className="row">
    <div className="col-md-8 col-11 mx-auto shadow mb-3 bg-body rounded">
    <div className="text-center my-2">
<img src={image} className="img-fluid rounded-3" width="200" alt={title}/>
    </div>
<h3 className="text-capitalize fw-bold">Name: {name}</h3>
<h4 className="text-capitalize fw-bold text-primary">{title}</h4>
<div className="border-bottom-3 border border-danger my-2 "></div>
<p className="my-3 text-muted">{readmore?quote:`${quote.substring(0,50)}`}
 <span className="btn btn-light text-primary mx-3" onClick={()=>setReadmore(!readmore)}>{readmore?'read less':'read more'}</span>
</p>
<div className="text-center mb-2">
    <button className="mx-4 btn btn-light text-primary" onClick={Leftbtn}><AiOutlineDoubleLeft/>
    </button> <button className="mx-4 btn btn-light text-primary" onClick={Rightbtn}><AiOutlineDoubleRight/></button>
</div>



    </div>
</div>            
        </div>
    )
}

export default Home
