
import React,{useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router";

import FormInput from './FormInput';
import { inputInfo } from '../data/data';
// import storage from '../../localstorage/storage';
// import { formValidation } from '../../validation/validation';

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

        const inputValue =event.target.value;

        setUserInfo({...userInfo,[inputName]:inputValue})
    }

    const handleFormSubmit=(event)=>{

        event.preventDefault();

        console.log('in here')
        const formInputObject= event.target.elements;

        const validInputArray = inputNames.map(inputName=>{
            return formValidation(userInfo, undefined,formInputObject[inputName]) === true;
       })

        if(validInputArray.length === inputNames.length)
                 isFormValid.current= true;

        if(isFormValid.current)
            storage(userInfo,setIsSignedUp);
    }

    const formInputs = inputInfo.map((input,index)=>{
        return (           
            <FormInput key={inputNames[index]} handleInputChange={handleInputChange} inputValue={userInfo[inputNames[index]] } {...input} inputsObj={userInfo}/>
        )
    })

  return (
    <div className='pages d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mb-2'>Shopify</h2>
        <form style={{width:'30%'}} onSubmit={handleFormSubmit}>
            {formInputs}
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp