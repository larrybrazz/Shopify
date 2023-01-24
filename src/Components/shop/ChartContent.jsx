
import React, { useState, useContext, useRef} from 'react';

import Button from '../Button';

import { stateContext } from '../../context/ContextWrapper';


const ChartContent = ({product}) => {

  const [itemCount, setItemCount] = useState(0);

  const stateObject = useContext(stateContext);

  const {setTotalCost, setTotalItemCount} = stateObject;

  const {app_sale_range} = product;

  const increaseItemCount = ()=>{
    setItemCount((prevCount)=> ++prevCount);
  };

  const decreaseItemCount = ()=> {
    setItemCount((prevCount)=>{
      return (prevCount - 1 >= 0)? --prevCount : 0;
    })
  };

  const makeOrderForProduct=()=>{
    const cost = app_sale_range.min? app_sale_range.min : 30;
    setTotalCost((initialCost)=>  initialCost + (itemCount * Number(cost)) )
    setTotalItemCount((initialCount)=> initialCount + itemCount)
  }

  return (
    
    <div className='border py-2 px-1 mt-2'>

        <div className='d-flex align-items-center'>

          <div>
              <img style={{height:'150px'}} src={product.deal_main_image_url} alt={product.deal_title}/>
          </div>

          <div style={{marginLeft:'5px'}}>
              <p className='fw-bold'>{product.deal_title}</p>
              <p >
                <span className='fw-bold'>Price:</span> {app_sale_range.min? `${app_sale_range.min} ${app_sale_range.currency }`: "30 USD"}
              </p>
          </div>

        </div>

        <div className='mx-auto' style={{marginTop:'5px', width:'fit-content'}}>
            <div>
                <span className='me-2 fw-bold'>Quantity</span>
                <Button buttonText={<i className="bi bi-dash"/>} buttonColor='success' clickFunction={decreaseItemCount} btnStyle={{padding:'2px 10px', margin:'0'}} buttonType='button'/>
                <span className="bg-secondary mx-1 text-center text-light rounded d-inline-block" style={{width:'30px', height:'30px'}}>{itemCount}</span>
                <Button buttonText={<i className="bi bi-plus"/>} buttonColor='success' clickFunction={increaseItemCount} btnStyle={{padding:'2px 10px', margin:'0'}} buttonType='button'/>
            </div>

            <div style={{marginTop:'10px', width:'fit-content'}}>
                <span className='me-2 fw-bold'> Make Order </span>

                <Button buttonText={<i className="bi bi-truck text-white"/>} buttonColor='secondary' clickFunction={makeOrderForProduct} btnStyle={{padding:'2px 10px', margin:'0'}} buttonType='button'/>
            </div>
        </div>

    </div>
  )
}

export default ChartContent

