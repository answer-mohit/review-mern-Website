import React,{useState} from 'react'
import Sidebar from './components/Sidebar';
import Signup from './register/Signup'
import Login from './register/Login';
import "./App.css";
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [sidebar,setsidebar]=useState(false);
  const sidemenu=()=>{
    setsidebar(!sidebar);
  }
  
  return (
    <div className="App">
    <div className="d-flex">
      {sidebar&&<Sidebar/>}

      <div className="w-100">
      <Nav sidemenu={sidemenu} />
      <Navbar/>
    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
