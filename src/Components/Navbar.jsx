
import React,{useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import { stateContext } from '../context/ContextWrapper';

const Navbar = () => {

    const stateObject = useContext(stateContext);

    const {setChartDisplay, userSelectedProducts, personLoggedIn, setPersonLoggedIn} = stateObject;

    const navigate = useNavigate();

    const handleCartClick = ()=>{

        if (personLoggedIn)
            setChartDisplay(true);
        else
            navigate('/login') 
    }

  return (
    <div className='border-bottom border-secondary'>

        <div className='px-5 flexContainer py-3 bg-dark text-light d-none d-lg-flex ' style={{fontSize:'16px'}}>

            <div className='flexContainer navIconWrappers'>
                <i className="bi bi-envelope"/>
                <span>info@shopify.com</span>
                <i className="bi bi-telephone"/>
                <span>08154433526</span>
            </div>

            <div className='flexContainer justify-content-end navIconWrappers'>
                 <i className="bi bi-facebook me-3"/>
                 <i className="bi bi-twitter me-3"/>
                 <i className="bi bi-linkedin me-3"/>
                 <i className="bi bi-instagram me-3"/>
            </div>

        </div>

        <nav className=" px-5 navbar navbar-expand-lg" style={{background:"white"}}>

            <div className="container-fluid px-0 ">

                <NavLink className="navbar-brand" to= '/'>

                    <h1>Shopify</h1>

                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse  px-0" id="navbarSupportedContent" >
                    <ul className="flexContainer navLinkWrapper navbar-nav mb-2 mb-lg-0 ">

                        <li className="nav-item">
                            <NavLink className="navLink" to='/'>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                             <NavLink className="navLink" to='/shop'>
                                 Shop
                            </NavLink>
                        </li>

                        {
                            !personLoggedIn? <li className="nav-item">

                                                <NavLink className="navLink" to ='/login'>
                                                    Log In
                                                </NavLink>

                                            </li>
                                            : ''
                        }

                        {
                            !personLoggedIn? <li className="nav-item">

                                                <NavLink className="navLink" to ='/signup'>
                                                    Sign Up
                                                </NavLink>
                            
                                            </li>
                                            : ''
                        }

                        {
                            personLoggedIn?<li className='logout nav-item' onClick={()=>setPersonLoggedIn(undefined)} style={{cursor:'pointer'}}>                      
                                                
                                                    Log Out
                                                                         
                                            </li>
                                            : ''
                        }
                        
                        <div onClick={handleCartClick} className="cartToggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="offcanvasExample">
                            <i className="bi bi-cart3" style={{fontSize:'23px'}}/>

                            <div className='text-center  text-dark' style={{width:'24px', height:'24px', borderRadius:'12px', lineHeight:'24px', position:'absolute', zIndex:'100', top:'-2px', left:'30%', background:'#d9d9d9'}}>
                                {userSelectedProducts.length}
                            </div>
                        </div>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar