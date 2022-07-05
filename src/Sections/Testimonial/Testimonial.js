import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Testimonial.scss'
import TestimonialGuy from '../../Assets/man.png'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='testimonial mt-5'>
        <Container>
            <Row>
            <Col md={4} className='d-none d-md-block'>
            <div className="over-lap-img">
              <img src={TestimonialGuy} alt="" />
            </div>
            </Col>
            <Col md={8}>
        <div className="review">
            <p>
            <FaQuoteLeft className="quote-left"/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni suscipit consequuntur aperiam, ullam at unde, iste dignissimos eaque aut laboriosam dolor delectus tenetur, eos fuga corrupti neque blanditiis dolorum illo? 
            <FaQuoteRight className="quote-right"/></p>
            <span>Jhon Smith-Manager Jr's SuperLube</span>
        </div>
        </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Testimonial