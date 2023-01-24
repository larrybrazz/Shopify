
import React from 'react'

const Button = ({buttonColor, buttonText, clickFunction, btnStyle, buttonType}) => {
  if (clickFunction) {
    return (
      <button onClick={clickFunction} type={buttonType} className={`btn btn-${buttonColor} me-${btnStyle.margin}`} style={{padding:btnStyle.padding, fontSize:'16px'}}>
          {buttonText}
      </button>
    )
  }
  else{
    return (
      <button type={buttonType} className={`btn btn-${buttonColor} me-${btnStyle.margin}`} style={{padding:btnStyle.padding, fontSize:'16px'}}>
          {buttonText}
      </button>
    )
  }
}

export default Button