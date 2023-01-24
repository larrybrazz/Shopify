
import React,{useState, useEffect, useRef, useContext} from 'react';
import { useNavigate } from 'react-router';

import { stateContext } from '../../context/ContextWrapper.jsx';

import PageIfError from './PageIfError.jsx';
import Pagination from './Pagination.jsx';

import { fetchProducts } from '../../axios/axios.js';


const Shop = () => {

  const [products, setProducts] = useState([]);

  const [error, setError] = useState('');

  const [screenWidth, setScreenWidth] = useState(undefined);


  const stateObject = useContext(stateContext);

  const {personLoggedIn} = stateObject;

  const navigate = useNavigate();

  let productLimit = useRef(0);

  const largeScreenproductLimit = 9;

  const mediumScreenproductLimit = 6;

  const smallScreenproductLimit = 4;

  const watchScreenResize = ()=>{

    const isLarge = window.innerWidth > 1000;

    const isMedium = window.innerWidth >= 500 && window.innerWidth <= 1000;

    const isSmall = window.innerWidth < 500

    if(isLarge && screenWidth !== "large"){
      productLimit.current = largeScreenproductLimit
      setScreenWidth("large")
    }
    else if(isMedium && screenWidth !== "medium"){
      productLimit.current = mediumScreenproductLimit;
      setScreenWidth('medium')
    }
    else if(isSmall && screenWidth !== "small")
    {
      productLimit.current = smallScreenproductLimit;
      setScreenWidth('small');
    }
  }

  useEffect(()=>{
    if (!personLoggedIn) {
      navigate('/login',{state:{path:'/shop'}})
    }
  }, [personLoggedIn])

  useEffect(()=>{

    window.addEventListener('resize', watchScreenResize)

    watchScreenResize();

    fetchProducts(setProducts,setError);

  },[]);

  if(personLoggedIn){
    if(products.length){
      return (
        <Pagination products={products} productLimit={productLimit.current}/>
      )
    }else{
      return(
        <PageIfError error={error}/>
      )
    }
  }
}

export default Shop