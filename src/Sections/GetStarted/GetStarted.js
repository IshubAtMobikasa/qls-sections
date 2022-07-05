import React from 'react'
import './GetStarted.scss'
import { Col, Container,Row } from 'react-bootstrap'

const GetStarted = () => {
  return (
    <div className="get-started">
      <Container>
        <Row>
          <Col className="mx-5 mx-md-0">
            <h1>GET STARTED</h1>
            <p>With a fast & free QLS stocking analysis.</p>
            <button>Learn More</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GetStarted