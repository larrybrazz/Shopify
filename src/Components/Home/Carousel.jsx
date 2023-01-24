
import React from 'react';

import CarouselText from './CarouselText';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">

        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>

      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">

            <div className='flexContainer imageContainer wrapper flex-column-reverse flex-lg-row'>

             <CarouselText textColor='secondary'/>

             <div style={{minWidth:'50%', maxWidth:'70%', margin:'0 auto'}}>
                <img src="images/lamp.jpg" alt="lamp"/>
             </div>

            </div>

        </div>

        <div className="carousel-item ">

          <div className='imageContainer flexContainer wrapper flex-lg-row flex-column-reverse'>
              
            <CarouselText textColor='primary'/>

            <div style={{minWidth:'50%',maxWidth:'70%', margin:'0 auto'}}>
               <img src="images/shoe.jpg" alt="shoe"/>
            </div>

          </div>

        </div>

        <div className="carousel-item">

          <div className="flexContainer imageContainer wrapper flex-column-reverse flex-lg-row">

            <CarouselText textColor='info'/>

            <div style={{minWidth:'50%', maxWidth:'70%', margin:'0 auto'}}>
              <img src="images/curology.jpg" alt="curology"/>
            </div>

          </div>

        </div>

      </div>

      <button className="carousel-control-prev prevCarouselControl" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span aria-hidden="true">
          <i className="bi bi-skip-backward text-primary" style={{fontSize:'40px'}}/>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next nextCarouselControl" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">

        <span aria-hidden="true">

          <i className="bi bi-skip-forward text-primary" style={{fontSize:'40px'}}/>

        </span>

        <span className="visually-hidden">Next</span>

      </button>

  </div>
  )
}

export default Carousel;