

import React from 'react';
import {formValidation} from '../../validation/validation'
 

const FormInput = ({inputName, inputValue, labelText,handleInputChange,validationInfo,inputsObj}) => {

  const hideParaTag=(event)=>{
    const paraTag=event.target.nextElementSibling;
    (event.target.name !=="passWord")? paraTag.style.display='none': paraTag.style.color='green'
  }

  return (
    <div style={{marginBottom:'20px'}}>

        <label htmlFor={inputName} className="form-label">{labelText}</label>

        {
          inputName === 'password'? <input onChange={handleInputChange} type="password" className="formInputs" id={inputName} name={inputName} value={inputValue} onFocus={hideParaTag} onBlur={(event)=>formValidation(inputsObj,event)} autoComplete='off'/>:
          <input onChange={handleInputChange} type="text" className="formInputs" id={inputName} name={inputName} value={inputValue} onFocus={hideParaTag} onBlur={(event)=>formValidation(inputsObj,event)}/>
        }
        {
          (inputName === "password")? <p className='text-center' style={{color:'green', fontWeight:'bold', paddingTop:'5px'}}>{validationInfo}</p>:
          <p style={{textAlign:'center', color:'green', fontWeight:'bold', display:'none', paddingTop:'5px'}}>{validationInfo}</p>
        }
    </div>
  )
}

export default FormInput;