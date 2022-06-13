import React from "react";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products py-5">
      <h1 className="py-3">BE <span>FIRST TO MARKET</span> WITH THESE HOT NEW PRODUCT</h1>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Filter">
          <Container>
            <Row className="gy-4">
              <Col md={6} lg={4}>
                <Product />
              </Col>
              <Col md={6} lg={4}>
                <Product />
              </Col>
              <Col md={6} lg={4}>
                <Product />
              </Col>
              <Col md={6} lg={4}>
                <Product />
              </Col>
              <Col md={6} lg={4}>
                <Product />
              </Col>
              <Col md={6} lg={4}>
                <Product />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="WiperBlades" title="Wiper Blades">
          lajsdf
        </Tab>
        <Tab eventKey="Lighting" title="Lighting">
          sd;fk
        </Tab>
        <Tab eventKey="Chemicals" title="Chemicals">
          sd;fk
        </Tab>
        <Tab eventKey="Lubricant" title="Lubricant">
          sd;fk
        </Tab>
        <Tab eventKey="TireService" title="Tire Service">
          sd;fk
        </Tab>
      </Tabs>
    </div>
  );
};

export default Products;
