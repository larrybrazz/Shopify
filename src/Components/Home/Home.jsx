
import React from 'react';

import Carousel from './Carousel';
import TopProducts from './TopProducts';

import { topProduct } from '../../data/data';




const Home = () => {

  const topProductArray= topProduct.map((product,index)=>{
      return <TopProducts {...product} key={index}/>
  })

  return (
    <div className='pages'>
      <Carousel/>
      <section className='wrapper gridContainer productCategoryWrapper'>
        
            <div className='flexContainer sectionHeaderWrapper'>
                 <h2 className='sectionHeader'>Categories Of The Month</h2>
                 <p >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='flexContainer productsWrapper'>

                {topProductArray}

            </div>

      </section>
    </div>
  )
}

export default Home