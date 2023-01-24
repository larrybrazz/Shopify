
import React, { useState, useEffect } from 'react';

import PageIfProducts from './PageIfProducts';
import Product from './Product';
import Button from '../Button';

const Pagination = ({products, productLimit}) => {

    const pages = Math.round(products.length / productLimit);

    const [currentPage, setCurrentPage] = useState(1);

     const goToNextPage = ()=>{
        setCurrentPage((page)=> page + 1)
     }

     const goToPreviousPage = ()=>{
        setCurrentPage((page)=> page - 1)
     }

     const getPaginatedData = ()=>{
        const startIndex = (currentPage * productLimit) - productLimit;
        const endIndex = startIndex + productLimit;
        return products.slice(startIndex, endIndex);
     }

     const productArray = getPaginatedData().map((product,index)=>{
        return <Product key={index} product={product}/>
     })

  return (
    <PageIfProducts productArray={productArray} pages={pages} currentPage={currentPage}>
        <Button buttonText='Previous' buttonColor='primary' clickFunction={goToPreviousPage} btnStyle={{padding:'7px 20px', margin:'2'}} buttonType='button'/>
        <Button buttonText='Next' buttonColor='secondary' clickFunction={goToNextPage} btnStyle={{padding:'7px 20px', margin:'2'}} buttonType='button'/>
    </PageIfProducts>
  )
}

export default Pagination