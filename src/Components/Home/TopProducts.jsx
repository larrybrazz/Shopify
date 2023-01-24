
import React from 'react'
import { Link } from 'react-router-dom'

const TopProducts = ({imageSrc,productName,productCategory}) => {
  return (
    <div className='flexContainer topProductWrappers mt-lg-0 mt-5'>
        
        <div className='productWrappers'>

            <img src={imageSrc} alt={productName}/>

        </div>

        <p className='fw-bold'>{productCategory}</p>

        <Link className="btn btn-success" to="/shop" preventScrollReset={true} role="button" style={{width:'fit-content', height:'fit-content', padding:'10px 20px'}}>

          <span style={{fontWeight:'bold'}}>To Shop</span>

        </Link>

    </div>
  )
}

export default TopProducts