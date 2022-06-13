import React from 'react'
import { Container } from 'react-bootstrap'
import ReactElasticCarousel from 'react-elastic-carousel'
import './MainSlider.scss'
import slider1 from '../../Assets/QLS-BUILDING-16x6-DARK.png'
import slider2 from '../../Assets/Mobile-banner.jpg'
import scrollIndicator from '../../Assets/Scroll Indicator.png'

const MainSlider = () => {
  return (
    <div className="carousel_container">
        <ReactElasticCarousel showArrows={false} initialActiveIndex={1} className='carousel_wrapper'>
            <div className="carousel">
                <img src={slider2} alt="" />
            </div>
            <div className="carousel">
                <img src={slider1} alt="" />
                <div className="carousel_caption">
                    <h4>Quick and Convinient</h4> 
                    <h1>Local Service</h1>
                    <p>A scalable disterbuion model for quick growth</p>
                    <button>Learn More</button>
                </div>
                
            </div>

            <div className="carousel">
                <img src={slider2} alt="" />
            </div>
            
        </ReactElasticCarousel>

    <img src={scrollIndicator} alt="" className="icon" />
    </div>
  )
}

export default MainSlider