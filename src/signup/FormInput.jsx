

import React from 'react';
import { formValidation } from '../../validation/validation';
 

const FormInput = ({inputName, inputValue, labelText,handleInputChange,validationInfo,inputsObj}) => {

  const hideParaTag=(event)=>{
    const paraTag=event.target.nextElementSibling;
    (event.target.name !=="passWord")? paraTag.style.display='none': paraTag.style.color='green'
  }

  return (
    <div className="mb-3">

        <label htmlFor={inputName} className="form-label">{labelText}</label>

        <input onChange={handleInputChange} type="text" className="form-control" id={inputName} name={inputName} value={inputValue} onFocus={hideParaTag} onBlur={(event)=>formValidation(inputsObj,event)}/>
        {
          (inputName === "password")? <p style={{textAlign:'center', color:'green', fontWeight:'bold', paddingTop:'5px'}}>{validationInfo}</p>:
          <p style={{textAlign:'center', color:'green', fontWeight:'bold', display:'none', paddingTop:'5px'}}>{validationInfo}</p>
        }
    </div>
  )
}

export default FormInput;