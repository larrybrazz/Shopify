
import React, { useEffect, useContext, useState, useRef} from 'react';

import {stateContext} from '../../context/ContextWrapper'

const Product = ({product}) => {

    const {app_sale_range} = product;

    const stateObject = useContext(stateContext);

    const {enableClick, sortSelectedProduct} = stateObject;

    const handleChartClick = ()=>{
        if(enableClick)
            sortSelectedProduct(product);
    }

    const [display, setDisplay] = useState('none');

    const imageRef = useRef();

    useEffect(()=>{
        imageRef.current.addEventListener('load',()=>{
            setDisplay('block')
        })
    },[])

  return (
    <div className={`product rounded d-${display}`} style={{width:'100%', border:'solid thin grey', position:'relative', height:'fit-content'}}>

        <div style={{width:'100%', overflow:'hidden'}} className='rounded-top'>
            <img ref={imageRef} src={product.deal_main_image_url} alt={product.deal_title} style={{width:'100%'}}/>
        </div>

        <div className='border-top border-secondary p-2'>
            <span className='fw-bold'>{product.deal_title}</span>
            <div className='mt-2'>

                   <span className='fw-bold'>Price</span>:
                            {
                              (app_sale_range.max && app_sale_range.min)?

                                <span className='d-inline-flex w-75'>
                                    <span className='mx-lg-2 mx-3' style={{textDecoration:'line-through', textDecorationThickness: "2px"}}>
                                        {app_sale_range.max} 
                                    </span>
                                    <span>
                                        {app_sale_range.min}  ({app_sale_range.currency})
                                    </span>
                                </span>
                                :
                                <span>
                                    {
                                    app_sale_range.max || app_sale_range.min?

                                        <span className='mx-2'>

                                            {app_sale_range.max ||app_sale_range.min }{app_sale_range.currency}

                                        </span> : 
                                        <span className='mx-2'>
                                            30 USD
                                        </span>
                            
                                    }
                                </span>
                            }      
            </div>
        </div>

        <div className="productOverlay rounded" >                   

            <div className='productIcons bg-success px-2 py-1 text-white rounded'  onClick={handleChartClick}>
                <span>
                    <i className="bi bi-cart3" style={{fontSize:'20px'}}/>
                </span> 
            </div>

            <div className='productIcons mt-4 bg-success px-2 py-1 text-white rounded'>
                <span>
                    <i className="bi bi-heart" style={{fontSize:'20px'}}/>
                </span> 
            </div>

        </div>
        
    </div>
  )
}

export default Product