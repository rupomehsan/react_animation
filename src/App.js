import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Profile from './Profile/Profile'
import Service from './Service/Service'
import About from './About/About'
import Navbar from './Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route exact path="/service" element={<Service/>} />
         <Route exact path="/profile" element={<Profile/>} />
         <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/about" element={<About/>} />
       </Routes>
    </>
  );
}

export default App;
