import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './login.css';
function Login() {
const [user,setUser]=useState({
email:'',
password:''
});
const history=useHistory();
const inputChange=(e)=>{
  const {name,value}=e.target;
  setUser({
    ...user,
    [name]:value
  });
}
const formSubmit=(e)=>{
  e.preventDefault();
     axios.post("http://localhost:5000/login",{
      email:user.email,
      password:user.password
    }).then(()=>{
      alert('you login succesfully!')
      history.push("/home");
    }).catch(()=>{alert('invalid details , you can create a account')});
    
    setUser({
      email:'',
      password:''
    });
    
  

}

  return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 col-10 mx-auto form">
                    <h2 className="fw-bold fst-italic mb-4"> Login form</h2>
                    <form onSubmit={formSubmit}>
    


    
  <div className="mb-3">
    <label htmlFor="useremail" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
     value={user.email}
     name="email" 
   onChange={inputChange}
    id="useremail"
     aria-describedby="useremail" 
     autoComplete="off"
     required/>
  </div>
  <div className="mb-3">
    <label htmlFor="pass" className="form-label">Password</label>
    <input type="password" 
    value={user.password} 
    className="form-control"
    name="password"
    onChange={inputChange}
     id="pass" 
     autoComplete="off"
     required/>
  </div>
 
  <button type="submit" className="btn btn-primary">login</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
