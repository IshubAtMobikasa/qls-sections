import React from "react";
import  './Search.scss'
import { Container, Row, Col, Form,Tabs,Tab } from "react-bootstrap";
import InputSearch from "./Component/InputSearch";

const Search = () => {
  return (
    <div className="search py-5">
        <div className="desktop-view">
        <h6 className="text-center pb-4 ">TRY OUR EASY-TO-USE APPLICATION SEARCH</h6>
      <Container className="p-5 bg-white">

        <Row>
          <Col md={3}>
            <Form.Check type="radio" name="a" id="a" htmlFor="a"label="Light Duty / Passengers Car"></Form.Check>
            <div className="d-flex"> 
            <Form.Check type="radio" name="a" id="b" htmlFor="b" label="Heavy Duty"></Form.Check>
            <Form.Check type="radio" name="a" id="c" htmlFor="c" label="Powersports" className="ms-4"></Form.Check>
            </div>
          </Col>
          <Col md={9}>
        <div className="d-flex justify-content-between ps-5 flex-wrap">
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
         
                <button className="btn rounded-0 primary-color">Search</button>
          
        </div>
        </Col>
        </Row>


        <Row className="py-5">
          <Col md={4}>
              <InputSearch color="#1b69a7" title="VIN NUMBER SEARCH" placeholder="Lorem" example="lorem ipsum da"/>
          </Col>
          <Col md={4}>
              <InputSearch color="#ee2c2a" title="PART NUMBER SEARCH" placeholder="Lorem" example="lorem ipsum da"/>
          </Col>
          <Col md={4}>
              <InputSearch color="#ee2c2a"  title="CROSS REFRENCE" placeholder="Lorem" example="lorem ipsum da"/>
          </Col>
          </Row>
      </Container>
      </div>
      

      <div className="mobile-view">
     
      <Tabs
        defaultActiveKey="classic"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        
        <Tab eventKey="classic" title="Classic">
        <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="select">
                <Form.Select aria-label="Default select example">
                    <option>Select Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>

            <Form.Check name="a" type="radio" label="Light Duty / Passengers Car"></Form.Check>
            <div className="d-flex"> 
            <Form.Check name="a" type="radio" label="Heavy Duty"></Form.Check>
            <Form.Check name="a" type="radio" label="Powersports" className="ms-4"></Form.Check>
            </div>
            
            <button className="btn btn-primary w-100 py-3 rounded-0 mt-4 ">Submit</button>


        </Tab>
        <Tab eventKey="vinNumber" title="Vin Number">
        <InputSearch color="#1b69a7" title="VIN NUMBER SEARCH" placeholder="Lorem" example="lorem ipsum da"/>
        </Tab>
        <Tab eventKey="partNumber" title="Part Number">
        <InputSearch color="#ee2c2a" title="PART NUMBER SEARCH" placeholder="Lorem" example="lorem ipsum da"/>
        </Tab>
        <Tab eventKey="crossRef" title="Cross Ref">
        <InputSearch color="#ee2c2a"  title="CROSS REFRENCE" placeholder="Lorem" example="lorem ipsum da"/>
        </Tab>
      </Tabs>
      
      </div>
    </div>
  );
};

export default Search;
