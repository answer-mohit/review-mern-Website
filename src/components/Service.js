import React, { useContext,useState } from 'react'
import  Servicecard from './Servicecard';

import data from '../service';
function Service() {
    const [ServiceData,setServiceData]=useState(data);

 return (
        <div className="container pt-3 p-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
{
    ServiceData.map((item)=>{
        return <Servicecard {...item} key={item.id} />
    })
}

       
        </div>
            
        </div>
    )
}

export default Service
