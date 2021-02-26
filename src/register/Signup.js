import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './signup.css';
function Signup() {
    const [form,setform]=useState({
        user:'',
        email:'',
        password:'',
        confirm_password:''
    });
const history=useHistory();
    const handleInput=(e)=>{
const{name,value}=e.target;
setform((preval)=>{
    return {...preval,
    [name]:value
}
})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/add",{
            user:form.user,
            email:form.email,
            password:form.password
        }).then(()=>{
            history.push("/home");
            alert('account created successfully !!')
        }).catch((err)=>console.log(err));
        setform({
            user:'',
            email:'',
            password:'',
            confirm_password:''
        });
    }
    return (
        <div>
            <div className="container">
                <div className="row my-2">
                    <div className="col-md-6 col-10 mx-auto form">
                    <h2 className="fw-bold fst-italic mb-2"> Signup form</h2>
                    <form onSubmit={handleSubmit} autoComplete="off">
    


    <div className="mb-2">
    <label htmlFor="name" className="form-label">User name</label>
    <input type="text" className="form-control" id="name" 
    onChange={handleInput}
    value={form.user} name="user" autoComplete="off" required/>
  </div>
  <div className="mb-2">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" 
    id="email"
    onChange={handleInput}
    value={form.email}
    name="email"
     aria-describedby="emailHelp" 
     autoComplete="off"
        required
     />
    <div id="email" className="form-text text-light">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-2">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    name="password"
    onChange={handleInput}
    value={form.password}
    id="password" 
    autoComplete="off"
    required/>
  </div>
  <div className="mb-2">
    <label htmlFor="password2" className="form-label">Confirm password</label>
    <input type="password"
     className="form-control" 
     id="password2"
         name="confirm_password"
         onChange={handleInput}
         value={form.confirm_password}
         autoComplete="off"
       required
     />
    <div id="password2" className="form-text text-light">Fill your same password for verification </div>

  </div>
  <button type="submit" className="btn btn-primary">Create account</button>
</form>
          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
