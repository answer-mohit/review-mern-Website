import React,{useContext, useState} from 'react'

function Servicecard({id,title,technology,info,img}) {
    const [readmore,setreadmore]=useState(false);


    return (
        <div>
            <div className="col mt-2" key={id}>
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">{readmore?info:`${info.substring(0,100)}`}
        <button onClick={()=>setreadmore(!readmore)} className="text-primary btn btn-light">
        {readmore?'read less':"read more"}
        </button>
        
        </p>
        <div>
            <button className="btn btn-primary">learn more</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Servicecard
