import React, { useEffect, useState } from 'react'
import "../App.css";
const url="https://course-api.com/react-tabs-project";
function About() {
    const[loading,setloading]=useState(true);
    const [value,setValue]=useState(0);
    const [jobs,setjobs]=useState([]);
    
    const fetchurl=async()=>{
const response= await fetch(url);
const data= await response.json();
setjobs(data);
setloading(false);
    }
    useEffect(()=>{
fetchurl();
    },[]);

    if(loading){
        return (<div className="container pt-4">
        <h1 className="text-center fw-bold">loading....</h1>

        </div>);
    }

    const {company,order,dates,duties,title}=jobs[value]
    console.log(title);
    return (
        <div className="container">
<div className="row">
    <div className="col">
<div className="tabs">
{
            jobs.map((item,index)=>{
                return(<button onClick={()=>setValue(index)} key={item.id} className="btn text-primary btn-light">
                {item.title}
                </button>
                )
            })
        }
</div>
    
    </div>
    <div className="col-10 mx-auto shadow py-3 bg-body rounded">
        <h3 className="fw-bold">  {""} {title}</h3>
        <h5 className="text-primary me-4 fst-italic pb-2"> Company : {""} {company}</h5>
        <ul className="text-muted mx-4">
{
    duties.map((duty,index)=>{
        return(<li key={index} className="mb-3 fst-italic">{duty}</li>)
    })
}
        </ul>
    </div>
</div>
            
                
        </div>
    )
}

export default About
