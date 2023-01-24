
import React,{useState, useRef, useEffect,} from 'react';
import { useNavigate } from "react-router";

import FormInput from './FormInput';
import Button from '../Button'

import { inputInfo } from '../../data/data';
import {signUpUser} from '../../localstorage/storage'
import { formValidation } from '../../validation/validation';

const SignUp = () => {

    const isFormValid= useRef(false);

    const [userInfo, setUserInfo] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    });

    const [isSignedUp, setIsSignedUp] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if (isSignedUp) {
            navigate('/')
        }
    },[isSignedUp])

    const inputNames = Object.keys(userInfo);

    const handleInputChange = (event)=> {

        const inputName = event.target.name;

        let inputValue =event.target.value;

        if (inputValue && (inputName === 'firstName' || inputName === 'lastName')) {

            const firstLetter = inputValue[0].toUpperCase()

            inputValue = inputValue.split('')

            inputValue[0] = firstLetter;

            inputValue = inputValue.join('');    
        }

        setUserInfo({...userInfo,[inputName]:inputValue})
    }

    const handleFormSubmit=(event)=>{

        event.preventDefault();

        const formInputObject= event.target.elements;

        const validInputArray = inputNames.filter(inputName=>{
            return formValidation(userInfo, undefined,formInputObject[inputName]) === true;
       })

        if(validInputArray.length === inputNames.length)
                 isFormValid.current= true;

        if(isFormValid.current)
            signUpUser(userInfo,setIsSignedUp);
    }

    const formInputs = inputInfo.map((input,index)=>{
        return (           
            <FormInput key={inputNames[index]} handleInputChange={handleInputChange} inputValue={userInfo[inputNames[index]] } {...input} inputsObj={userInfo}/>
        )
    })

  return (
    <div className='pages my-5 d-flex flex-column justify-content-center align-items-center'>
        <h2  className='mb-2'>Shopify</h2>
        <form className='forms' onSubmit={handleFormSubmit}>
            {formInputs}
            <Button buttonType='submit' buttonText='Submit' buttonColor='secondary' btnStyle={{margin:0,padding:'10px 20px'}}/> 
        </form>
    </div>
  )
}

export default SignUp