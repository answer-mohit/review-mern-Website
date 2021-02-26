import React from 'react'
import {FaHome} from 'react-icons/fa';
import {AiOutlineMessage} from 'react-icons/ai';
import {IoDocumentsOutline} from 'react-icons/io5';
import {FcTodoList} from 'react-icons/fc'
import {RiAccountPinBoxFill,RiLoginBoxFill} from 'react-icons/ri';

export const SidebarData=[
    {
        title:'Home',
    icon:<FaHome/>,
    link:"/home"
},
{
    title:'About',
icon:<AiOutlineMessage/>,
link:"/about"
},  
  {
    title:'Service',
icon:<IoDocumentsOutline/>,
link:"/service"
},
{
    title:'Todo List',
icon:<FcTodoList/>,
link:"/todolist"
},
{
    title:'Signup',
icon:<RiAccountPinBoxFill/>,
link:"/signup"
},
{
    title:'Login',
icon:<RiLoginBoxFill/>,
link:"/login"
}

]
    