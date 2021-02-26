import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
import {SidebarData} from './SidebarData';
function Sidebar() {
    const[sidebar,setSidebar]=useState(SidebarData);
    return (
        <div className="sidebar">
        <ul className="sidebarList">

{sidebar.map((val,i)=>{
    return(<div key={i}>
    {""}
    <NavLink exact activeClassName="navClass" to={val.link} style={{textDecoration:"none"}} className="list">
    
    <div id="icon">{val.icon}</div>{""}
    <div id="title">{val.title} </div>
    
    </NavLink>
    </div>

    )
})}
            
        </ul>
        </div>
    )
}

export default Sidebar
