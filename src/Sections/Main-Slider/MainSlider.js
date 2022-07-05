import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactElasticCarousel from 'react-elastic-carousel'
import './MainSlider.scss'
import scrollIndicator from '../../Assets/Scroll Indicator.png'

const MainSlider = () => {

  const scrollTo=()=>{
  window.scrollTo(0,450)
  }
  return (
    <div className="carousel_container">
        <ReactElasticCarousel verticalMode={true} showArrows={false} initialActiveIndex={1} className='carousel_wrapper'>
            <div className="carousel one">
            </div>
            <div className="carousel two">
                <Container>
                <div className="carousel_caption">
                    <h4>Quick and Convinient</h4> 
                    <h1>Local Service</h1>
                    <p>A scalable disterbuion model for quick growth</p>
                    <button>Learn More</button>
                </div>
                </Container>
            </div>

            <div className="carousel three">
            </div>
            
        </ReactElasticCarousel>

    <img src={scrollIndicator} alt="" className="icon cursor-pointer" onClick={()=>scrollTo()} />
    </div>
  )
}

export default MainSlider