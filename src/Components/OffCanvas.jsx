
import React,{useContext} from 'react';

import ChartContent from './shop/ChartContent';

import { stateContext } from '../context/ContextWrapper';


const OffCanvas = () => {
    
    const sateObject = useContext(stateContext);

    const {setChartDisplay, userSelectedProducts,totalCost,totalItemCount} = sateObject;

    const handleClick = ()=> setChartDisplay(false);

    const renderUserSelectProduct = ()=>{

        if(userSelectedProducts.length){

            return userSelectedProducts.map((product, index)=>{

                return <ChartContent key={index} product = {product} />
            })
        }

        return <p> Your Chart is empty </p>
    }

  return (
    <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" style={{zIndex:'10000'}}>
        <div class="offcanvas-header">
            <div class="offcanvas-title" id="staticBackdropLabel">
                <h5 className='border-bottom pb-2'>Shopping Cart</h5>
                <span className='fw-bold'>Subtotal ({totalItemCount} {totalItemCount > 1? "items" :"item"}): {totalCost} USD </span>
            </div>
            <button onClick={handleClick} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
                {renderUserSelectProduct()}
        </div>
    </div>
  )
}

export default OffCanvas