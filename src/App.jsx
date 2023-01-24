import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'



function App() {
  

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      <Footer/> 
    </React.Fragment>
  )
}

export default App
