
import React,{useState,useContext, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../Button';
import FormInput from './FormInput';

import {signInUser} from '../../localstorage/storage';
import { inputInfo } from '../../data/data';
import { formValidation } from '../../validation/validation';

import { stateContext } from '../../context/ContextWrapper'

const Login = () => {

  const [userDetails, setUserDetails] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();

  const location = useLocation();

  const inputNames = Object.keys(userDetails);

  const stateObject = useContext(stateContext);

  const {personLoggedIn,setPersonLoggedIn} = stateObject;

  useEffect(()=>{
    
    if (personLoggedIn) {

      if(location.state){
        const {path} = location.state;
        navigate(path);
      }else{
        navigate('/')
      }
      
    }
  },[personLoggedIn])

  const handleInputChange= (event)=>{

    const targetName = event.target.name;

    let targetValue = event.target.value;

    setUserDetails({...userDetails,[targetName]:targetValue})
  }

  const handleFormSubmit = (event)=>{

    event.preventDefault()

    const formInputObject= event.target.elements;

    const validInputArray = inputNames.filter(inputName=>{
            return formValidation(userDetails, undefined,formInputObject[inputName]) === true;
    })

    if (validInputArray.length === inputNames.length ) {
      signInUser(userDetails,setPersonLoggedIn,setUserDetails)
    }
  }

  const formInputs = inputInfo.map((input)=>{
    if (input.inputName === 'email' || input.inputName === "password") {
        return (           
          <FormInput key={input.inputName} handleInputChange={handleInputChange} inputValue={userDetails[input.inputName] } {...input} inputsObj={userDetails}/>
      )
    }
  })
  
  return (
    <div className='pages d-flex justify-content-center align-items-center login'>

      <form className='forms' onSubmit={handleFormSubmit}>
        {formInputs}        
        <Button buttonType='submit' buttonText='LogIn' buttonColor='success' btnStyle={{margin:0,padding:'10px 20px'}}/> 

      </form>
        
    </div>
  )
}

export default Login