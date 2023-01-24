

import React,{useState} from "react";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OffCanvas from '../components/OffCanvas';

export const stateContext = React.createContext();

const ContextWrapper = (props)=>{

  const [chartDisplay, setChartDisplay] = useState(false);
  const [userSelectedProducts, setuserSelectedProducts] = useState([]);
  const [enableClick, setEnableClick] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [personLoggedIn, setPersonLoggedIn] = useState(undefined);

  const sortSelectedProduct = (selectedProduct)=>{

    const productArray = Object.values(selectedProduct);

    const isContained = userSelectedProducts.some((productObj)=>{
        return Object.values(productObj).every((item,index)=>{
           return  item === productArray[index];
        })
    })

    const disableClick=()=>{
      const doc = document.getElementById("products");
      doc.style.cursor='wait';

      setTimeout(()=>{
        doc.style.cursor='pointer';
        setEnableClick(true)
      },5700)
    }

    if (!isContained) {
      setuserSelectedProducts((prevProducts)=>{
        return [...prevProducts, selectedProduct]
      })
      toast.success('Product added to Chart')
    }else{
      toast.info('Chart already contains product')
    }
    disableClick()
    setEnableClick(false);
  }

  return(
      <stateContext.Provider value={{chartDisplay,setChartDisplay, userSelectedProducts, sortSelectedProduct, enableClick, totalCost, setTotalCost,totalItemCount, setTotalItemCount, personLoggedIn, setPersonLoggedIn}}>

          {props.children}

          <ToastContainer
              autoClose={5000}
              hideProgressBar={true}
              limit={1}
          />

          {
            chartDisplay? <OffCanvas userSelectedProducts={userSelectedProducts}/> : ''
          } 

      </stateContext.Provider>
  )
}

export default ContextWrapper;