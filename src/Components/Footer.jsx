
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='wrapper footer bg-dark text-light'>

        <div className='flexContainer footerWrapper'>

            <div className='w-30'>

                <h3 >Shopify</h3>

                <div className='border-top border-secondary  '>
                    
                     <p>
                        <i className="bi bi-geo-alt"/> 
                        <span className='footerText'>New horizon, Ikeja</span>
                    </p>

                    <p>
                        <i className="bi bi-envelope"/>
                        <span className='footerText'>info@rotimiOlumide@gmail.com</span>
                    </p>

                    <p>
                        <i className="bi bi-telephone"/>
                        <span className='footerText'>08140836550</span>
                    </p>

                </div>
            </div>

            <div className='w-30 mt-5 mt-md-0'>

                <h3>Further Info</h3>

                <div className='border-top border-secondary'>

                    
                        <Link to='/'>Home</Link>
                    
                    <p>
                         <Link to='/about'>About</Link>
                    </p>
                    <p>
                        <Link to='/contact'>Contact</Link>
                    </p>
                    <p>
                        <Link to='/shop'>Shop</Link>
                    </p>

                </div>
                
            </div>

        </div>

    </div>  
    )
}

export default Footer

