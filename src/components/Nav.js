import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {SidebarData} from './SidebarData';

import {NavLink} from 'react-router-dom';
import "../App.css";
function Nav({sidemenu}) {
    const [menu,setMenu]=useState(SidebarData);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <cite className="navbar-brand"> 
          <span className="mx-4 icon" onClick={sidemenu} title="sidebar">

          <AiOutlineMenu/></span>Menu</cite>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                  menu.map((val,i)=>{
                      return (<li  key={i} className="nav-item mx-3 px-3">
                <NavLink exact to={val.link} activeClassName="active" className="nav-link ">
            {val.title}</NavLink>
              </li>
                      )
                  })
              }
              
              
              
              
            </ul>
            
          </div>
        </div>
      </nav>
            
    
    )
}

export default Nav
