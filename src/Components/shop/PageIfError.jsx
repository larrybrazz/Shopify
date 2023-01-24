
import React from 'react'

const PageIfError = ({error}) => {
    
  return (
    <div className='pages d-flex justify-content-center align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="spinner-border" style={{width:'80px', height:'80px'}} role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              {
                error?<span style={{fontWeight:'bold', marginTop:'20px'}}>Error, try again.</span> : ''
              }
          </div>
      </div>
  )
}

export default PageIfError;