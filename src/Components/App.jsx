
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Home from './home/Home';
import Shop from './shop/Shop';
import SignUp from './validationAndAuthorization/SignUp';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './validationAndAuthorization/Login';
import ContextWrapper from '../context/ContextWrapper';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';


import '../style.css'
import './home/home.css'
import './shop/shop.css'
import './validationAndAuthorization/signupAndLogin.css'

const App = () => {
  return (
    <ContextWrapper>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path= '/login' element={<Login/>} />
        </Routes>
        <Footer/>
    </ContextWrapper>
  )
}

export default App;