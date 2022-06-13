import React from 'react'
import './GetStarted.scss'
import { Container,Row } from 'react-bootstrap'

const GetStarted = () => {
  return (
    <div className="get-started">
      <Container>
        <Row>
          <h1>GET STARTED</h1>
          <p>With a fast & free QLS stocking analysis.</p>
          <button className="mt-2">Learn More</button>
        </Row>
      </Container>
    </div>
  )
}

export default GetStarted