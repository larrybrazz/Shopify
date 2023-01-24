
import React,{useContext, useEffect} from 'react';

import { stateContext } from '../../context/ContextWrapper';

const PageIfProducts = (props) => {

    const {productArray, pages, currentPage} = props;

    const stateObject = useContext(stateContext);

    const {personLoggedIn} = stateObject;


  return (
    <div className='pages flexContainer productFlex my-5 '>
      
        <div className=' ms-2'>
            <div className='border rounded' style={{width:'fit-content',height:'fit-content', padding:'5px 20px'}}>
              <i className="bi bi-person text-dark" style={{fontSize:'50px'}}/>
              <p className='fw-bold'> {personLoggedIn.firstName} {personLoggedIn.lastName}</p>
            </div>
        </div>
        
        <div className='productContainer'>
             <h2 className='text-center' style={{marginBottom:'20px'}}>
               Best Deals
              </h2>
          <div className='gridContainer productGrid' id='products'>

           {productArray}     

          </div>

          <div className='ms-auto  d-flex mt-5 mt-sm-4 mt-md-3 justify-content-end' style={{width:'50%', minHeight:'fit-content'}} >

            {
              (currentPage !== 1)? props.children[0] : ""
            }

            {
              (pages !== currentPage)? props.children[1] : ""
            }

          </div> 

        </div>
        
      </div>
  )
}

export default PageIfProducts