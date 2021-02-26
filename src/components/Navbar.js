import React, { useState } from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import Todolist from './Todolist';
import Login from '../register/Login';
import Signup from '../register/Signup';
import About from './About';
import Home from './Home';
import Service from './Service';
 const Navbar=()=>{
    return(<>
       <Switch>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/service" component={Service}></Route>
    <Route exact path="/todolist" component={Todolist}></Route>
    <Route exact path="/signup" component={Signup}></Route>
    <Route exact path="/login" component={Login}></Route>
<Redirect to="/home"></Redirect>

</Switch>
    </>)
}
export default Navbar;